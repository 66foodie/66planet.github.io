# Overland, Again — RWD 與安全性調整紀錄

> 本次僅調整 **手機 / iPad 斷點的可讀性** 與 **安全性（Checkmarx / SECURITY_DEV_SPEC）**。
> 桌機版（≥ 901px）視覺切版框架、欄寬、字級一律維持不變。
> 內容檔 `js/data.js` 未更動。

---

## A. RWD 調整（css/style.css）

### 就地修正
1. `.masthead__sub` 原本 `font-size: px;`（無效值）→ 修正為 `18px`（等同原桌機繼承值，桌機觀感不變）。

### 新增「12. RWD 強化」區塊（檔尾，後於既有規則，同特異度自然覆蓋）
斷點階梯：`≤1024`（iPad 橫向）／`≤900`（iPad 直向）／`≤600`（大手機）／`≤400`（小手機）。

| 問題 | 調整 |
|------|------|
| `--pad: 44px` 固定，手機吃掉內容寬 | gutter 隨斷點收斂：44 → 30（≤900）→ 18（≤600）→ 15（≤400） |
| 系列頁 `1fr 1fr` 兩欄手機不塌欄 | ≤600 收為單欄；`.card--feature` 同步改回單欄 |
| `.tabs` 無 `flex-wrap`、分頁名稱長會溢出 | ≤600 加 `flex-wrap: wrap` |
| `.masthead__sub` 有 `nowrap` 手機爆版 | ≤600 改 `white-space: normal`，字級 16px、行距 1.55 |
| 首頁大標 clamp 下限偏大 | ≤600 降為 `clamp(40px,13vw,72px)`；≤400 再降 |
| 首頁系列導引三欄擠 | ≤600 收為單欄、分隔線改下框線 |
| 引言卡在窄卡片內壓迫 | ≤600 引言 22px、內距收斂；≤400 引言 20px |
| 文中並排插圖固定四欄 | 四欄 → 三欄（≤900）→ 兩欄（≤600）；橫式圖 ≤600 改單欄不裁切 |
| 內文行距 | `.article-body p` ≤600 行距提升為 1.72（字級維持，強化閱讀） |

> 桌機（≥ 901px）不落入任何上述 media query，渲染與原版逐像素一致。

---

## B. 安全性調整（js/main.js）— 對應 SECURITY_DEV_SPEC 第 14 章 / Checkmarx

| 項目 | 原狀況 | 調整 | 對應規則 |
|------|--------|------|----------|
| 內聯事件處理器 | 插圖使用 `onload="..."`（inline event） | 移除；改於渲染後以 `addEventListener('load', …)` 綁定，並處理已快取圖片（`img.complete`） | 14.2 禁止內聯事件；Checkmarx 內聯事件 / CSP |
| 輸出編碼 | `esc()` 僅轉義 `& < > "` | 額外轉義 `'` 與 `` ` ``（縱深防禦） | 2.2 輸出編碼 |
| 內聯樣式 | 找不到文章的連結用 `style="color:…"` | 改為 `.link-accent` class | 14.2 精神（不內聯） |

### AI 自評（規格第 9 章）
- **Injection：** 無伺服器端、無 SQL/命令拼接。純靜態站。
- **XSS：** 所有動態值皆經 `esc()` 編碼後才進入 DOM；已用 jsdom 注入 `<img onerror>` 於標題實測，輸出為純文字節點、未生成 `<img>`。唯一外部輸入 `?slug=` 僅用於 `===` 比對，**從未寫入 DOM**，無 tainted-source→sink 資料流。
- **Secrets：** 無硬編碼密鑰。
- **外部連結：** 無 `target="_blank"`，故無 `rel="noopener"` 缺漏。
- **已淘汰 API：** 無 `document.write` / `eval` / `outerHTML`。

### 關於 `innerHTML`（供 code review 判斷）
渲染器仍以 `element.innerHTML = 已編碼字串` 組裝畫面。判斷如下：
- 所有插入值均經 `esc()`；唯一外部輸入（slug）不入 DOM，故 Checkmarx 的 DOM-XSS query 無可追蹤的污染資料流，通常不會產生高風險項。
- 若貴專案的 Checkmarx preset 會對 `innerHTML` 語法本身報 medium，兩種處理擇一：
  1. 依規格第 10 章列入「安全例外清單」（附本文件之緩解說明）；或
  2. 將 `main.js` 重構為 `createElement` + `textContent` 的 DOM builder，徹底移除 `innerHTML`（我可另行提供，輸出 DOM 與現版逐一比對確保零回歸）。

---

## C. 驗證
- `node --check` 通過（main.js / data.js）。
- jsdom 實跑首頁 / 系列頁 / 文章頁：分頁、卡片、引言卡、系列導引、hero、pullquote、10 張並排插圖、上下篇連結皆正確；無 `onload` 屬性殘留。
