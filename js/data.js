/* ============================================================
   SOUTHBOUND — content lives here.
   ------------------------------------------------------------
   TO ADD A PHOTO : drop the file in  image/  and point to it
                    (e.g. "image/my-photo.jpg").
   TO ADD AN ARTICLE : copy one { … } block below, change the
                    fields, and give it a unique "slug".
   TO ADD A SERIES : add an entry to SERIES and create a page
                    (copy melbourne.html, change data-series).
   Nothing else needs editing — the pages build themselves.
   ============================================================ */

window.SITE = {
  title: "Overland, Again",
  tagline:
    "Notes & photographs from a slow trip down the southern edge of Australia.",
  meta: "Melbourne & Adelaide · 2026",
};

/* order here = order of the tabs */
window.SERIES = {
  melbourne: {
    no: "01",
    name: "Marvellous Melbourne",
    blurb:
      "A week learning to read the city sideways — laneways, trams, and very slow breakfasts.",
  },

  theOverland: {
    no: "1.5",
    name: "The Overland Train",
    blurb: "The Overland Train connected two cities.",
  },

  adelaide: {
    no: "02",
    name: "City of Churches, Adelaide",
    blurb:
      "A quieter capital. Wide streets, the Central Market, and a day lost in the Hills.",
  },
};

/* A short quote card that gets dropped into the middle of the
   'All' index grid. Set to null to remove it. */
window.FEATURE_QUOTE = {
  label: "On the road",
  text: "You don't really leave a place. You just start carrying it.",
  source: "Somewhere on the Great Ocean Road",
};

// Melbourne Page

window.ARTICLES = [
  {
    slug: "Southern Cross Station",
    series: "melbourne",
    no: 1,
    size: "feature", // "feature" = big card | "" = normal
    title: "First Flat White, Reconnecting with Melbourne CBD",
    dek: "抵達墨爾本CBD的第一站，第一杯flat white喚醒了長途旅程後的自己。",
    date: "16 June 2026",

    image: "image/m/melbourne-01.jpg",
    hero: "image/m/melbourne-01.jpg",
    heroCaption:
      "Southern Cross Station-Under a roof shaped like waves, the journey quietly begins.",
    inline: [
      "image/m/melbourne-01a-inline.jpg",
      "image/m/melbourne-01b-inline.jpg",
      "image/m/melbourne-01c-inline.jpg",
      "image/m/melbourne-01d-inline.jpg",
      "image/m/melbourne-01e-inline.jpg",
      "image/m/melbourne-01f-inline.jpg",
      "image/m/melbourne-01g-inline.jpg",
      "image/m/melbourne-01h-inline.jpg",
      "image/m/melbourne-01i-inline.jpg",
      "image/m/melbourne-01j-inline.jpg",
    ],
    pullquote: "用第一杯Flat White與久違的Melbourne CBD對頻",

    body: [
      "在墨爾本機場外搭乘Sky Bus抵達波浪屋頂下的Southern Cross Station. 待Sue的過程中迎來熟悉的tram一輛輛的穿梭著。這就是墨爾本，安靜卻篤定。當年這些電車聲是我日常的背景音。多年後同樣的叮噹聲響起，回憶則被喚醒",
    ],
  },

  {
    slug: "tram-map",
    series: "melbourne",
    no: 2,
    size: "",
    title: "The First Step, Twenty-Three Years Late",
    dek: "準備飛越整個南半球，去見一座既熟悉又陌生的城市。.",
    date: "15 June 2026",

    image: "image/m/melbourne-02.jpg",
    hero: "image/m/melbourne-02.jpg",
    heroCaption: "Singapore Airlines: the same midnight layover, twenty-three years later.",

    inline: [
      "image/m/melbourne-02a-inline.jpg",
      "image/m/melbourne-02b-inline.jpg",
      "image/m/melbourne-02c-inline.jpg",
      "image/m/melbourne-02d-inline.jpg",
      "image/m/melbourne-02e-inline.jpg",
      "image/m/melbourne-02f-inline.jpg",
      "image/m/melbourne-02g-inline.jpg",
      "image/m/melbourne-02h-inline.jpg",
      "image/m/melbourne-02i-inline.jpg",
      "image/m/melbourne-02j-inline.jpg",
    ],
    pullquote:
      "Distance doesn't cause longing. It just gives it a place to stand.",
    body: [
      "思念，是距離走出來的影子；而有些距離，從不用公里丈量，只用年份，一圈一圈地繞。出發那一刻，行李箱裝的不只是換洗衣物，還有一份懸念——這座城市變了多少？我又變了多少？",
      "轉機的候機室是一種奇怪的中介地帶，哪裡都不是，卻讓人開始練習「抵達」這件事——先是心理上的，才是地理上的。長途航班裡，時區一格一格往後退，窗外的雲層换了好幾種形狀，而南緯 37 度，始終在某個看不見的地方等著。",
      "真正落地前的那幾分鐘最誠實：不是興奮，是一種混合著陌生與熟悉的靜默——你即將抵達一個你曾經很懂、卻已經 23 年沒有更新的地方。 這趟旅程，與其說是「回去」，不如說是一次遲到 23 年的，重新見面。",
    ],
  },

  {
    slug: "buildings",
    series: "melbourne",
    no: 3,
    size: "",
    title: "A City Built on a Grid, Freed by Its Soul, Melbourne",
    dek: "城市用框架列出，靈魂長出了自由。",
    date: "June 2026",

    image: "image/m/melbourne-03.jpg",
    hero: "image/m/melbourne-03.jpg",
    heroCaption: "Melbourne CBD — Hoddle Grid - Straight lines drawn in 1837, still holding the whole city together.",

    inline: [
      "image/m/melbourne-03a-inline.jpeg",
      "image/m/melbourne-03b-inline.jpeg",
      "image/m/melbourne-03c-inline.jpeg",
      "image/m/melbourne-03d-inline.jpeg",
      "image/m/melbourne-03e-inline.jpeg",
      "image/m/melbourne-03f-inline.jpeg",
      "image/m/melbourne-03g-inline.jpeg",
      "image/m/melbourne-03h-inline.jpeg",
      "image/m/melbourne-03i-inline.jpeg",
      "image/m/melbourne-03j-inline.jpeg",
      "image/m/melbourne-03k-inline.jpeg",
      "image/m/melbourne-03l-inline.jpeg",
      "image/m/melbourne-03m-inline.jpeg",
      "image/m/melbourne-03n-inline.jpeg",
      "image/m/melbourne-03o-inline.jpeg",
      "image/m/melbourne-03p-inline.jpeg",
      "image/m/melbourne-03q-inline.jpeg",
      "image/m/melbourne-03r-inline.jpeg",
      "image/m/melbourne-03s-inline.jpeg",
       "image/m/melbourne-03t-inline.jpeg",
      "image/m/melbourne-03u-inline.jpeg",
      "image/m/melbourne-03v-inline.jpeg",
      "image/m/melbourne-03w-inline.jpeg",
      "image/m/melbourne-03x-inline.jpeg",
      "image/m/melbourne-03y-inline.jpeg",
      "image/m/melbourne-03z-inline.jpeg",
      "image/m/melbourne-03za-inline.jpeg",
      "image/m/melbourne-03zb-inline.jpeg",
      "image/m/melbourne-03zc-inline.jpeg",
      "image/m/melbourne-03zd-inline.jpeg",
      "image/m/melbourne-03ze-inline.jpeg",
      "image/m/melbourne-03zf-inline.jpeg",
    ],

    pullquote: "A city can be measured. A soul cannot.",
    body: [
      "1837 年，Hoddle 用尺與筆，為一座只有四千人的聚落，量出一副筆直的骨骼——街道是秩序的重量，方格是野心的形狀。這就是有名的「霍德爾方格網 Hoddle Grid」。系統架構只管得住街道，管不住人文風貌——巷弄從來不在藍圖裡，是整座城市的日常，悄悄從規矩的縫隙裡長出來。金礦潮的財富灌進骨架之間：拱廊商場鑲上鑄鐵花飾，維多利亞式陽台一路蔓延，而巷弄，則悄悄長成了塗鴉、咖啡館與夜色。",
    ],
  },
  {
    slug: "rooftop-cinema",
    series: "melbourne",
    no: 4,
    size: "",
    title: "Hawthorn to Rye: Two Homes, One Australian Life",
    dek: "另一種「澳洲生活」——更慢，更靠海，更沒有邊界。",
    date: "June 2026",

    image: "image/m/melbourne-04.jpg",
    hero: "image/m/melbourne-04.jpg",
    // heroPortrait: true,
    heroCaption: "The skyline glows behind the screen as the film starts.",
    inline: [
      "image/m/melbourne-04a-inline.jpeg",
      "image/m/melbourne-04ab-inline.jpeg",
      "image/m/melbourne-04b-inline.jpeg",
      "image/m/melbourne-04c-inline.jpeg",
      "image/m/melbourne-04d-inline.jpeg",
      "image/m/melbourne-04e-inline.jpeg",
      "image/m/melbourne-04f-inline.jpeg",
      "image/m/melbourne-04g-inline.jpeg",
      "image/m/melbourne-04h-inline.jpeg",
      "image/m/melbourne-04i-inline.jpeg",
      "image/m/melbourne-04j-inline.jpeg",
      "image/m/melbourne-04k-inline.jpeg",
      "image/m/melbourne-04l-inline.jpeg",
      "image/m/melbourne-04m-inline.jpeg",
      "image/m/melbourne-04n-inline.jpeg",
      "image/m/melbourne-04o-inline.jpeg",
      "image/m/melbourne-04p-inline.jpeg",
      "image/m/melbourne-04q-inline.jpeg",
      "image/m/melbourne-04r-inline.jpeg",
      "image/m/melbourne-04s-inline.jpeg",
      "image/m/melbourne-04t-inline.jpeg",
      "image/m/melbourne-04u-inline.jpeg",
      "image/m/melbourne-04v-inline.jpeg",
      "image/m/melbourne-04w-inline.jpeg",
      "image/m/melbourne-04x-inline.jpeg",
      "image/m/melbourne-04y-inline.jpeg",
    ],

    pullquote:
      "Two homes gave me all of Australian family life I know.",
    body: [
      "Hawthorn 是我 23 年前住過的Mardling家——墨爾本內城的電車街廓，是我最初認識「澳洲生活」的地方：規律的通勤、街角的咖啡儀式、維多利亞式陽台下的日常節奏。那是這座城市教會我的第一套生活語言。",
      "後來Sue搬到了 Rye——Mornington Peninsula 的濱海小鎮，曾是石灰窯與漁業聚落，二戰後才慢慢變成墨爾本人週末逃逸的海邊角落。這裡的節奏不靠街道規劃，靠潮汐與天氣：木棧碼頭、老式度假小屋、White Cliffs 的石灰窯遺跡，提醒著我，這是另一種「澳洲生活」——更慢，更靠海，更沒有邊界。",
    ],
  },

  {
    slug: "Cape Schanck",
    series: "melbourne",
    no: 5,
    size: "",
    title: "Cape Schanck-Bushrangers Bay",
    dek: "Mornington Peninsula National Park",
    date: "March 2026",

    image: "image/m/melbourne-05.jpeg",
    hero: "image/m/melbourne-05.jpeg",
    heroCaption: "The skyline glows behind the screen as the film starts.",

    inline: [
      "image/m/melbourne-05a-inline.jpeg",
      "image/m/melbourne-05b-inline.jpeg",
      "image/m/melbourne-05c-inline.jpeg",
      "image/m/melbourne-05d-inline.jpeg",
      "image/m/melbourne-05e-inline.jpeg",
      "image/m/melbourne-05f-inline.jpeg",
      "image/m/melbourne-05g-inline.jpeg",
      "image/m/melbourne-05h-inline.jpeg",
      "image/m/melbourne-05i-inline.jpeg",
      "image/m/melbourne-05j-inline.jpeg",
      "image/m/melbourne-05k-inline.jpeg",
      "image/m/melbourne-05l-inline.jpeg",
      "image/m/melbourne-05m-inline.jpeg",
      "image/m/melbourne-05n-inline.jpeg",
      "image/m/melbourne-05o-inline.jpeg",
      "image/m/melbourne-05p-inline.jpeg",
    ],

    pullquote:
      "Bushland, open grass, and salt riding on the wind.",
    body: [
      "從 Boneo Road car park 出發，走的是 Bushrangers Bay Track——步道先沿著 Main Creek 穿行，兩側是濃密的 banksia 灌木林投下的陰影，途中常能遇見袋鼠在林間低頭吃草。走著走著，林地漸漸讓位給開闊的草原，風開始從海的方向吹過來，遠遠能望見海岸線與 Bass Strait 的深藍——那是 Bushrangers Bay 的方向，只是這次，我沒有走到沙灘，就停在了那片草原與林徑之間。",
      "這片海灣的名字本身就是故事： 1853 年，兩名從塔斯馬尼亞逃脫的逃犯（bushrangers）據說在這裡登陸，海灣因此得名。海水不建議下水——強勁的離岸流與大浪讓這裡始終保持著一種未馴服的野性，也因此，它至今仍是那種只有走到才能抵達、開車到不了的秘境沙灘。",
      
    ],
  },

  {
    slug: "Searoad Ferry",
    series: "melbourne",
    no: 6,
    size: "",
    title: "Sorrento-Queenscliff",
    dek: "陸海空，三種方式，橫跨同一個南半球。",
    date: "18 Jun 2026",

    image: "image/m/melbourne-06.jpeg",
    hero: "image/m/melbourne-06.jpeg",
    heroCaption: "橫跨的是港灣收窄成一線的地方——Port Phillip 的南端咽喉",

    inline: [
      "image/m/melbourne-06a-inline.jpeg",
      "image/m/melbourne-06b-inline.jpeg",
      "image/m/melbourne-06c-inline.jpeg",
      "image/m/melbourne-06d-inline.jpeg",
      "image/m/melbourne-06q-inline.jpeg",
      "image/m/melbourne-06e-inline.jpeg",
      "image/m/melbourne-06f-inline.jpeg",
      "image/m/melbourne-06g-inline.jpeg",
      "image/m/melbourne-06h-inline.jpeg",
      "image/m/melbourne-06i-inline.jpeg",
      "image/m/melbourne-06j-inline.jpeg",
      "image/m/melbourne-06k-inline.jpeg",
    ],

    pullquote:
      "A ferry solved what the itinerary couldn't.",
    body: [
      "規劃整個旅程時，一直對 Geelong 排不進去感到兩難——直到有天 Sue 在跟我確認 Rye 的行程時，直接說要帶我一起搭 Searoad Ferries。從 Sorrento → Queenscliff。難題忽然有了答案(我就說嘛~這裡怎麼可能沒有Ferry)：不是繞路去 Geelong，是搭船跨過灣口，換一種方式抵達。這段渡輪，橫跨的是港灣收窄成一線的地方——Port Phillip 的南端咽喉，也是整片海灣通往 Bass Strait 的門戶。40 分鐘，取代了繞道墨爾本市區三小時的車程，像是抄了一條海上的近路",
      "Sorrento 這頭，是懸崖上的豪宅、被小艇填滿的靜謐灣澳，石灰岩老屋沿著海岸線鋪展——慵懶又講究的度假岸。Queenscliff 那頭，性格完全不同：黑色燈塔、老砲台要塞、維多利亞式老宅安靜矗立，帶著要塞般的莊重，是通往 Great Ocean Road 的門戶。",
      "這趟渡輪，橫跨南半球的旅程中安排一種海運，與後面的The Overland的陸運，以及QANTAS的空運，一起收進三點之中。也順手把 Geelong 那道解不開的難題，輕輕解開了。",
    ],
  },

  {
    slug: "Arts in Melbourne",
    series: "melbourne",
    no: 7,
    size: "",
    title: "Geelong: An Open-Air Museum, Every Day",
    dek: "Geelong 的藝術性是「市民的、日常的、非精緻化的」——巷弄壁畫、海濱地景裝置、社區共創——跟 Melbourne 那種畫廊/機構型藝術資本氣質不同",
    date: "18 Jun 2026",

    image: "image/m/melbourne-07.jpeg",
    hero: "image/m/melbourne-07.jpeg",
    heroCaption: "Here, art isn't hung on walls — it's woven into the walk.",

    inline: [
      "image/m/melbourne-07a-inline.jpeg",
      "image/m/melbourne-07b-inline.jpeg",
      "image/m/melbourne-07c-inline.jpeg",
      "image/m/melbourne-07d-inline.jpeg",
      "image/m/melbourne-07e-inline.jpeg",
      "image/m/melbourne-07f-inline.jpeg",
      "image/m/melbourne-07g-inline.jpeg",
      "image/m/melbourne-07h-inline.jpeg",
      "image/m/melbourne-07i-inline.jpeg",
      "image/m/melbourne-07j-inline.jpeg",
      "image/m/melbourne-07k-inline.jpeg",
      "image/m/melbourne-07l-inline.jpeg",
      "image/m/melbourne-07m-inline.jpeg",
      "image/m/melbourne-07n-inline.jpeg",
      "image/m/melbourne-07o-inline.jpeg",
      "image/m/melbourne-07p-inline.jpeg",
      "image/m/melbourne-07q-inline.jpeg",
      "image/m/melbourne-07r-inline.jpeg",
      "image/m/melbourne-07s-inline.jpeg",
      "image/m/melbourne-07t-inline.jpeg",
      "image/m/melbourne-07u-inline.jpeg",
      "image/m/melbourne-07v-inline.jpeg",
      "image/m/melbourne-07w-inline.jpeg",
      "image/m/melbourne-07x-inline.jpeg",
    ],

    pullquote:
      "Art here isn't hung — it's walked",
    body: [
      "Geelong 的藝術性方向很明確——它不是「藝廊城市」，是「街頭與市民藝術城市」。中央城區與濱海一帶密布巷弄壁畫，一部分由地產所有人委託，一部分由市政府有系統地推動，串成一條 Mural Trail；2022 年更邀來 19 位女性街頭藝術家共同為市中心注入色彩，提升女性在街頭藝術裡的能見度。",
      "濱海一帶則換了一種語言——超過 100 支彩繪木頭人偶裝置 Baywalk Bollards，沿著三公里海濱步道排開，由在地藝術家 Jan Mitchell 創作，記錄著這座城市過去與現在的重要人物，走一段路，就像翻閱一頁一頁的地方誌。",
    
    ],
  },


 
  // The Overland Page

  {
    slug: "theOverland1",
    series: "theOverland",
    no: 1,
    size: "", // "feature" = big card | "" = normal
    title: "The Overland: South Australia Runs Out to the Horizon",
    dek: "火車出阿德雷德不久，山丘先退場，Murray River 一過，草原就沒有邊界了——鹽湖、mallee 灌木、金黃的曠野，一路鋪到看不見盡頭的地方。The Overland 穿越風景，也橫跨地平線，把整片南澳曠野收進同一扇窗——直到地平線本身,也成了風景的一部分。",
    date: "28 June 2026",
    image: "image/o/overland-01.jpeg",
    hero: "image/o/overland-01.jpeg",
    heroCaption: "North Terrace in the early light, before the city wakes.",

    inline: [
      "image/o/overland-01a-inline.jpeg",
      "image/o/overland-01b-inline.jpeg",
      "image/o/overland-01c-inline.jpeg",
      "image/o/overland-01d-inline.jpeg",
      "image/o/overland-01e-inline.jpeg",
      "image/o/overland-01f-inline.jpeg",
      "image/o/overland-01g-inline.jpeg",
      "image/o/overland-01h-inline.jpeg",
      "image/o/overland-01i-inline.jpeg",
      "image/o/overland-01j-inline.jpeg",
      "image/o/overland-01k-inline.jpeg",
      "image/o/overland-01l-inline.jpeg",
      "image/o/overland-01m-inline.jpeg",
      "image/o/overland-01n-inline.jpeg",
      "image/o/overland-01o-inline.jpeg",
      "image/o/overland-01p-inline.jpeg",
      "image/o/overland-01q-inline.jpeg",
      "image/o/overland-01r-inline.jpeg",
      "image/o/overland-01u-inline.jpeg",
      "image/o/overland-01v-inline.jpeg",
      "image/o/overland-01w-inline.jpeg",
      "image/o/overland-01x-inline.jpeg",
    ],

    pullquote: "Some journeys don't return home. They arrive somewhere new.",
    body: [
      "Adelaide 出發，7:45AM。 冬天的南澳，這個時間天才剛亮，月台上還帶著夜裡的涼意。29 人分佈在四個車廂，列車長一一詢問座位是否滿意。不一會兒，火車開了——晨光還很低，斜斜地打在 Adelaide Parklands Terminal 的月台上，一趟等了 23 年的旅程，就這樣不聲不響地啟動了。",

      "渡過 Murray River，9:35AM。 山丘退場，曠野正式接手。冬天的南澳曠野是收斂的——麥田褪成枯黃與淺灰的混色，mallee 灌木叢矮矮地伏在地上，天空是那種很淡、很冷的藍。沒有地標，只有節奏：輪軌的間隔，光線從清冷的白慢慢轉暖。眼睛被迫放棄「尋找」，改成「接受」。任憑窗外那片安靜的曠野，大家彷彿都把自己重新調成同一種頻率——這是 The Overland 給乘客的隱性協議：我們買的不是移動的效率，是被大草原重新校準的時間。",

      "Bordertown，11:34AM。 跨過州界，南澳的乾燥色調開始悄悄轉成維多利亞的濕潤綠意——冬天的維多利亞內陸下過雨後特別綠，是全程色彩最飽和的一段。",

      "Nhill、Dimboola、Horsham、Stawell、Ararat，午後一路掠過。 維多利亞小麥帶的心臟地帶，冬天的田野安靜地休耕著，村鎮名字念起來像在數拍子。",

      "過了 Ararat，3:19PM 之後，天色開始鬆手。 冬天的太陽落得早，這時已經是傍晚的前奏——日落把整片草原染成暖橘色，比夏天更快、更濃烈。小羊三三兩兩散在田裡，靠得很近取暖；遠處一群袋鼠被火車驚起，成群跳躍著往回家的方向去。這是曠野一天裡最鬆弛的時刻，連歸途都顯得從容。",

      "Geelong，North Shore Railway Station，5:23PM。 天已經全暗了，冬天的墨爾本近郊只剩月台燈光和窗玻璃上自己的倒影。6:50PM，抵達 Melbourne Southern Cross——23 年前出發的地方，這次，帶著整片南澳，在黑夜裡回來。",

      "23 年前離開墨爾本時，我沒有走過這條路線——南澳的草原，從來不在我的地圖裡。23 年後，我特地繞回來，把當年沒去過的地方補上。不是重返，是第一次抵達。",
    ],
  },

  // Adelaide Page

  {
    slug: "adelaide1",
    series: "adelaide",
    no: 1,
    size: "feature", // "feature" = big card | "" = normal
    title: "Glenelg: The Beginning, Now on Holiday",
    dek: "一人宣讀，讓土地成為殖民地；一人測量，讓土地成為城市。阿德雷德後來的方正秩序，其實是萊特那天默默畫下的線，走得比宣言更遠。",
    date: "June 2026",
    image: "image/a/Glenelg-01.jpeg",
    hero: "image/a/Glenelg-01.jpeg",
    heroCaption: "North Terrace in the early light, before the city wakes.",

    inline: [
      "image/a/Glenelg-01a-inline.jpeg",
      "image/a/Glenelg-01b-inline.jpeg",
      "image/a/Glenelg-01c-inline.jpeg",
      "image/a/Glenelg-01d-inline.jpeg",
      "image/a/Glenelg-01e-inline.jpeg",
      "image/a/Glenelg-01f-inline.jpeg",
      "image/a/Glenelg-01g-inline.jpeg",
      "image/a/Glenelg-01h-inline.jpeg",
      "image/a/Glenelg-01i-inline.jpeg",
      "image/a/Glenelg-01j-inline.jpeg",
      "image/a/Glenelg-01k-inline.jpeg",
      "image/a/Glenelg-01l-inline.jpeg",
      "image/a/Glenelg-01m-inline.jpeg",
      "image/a/Glenelg-01n-inline.jpeg",
      "image/a/Glenelg-01o-inline.jpeg",
      "image/a/Glenelg-01p-inline.jpeg",
      "image/a/Glenelg-01q-inline.jpeg",
      "image/a/Glenelg-01r-inline.jpeg",
      "image/a/Glenelg-01s-inline.jpeg",
      "image/a/Glenelg-01t-inline.jpeg",
      "image/a/Glenelg-01u-inline.jpeg",
      "image/a/Glenelg-01v-inline.jpeg",
      "image/a/Glenelg-01w-inline.jpeg",
      "image/a/Glenelg-01x-inline.jpeg",
      "image/a/Glenelg-01y-inline.jpeg",
      "image/a/Glenelg-01z-inline.jpeg",
      "image/a/Glenelg-01za-inline.jpeg",
      "image/a/Glenelg-01zb-inline.jpeg",
      "image/a/Glenelg-01zc-inline.jpeg",
      "image/a/Glenelg-01zd-inline.jpeg",
    ],

    pullquote: "Founded in 1836, Forever on Holiday Since",
    body: [
      "Adelaide 名字源自於阿德萊德王后（Queen Adelaide），1792 年出生於德國圖林根的邁寧根，是薩克森-邁寧根公國的公主。1818 年她嫁給後來的英國國王威廉四世，並將名字從德文的 Adelheid 改為英文拼法 Adelaide。1830 年威廉加冕為英國國王，Adelaide 隨之成為王后。名字本身也帶著意義——Adelaide 是日耳曼語源，由 adal（高貴）與 haid （種類、良善）組成，可解讀為「高貴的良善」。",
    
    ],
  },
  {
    slug: "adelaide2",
    series: "adelaide",
    no: 2,
    size: "feature",
    title: "The Rhythm of an Ordinary Adelaide",
    dek: "Twenty minutes out of town the road turns gold — vineyards, a farm-gate lunch, and no reason to check the time.",
    date: "June 2026",

    image: "image/a/adelaide-02.jpeg",
    hero: "image/a/adelaide-02.jpeg",
    heroCaption:
      "The Adelaide Hills in the late afternoon, all gold and green.",

    inline: [
      "image/a/adelaide-02a-inline.jpeg",
      "image/a/adelaide-02b-inline.jpeg",
      "image/a/adelaide-02c-inline.jpeg",
      "image/a/adelaide-02d-inline.jpeg",
      "image/a/adelaide-02e-inline.jpeg",
      "image/a/adelaide-02f-inline.jpeg",
      "image/a/adelaide-02g-inline.jpeg",
      "image/a/adelaide-02h-inline.jpeg",
      "image/a/adelaide-02i-inline.jpeg",
      "image/a/adelaide-02j-inline.jpeg",
      "image/a/adelaide-02k-inline.jpeg",
      "image/a/adelaide-02l-inline.jpeg",
      "image/a/adelaide-02m-inline.jpeg",
      "image/a/adelaide-02n-inline.jpeg",
      "image/a/adelaide-02o-inline.jpeg",
      "image/a/adelaide-02p-inline.jpeg",
      "image/a/adelaide-02q-inline.jpeg",
      "image/a/adelaide-02r-inline.jpeg",
      "image/a/adelaide-02s-inline.jpeg",
      "image/a/adelaide-02t-inline.jpeg",
      "image/a/adelaide-02u-inline.jpeg",
      "image/a/adelaide-02v-inline.jpeg",
      "image/a/adelaide-02w-inline.jpeg",
      "image/a/adelaide-02x-inline.jpeg",
      "image/a/adelaide-02y-inline.jpeg",
      "image/a/adelaide-02z-inline.jpeg",
      "image/a/adelaide-02za-inline.jpeg",
      "image/a/adelaide-02zb-inline.jpeg",
    ],

    pullquote: "A city in a park — that was Light's promise, still kept.",
    body: [
      "阿德雷德的日常，沒有戲劇性，只有節拍。萊特當年畫下的那圈帶狀公園——Light's Vision——把喧囂留在外圍，把安靜留給裡面每一天。那是他對這座城市最初的願望：一座被綠意環抱、永遠不失去呼吸空間的城市。方格網小到走路就能穿越，卻大到足以裝下一種不慌不忙的生活速度。",
      "日常的核心不是景點，是重複：轉角固定的咖啡，巷子裡固定會遇到的臉孔，教堂尖頂與玻璃帷幕安靜並存，誰也不搶誰的風頭。節慶像伏流，平時安靜，偶爾滲出——一場光影，一次市集，把平凡的日子輕輕打亂，隨後又恢復原狀。",
    ],
  },
  {
    slug: "adelaide3",
    series: "adelaide",
    no: 3,
    size: "feature",
    title: "Hahndorf: A Village That Carried Its Faith Across the Sea",
    dek: "Hahndorf 是澳洲現存最古老的德國聚落，村子的骨架仍照著故鄉普魯士的傳統規劃",
    date: "26 June 2026",
    image: "image/a/adelaide-03.jpeg",
    hero: "image/a/adelaide-03.jpeg",
    heroCaption: "Stalls opening up as the first shoppers arrive.",
    inline: [
      "image/a/adelaide-03a-inline.jpeg",
      "image/a/adelaide-03b-inline.jpeg",
      "image/a/adelaide-03c-inline.jpeg",
      "image/a/adelaide-03d-inline.jpeg",
      "image/a/adelaide-03e-inline.jpeg",
      "image/a/adelaide-03f-inline.jpeg",
      "image/a/adelaide-03g-inline.jpeg",
      "image/a/adelaide-03h-inline.jpeg",
      "image/a/adelaide-03i-inline.jpeg",
      "image/a/adelaide-03j-inline.jpeg",
      "image/a/adelaide-03k-inline.jpeg",
      "image/a/adelaide-03l-inline.jpeg",
      "image/a/adelaide-03m-inline.jpeg",
      "image/a/adelaide-03n-inline.jpeg",
      "image/a/adelaide-03o-inline.jpeg",
      "image/a/adelaide-03p-inline.jpeg",
      "image/a/adelaide-03r-inline.jpeg",
      "image/a/adelaide-03s-inline.jpeg",
    ],

    pullquote: "They crossed an ocean not for gold, but for a place to pray.",
    body: [
      "1838 年 12 月 28 日，一艘名叫 Zebra 的船，載著 38 個路德教家庭在荷德灣靠岸——他們不是來尋找黃金，是逃離普魯士的宗教迫害，來這裡尋找一個能安靜禱告的地方。船長 Dirk Hahn 一路照顧這群移民，抵達後又協助他們在阿德雷德山區找到落腳的土地，感念之下，村莊便以他的名字命名。",
      "Hahndorf 是澳洲現存最古老的德國聚落，村子的骨架仍照著故鄉普魯士的傳統規劃——寬闊的村莊綠地、半木結構的 Fachwerk 建築，一磚一瓦都帶著遷徙者的鄉愁。如今 Main Street 兩側是老樹與工匠鋪子，果醬、乳酪、皮件、手工刀具，延續著當年移民「靠雙手安身立命」的性格。",
    ],
  },

];
