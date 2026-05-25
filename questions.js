// questions.js

// ==========================================
// 1. 大富翁選擇題題庫 (共 100 題)
// ==========================================
const monopolyQuestionBank = [
    // 1
      {
        question: "以下哪種能源是「再生能源」？",
        questionEn: "Which of the following is a renewable energy source?",
        options: ["煤炭", "天然氣", "太陽能", "石油"],
        optionsEn: ["Coal", "Natural gas", "Solar energy", "Oil"],
        correctIndex: 2
      },
      // 2
      {
        question: "「3R」原則中的三個 R，正確組合為何？",
        questionEn: "In the 3R principle, which combination is correct?",
        options: ["Reduce、Reuse、Recycle", "Reduce、Replace、Recycle", "Reuse、Repair、Recycle", "Reduce、Reuse、Replace"],
        optionsEn: [
          "Reduce, Reuse, Recycle",
          "Reduce, Replace, Recycle",
          "Reuse, Repair, Recycle",
          "Reduce, Reuse, Replace"
        ],
        correctIndex: 0
      },
      // 3
      {
        question: "「碳足跡」主要是指什麼？",
        questionEn: "What does “carbon footprint” mainly refer to?",
        options: ["森林吸收的二氧化碳量", "個人或活動產生的溫室氣體總量", "工廠產能的多寡", "城市人口密度"],
        optionsEn: [
          "The amount of CO₂ absorbed by forests",
          "The total greenhouse gases produced by a person or activity",
          "The production capacity of a factory",
          "The population density of a city"
        ],
        correctIndex: 1
      },
      // 4
      {
        question: "下列哪一個行為最能減少日常生活中的碳排放？",
        questionEn: "Which behavior best reduces daily carbon emissions?",
        options: ["每天搭電梯一層樓", "短程改用步行或騎腳踏車", "夏天把冷氣開到18度", "使用一次性塑膠袋"],
        optionsEn: [
          "Taking the elevator for just one floor every day",
          "Walking or cycling for short trips",
          "Setting the AC to 18°C in summer",
          "Using disposable plastic bags"
        ],
        correctIndex: 1
      },
      // 5
      {
        question: "下列哪一項不是再生能源？",
        questionEn: "Which of the following is NOT a renewable energy source?",
        options: ["太陽能", "風力發電", "地熱能", "石油"],
        optionsEn: ["Solar energy", "Wind power", "Geothermal energy", "Oil"],
        correctIndex: 3
      },
      // 6
      {
        question: "「SDGs」永續發展目標共有幾項？",
        questionEn: "How many goals are in the UN SDGs (Sustainable Development Goals)?",
        options: ["7 項", "12 項", "17 項", "21 項"],
        optionsEn: ["7 goals", "12 goals", "17 goals", "21 goals"],
        correctIndex: 2
      },
      // 7
      {
        question: "日常生活中，下列哪一項屬於「源頭減量」？",
        questionEn: "Which of the following is an example of source reduction in daily life?",
        options: ["購物自備環保袋", "全部垃圾一起丟", "餐餐使用免洗筷", "每天買瓶裝水"],
        optionsEn: [
          "Bringing your own reusable shopping bag",
          "Throwing all trash together",
          "Using disposable chopsticks for every meal",
          "Buying bottled water every day"
        ],
        correctIndex: 0
      },
      // 8
      {
        question: "垃圾分類時，下列哪一項通常屬於「資源回收」？",
        questionEn: "When sorting waste, which item usually goes to recycling?",
        options: ["廚餘", "沾滿油的紙巾", "乾淨的寶特瓶", "用過的衛生紙"],
        optionsEn: [
          "Food scraps",
          "Oily paper towels",
          "Clean plastic bottles",
          "Used tissue paper"
        ],
        correctIndex: 2
      },
      // 9
      {
        question: "下列哪種建築設計最符合「節能減碳」的精神？",
        questionEn: "Which building design best reflects energy saving and carbon reduction?",
        options: ["大面積玻璃但長期開冷氣", "善用自然採光與通風", "全天候開燈且拉上窗簾", "完全依賴電暖器取暖"],
        optionsEn: [
          "Large glass walls but AC always on",
          "Making good use of natural light and ventilation",
          "Keeping curtains closed and lights on all day",
          "Relying only on electric heaters for warmth"
        ],
        correctIndex: 1
      },
      // 10
      {
        question: "關於空氣污染，下列哪一項敘述較正確？",
        questionEn: "Which statement about air pollution is more accurate?",
        options: ["只會發生在工業區", "與交通工具使用無關", "會影響人體呼吸與健康", "只影響戶外不影響室內"],
        optionsEn: [
          "It only happens in industrial zones",
          "It has nothing to do with transportation",
          "It affects human breathing and health",
          "It only affects outdoors, not indoors"
        ],
        correctIndex: 2
      },
      // 11
      {
        question: "下列哪種購物方式較符合環保精神？",
        questionEn: "Which shopping habit is more environmentally friendly?",
        options: ["大量購買一次性商品", "選擇耐用且可維修的產品", "只看價格最便宜的產品", "完全不看產品標示"],
        optionsEn: [
          "Buying lots of single-use products",
          "Choosing durable and repairable products",
          "Only looking at the cheapest price",
          "Ignoring all product labels"
        ],
        correctIndex: 1
      },
      // 12
      {
        question: "下列哪一種行為最符合「Reuse 重複使用」？",
        questionEn: "Which behavior best matches “Reuse (reusing)”?",
        options: ["玻璃瓶重複裝飲料使用", "直接把玻璃瓶丟棄", "把玻璃瓶打碎當垃圾處理", "多買幾個新玻璃杯"],
        optionsEn: [
          "Refilling a glass bottle and using it again",
          "Throwing the glass bottle away",
          "Smashing the glass bottle as trash",
          "Buying several new glass cups"
        ],
        correctIndex: 0
      },
      // 13
      {
        question: "「永續發展」強調什麼？",
        questionEn: "What does “sustainable development” emphasize?",
        options: ["只重視經濟成長", "只重視環境保護", "兼顧環境、社會與經濟", "只重視科技創新"],
        optionsEn: [
          "Focusing only on economic growth",
          "Focusing only on environmental protection",
          "Balancing environment, society, and economy",
          "Focusing only on technological innovation"
        ],
        correctIndex: 2
      },
      // 14
      {
        question: "下列哪一項是使用「節能標章」產品的好處？",
        questionEn: "What is an advantage of using products with an energy-saving label?",
        options: ["一定比較便宜", "完全沒有碳排放", "在相同功能下耗能較少", "需要特別維修"],
        optionsEn: [
          "They are always cheaper",
          "They produce zero emissions",
          "They use less energy for the same function",
          "They require special maintenance"
        ],
        correctIndex: 2
      },
      // 15
      {
        question: "關於塑膠垃圾，下列哪一項敘述較正確？",
        questionEn: "Which statement about plastic waste is more accurate?",
        options: ["很快在自然環境中分解", "可能分解成微塑膠進入食物鏈", "對環境完全無害", "只會污染土壤不會進入海洋"],
        optionsEn: [
          "It decomposes quickly in nature",
          "It may break down into microplastics and enter the food chain",
          "It is completely harmless to the environment",
          "It only pollutes soil and never enters the ocean"
        ],
        correctIndex: 1
      },
      // 16
      {
        question: "下列哪種購物行為最能減少包裝浪費？",
        questionEn: "Which shopping behavior best reduces packaging waste?",
        options: ["選擇大包裝家庭號產品", "選擇多層豪華包裝產品", "每樣東西都要有獨立塑膠袋", "堅持只買一次用完的小包裝"],
        optionsEn: [
          "Choosing large family-size packages",
          "Choosing multi-layer luxury packaging",
          "Demanding a separate plastic bag for everything",
          "Insisting on only buying single-use mini packs"
        ],
        correctIndex: 0
      },
      // 17
      {
        question: "在學校推動「無紙化」的主要目的為何？",
        questionEn: "What is the main purpose of promoting “paperless” measures at school?",
        options: ["讓學生多用手機", "節省老師批改時間", "降低紙張使用與樹木砍伐", "讓作業更難繳交"],
        optionsEn: [
          "To make students use their phones more",
          "To save teachers’ grading time",
          "To reduce paper use and tree cutting",
          "To make homework harder to submit"
        ],
        correctIndex: 2
      },
      // 18
      {
        question: "下列哪一種交通選擇，整體碳排放通常最低？",
        questionEn: "Which mode of transport usually has the lowest overall carbon emissions?",
        options: ["一人開一台汽車上學", "多人共乘大眾運輸工具", "每天叫計程車", "短程也搭飛機"],
        optionsEn: [
          "Each person driving their own car to school",
          "Many people sharing public transport",
          "Taking a taxi every day",
          "Taking a plane even for short trips"
        ],
        correctIndex: 1
      },
      // 19
      {
        question: "下列哪一個是「碳匯」(Carbon Sink) 的例子？",
        questionEn: "Which of the following is an example of a carbon sink?",
        options: ["燃煤電廠", "大型停車場", "森林與海洋", "垃圾掩埋場"],
        optionsEn: [
          "Coal-fired power plant",
          "Large parking lot",
          "Forests and oceans",
          "Landfill"
        ],
        correctIndex: 2
      },
      // 20
      {
        question: "關於「溫室氣體」的敘述，下列何者正確？",
        questionEn: "Which statement about greenhouse gases is correct?",
        options: ["完全是有害物質，應該歸零", "幫助地球維持溫度，但過多會導致暖化", "只存在工廠煙囪中", "與人類活動無關"],
        optionsEn: [
          "They are completely harmful and should be reduced to zero",
          "They help keep Earth warm, but too much causes global warming",
          "They only exist in factory chimneys",
          "They have nothing to do with human activity"
        ],
        correctIndex: 1
      },
      // 21
      {
        question: "下列哪一項是「水資源保育」的好習慣？",
        questionEn: "Which of the following is a good habit for conserving water?",
        options: ["刷牙時一直開著水龍頭", "縮短洗澡時間並關小水量", "洗車時大量沖水", "用水時完全不檢查漏水"],
        optionsEn: [
          "Leaving the tap running while brushing teeth",
          "Taking shorter showers and turning down the water flow",
          "Using large amounts of water to wash the car",
          "Never checking for leaks when using water"
        ],
        correctIndex: 1
      },
      // 22
      {
        question: "關於「一次性餐具」，哪一項敘述較恰當？",
        questionEn: "Which statement about disposable tableware is more appropriate?",
        options: ["使用方便，而且完全環保", "可大量重複使用而不會壞", "會增加垃圾量與資源消耗", "對資源消耗沒有影響"],
        optionsEn: [
          "It is convenient and completely eco‑friendly",
          "It can be reused many times without damage",
          "It increases waste and resource consumption",
          "It has no impact on resource use"
        ],
        correctIndex: 2
      },
      // 23
      {
        question: "下列哪一個是「環保飲食」的做法？",
        questionEn: "Which is an example of an eco‑friendly diet?",
        options: ["三餐都叫外送、使用大量一次性包裝", "多選擇當季、在地食材", "每天吃大量加工食品", "只看價格不看食材來源"],
        optionsEn: [
          "Ordering delivery every meal with lots of disposable packaging",
          "Choosing seasonal, locally produced ingredients",
          "Eating lots of processed foods every day",
          "Only looking at price, ignoring where food comes from"
        ],
        correctIndex: 1
      },
      // 24
      {
        question: "下列哪一種照明方式最節能？",
        questionEn: "Which type of lighting is the most energy‑efficient?",
        options: ["白熾燈泡", "鹵素燈泡", "日光燈管", "LED 燈具"],
        optionsEn: ["Incandescent bulb", "Halogen bulb", "Fluorescent tube", "LED lamp"],
        correctIndex: 3
      },
      // 25
      {
        question: "關於森林，下列哪一項是森林對環境的重要功能？",
        questionEn: "Which is an important environmental function of forests?",
        options: ["只提供木材與紙漿", "吸收二氧化碳並提供棲地", "增加城市溫度", "製造大量垃圾"],
        optionsEn: [
          "Only providing timber and pulp",
          "Absorbing CO₂ and providing habitats",
          "Increasing urban temperatures",
          "Producing large amounts of trash"
        ],
        correctIndex: 1
      },
      // 26
      {
        question: "若想減少垃圾量，下列哪一項做法較好？",
        questionEn: "To reduce the amount of waste, which practice is better?",
        options: ["多買免洗餐具備用", "購物自備容器與環保杯", "所有東西都用宅配寄送", "用完就丟不再分類"],
        optionsEn: [
          "Buying more disposable tableware as backup",
          "Bringing your own containers and reusable cup when shopping",
          "Using home delivery for everything",
          "Throwing everything away without sorting"
        ],
        correctIndex: 1
      },
      // 27
      {
        question: "「環境教育」的主要目的是什麼？",
        questionEn: "What is the main purpose of environmental education?",
        options: ["背誦環保法律條文", "幫助理解環境議題並改變行為", "增加考試題目數量", "只在地球日宣傳一次"],
        optionsEn: [
          "To memorize environmental laws",
          "To help people understand environmental issues and change behavior",
          "To increase the number of exam questions",
          "To promote only on Earth Day"
        ],
        correctIndex: 1
      },
      // 28
      {
        question: "在家中使用冷氣時，哪一項作法較為節能？",
        questionEn: "Which way of using air conditioning at home is more energy‑saving?",
        options: ["門窗全開讓空氣流通", "設定適當溫度並搭配電扇", "持續開到最低溫", "頻繁開關冷氣"],
        optionsEn: [
          "Keeping doors and windows fully open while AC is on",
          "Setting a reasonable temperature and using fans together",
          "Keeping AC at the lowest temperature constantly",
          "Turning the AC on and off frequently"
        ],
        correctIndex: 1
      },
      // 29
      {
        question: "下列哪項屬於「環境友善產品」的特色？",
        questionEn: "Which feature best describes an eco‑friendly product?",
        options: ["壽命短但便宜", "高耗能但外觀漂亮", "耐用、可維修、對環境負擔較小", "包裝誇張突出即可"],
        optionsEn: [
          "Short lifespan but cheap",
          "High energy use but good‑looking",
          "Durable, repairable, and with lower environmental impact",
          "Overly fancy packaging is enough"
        ],
        correctIndex: 2
      },
      // 30
      {
        question: "關於海洋塑膠垃圾，下列何者正確？",
        questionEn: "Which statement about marine plastic waste is correct?",
        options: ["不會影響海洋生物", "可能被海洋生物誤食導致傷害", "進入海中後很快消失", "只會停留在岸邊不會飄散"],
        optionsEn: [
          "It does not affect marine life",
          "It may be mistaken as food and harm marine life",
          "It disappears quickly once in the sea",
          "It only stays on the shore and never drifts away"
        ],
        correctIndex: 1
      },
      // 31
      {
        question: "下列哪一項行為最符合「節水」概念？",
        questionEn: "Which behavior best fits the idea of saving water?",
        options: ["洗車用水管大水沖", "洗手時關掉水龍頭搓肥皂", "每天泡很久的澡", "讓水龍頭持續小流出水"],
        optionsEn: [
          "Using a hose to spray lots of water when washing the car",
          "Turning off the tap while rubbing hands with soap",
          "Taking long baths every day",
          "Letting the tap run at a small flow continuously"
        ],
        correctIndex: 1
      },
      // 32
      {
        question: "「環境足跡」的概念主要在說明什麼？",
        questionEn: "What does the concept of “environmental footprint” mainly describe?",
        options: ["一個人走路的步數", "人類活動對自然資源的總體需求", "城市道路長度", "森林面積大小"],
        optionsEn: [
          "A person’s number of steps",
          "The total demand human activities place on natural resources",
          "The total length of city roads",
          "The area of forest"
        ],
        correctIndex: 1
      },
      // 33
      {
        question: "下列哪一種能源的碳排放量相對較低？",
        questionEn: "Which energy source generally has lower carbon emissions?",
        options: ["燃煤", "天然氣", "風力發電", "柴油"],
        optionsEn: ["Coal", "Natural gas", "Wind power", "Diesel"],
        correctIndex: 2
      },
      // 34
      {
        question: "關於「空汙紅害」警示，下列何者較適當？",
        questionEn: "Which statement about the “red alert” for air pollution is more appropriate?",
        options: ["代表空氣品質很好", "表示空氣品質不良，應減少戶外劇烈活動", "只在冬天出現", "與人體健康無關"],
        optionsEn: [
          "It means the air quality is very good",
          "It means poor air quality, and outdoor intense activity should be reduced",
          "It only appears in winter",
          "It has nothing to do with human health"
        ],
        correctIndex: 1
      },
      // 35
      {
        question: "下列哪一項不是有效的節能行為？",
        questionEn: "Which of the following is NOT an effective energy‑saving behavior?",
        options: ["長時間待機不關電器", "離開房間就關燈", "不用電器時拔除插頭", "選購高能效產品"],
        optionsEn: [
          "Leaving appliances on standby for a long time",
          "Turning off lights when leaving a room",
          "Unplugging appliances when not in use",
          "Choosing high‑efficiency products"
        ],
        correctIndex: 0
      },
      // 36
      {
        question: "在學校推行「自備餐具」的好處為何？",
        questionEn: "What is a benefit of promoting “bring your own tableware” at school?",
        options: ["增加書包重量", "減少一次性餐具垃圾", "無法保持衛生", "讓午餐時間變長"],
        optionsEn: [
          "It makes school bags heavier",
          "It reduces single‑use tableware waste",
          "It cannot maintain hygiene",
          "It makes lunchtime longer"
        ],
        correctIndex: 1
      },
      // 37
      {
        question: "「循環經濟」與傳統「線性經濟」最大的差異是什麼？",
        questionEn: "What is the biggest difference between a circular economy and a linear economy?",
        options: ["不需要資源", "將資源視為可重複利用的循環，而非用完即丟", "完全不考慮成本", "只追求產量最大化"],
        optionsEn: [
          "It needs no resources",
          "It treats resources as part of a reuse cycle instead of “take‑make‑dispose”",
          "It ignores all costs",
          "It only pursues maximum output"
        ],
        correctIndex: 1
      },
      // 38
      {
        question: "下列哪一項屬於「環境友善交通」？",
        questionEn: "Which of the following is an example of environmentally friendly transportation?",
        options: ["城市短程大量使用汽車", "鼓勵步行與騎腳踏車", "增加私人停車位", "所有道路拓寬給汽車使用"],
        optionsEn: [
          "Using cars extensively for short urban trips",
          "Encouraging walking and cycling",
          "Increasing private parking spaces",
          "Widening all roads mainly for cars"
        ],
        correctIndex: 1
      },
      // 39
      {
        question: "購買電器時，哪一項資訊最有助於評估其節能表現？",
        questionEn: "When buying appliances, which information best helps evaluate energy performance?",
        options: ["產品顏色", "品牌名稱", "能源效率等級標示", "產地"],
        optionsEn: [
          "Product color",
          "Brand name",
          "Energy efficiency rating label",
          "Country of origin"
        ],
        correctIndex: 2
      },
      // 40
      {
        question: "為了保護生物多樣性，下列哪一種作法最適合？",
        questionEn: "Which action is most suitable for protecting biodiversity?",
        options: ["過度開發自然棲地", "建立保護區並管制開發", "大量引進外來物種", "只保護外表可愛的動物"],
        optionsEn: [
          "Over‑developing natural habitats",
          "Creating protected areas and regulating development",
          "Introducing many alien species",
          "Only protecting animals that look cute"
        ],
        correctIndex: 1
      },
      // 41
      {
        question: "下列哪一種垃圾處理方式對環境最友善？",
        questionEn: "Which waste treatment method is most environmentally friendly?",
        options: ["全部掩埋", "全部焚化", "減量、再利用與資源回收並行", "任意棄置在戶外"],
        optionsEn: [
          "Burying everything in landfills",
          "Incinerating everything",
          "Reducing, reusing, and recycling together",
          "Dumping waste outdoors at will"
        ],
        correctIndex: 2
      },
      // 42
      {
        question: "「熱島效應」主要是指什麼？",
        questionEn: "What does the “urban heat island effect” mainly refer to?",
        options: ["高山地區溫度較低", "都市地區比郊區更炎熱的現象", "海邊氣溫上升", "只有在夏天出現的颱風"],
        optionsEn: [
          "Lower temperatures in mountainous areas",
          "Cities being hotter than surrounding rural areas",
          "Rising temperatures near the sea",
          "Typhoons that occur only in summer"
        ],
        correctIndex: 1
      },
      // 43
      {
        question: "下列哪一項是節能空調的好習慣？",
        questionEn: "Which is a good habit for energy‑saving air conditioning?",
        options: ["經常開關冷氣", "設定適當溫度並定期清洗濾網", "把窗戶打開吹冷氣", "冷氣與電暖器同時開啟"],
        optionsEn: [
          "Turning the AC on and off constantly",
          "Setting a proper temperature and cleaning filters regularly",
          "Opening windows while AC is on",
          "Running AC and electric heater at the same time"
        ],
        correctIndex: 1
      },
      // 44
      {
        question: "若要支持減碳，下列哪一項消費行為較佳？",
        questionEn: "Which consumer behavior better supports carbon reduction?",
        options: ["每天網購少量商品單獨寄送", "選擇在地與當季食材", "刻意購買進口空運產品", "偏好過度包裝商品"],
        optionsEn: [
          "Ordering small items online every day with separate shipping",
          "Choosing local and seasonal ingredients",
          "Deliberately buying imported air‑freighted products",
          "Preferring heavily over‑packaged goods"
        ],
        correctIndex: 1
      },
      // 45
      {
        question: "「環境荷爾蒙」主要指什麼？",
        questionEn: "What do “endocrine disrupting chemicals” (environmental hormones) mainly refer to?",
        options: ["人體自然分泌的荷爾蒙", "會干擾生物內分泌系統的化學物質", "增加肌肉的營養品", "純天然物質"],
        optionsEn: [
          "Hormones naturally produced by the human body",
          "Chemicals that interfere with the endocrine system of organisms",
          "Nutritional supplements that increase muscle",
          "Purely natural substances"
        ],
        correctIndex: 1
      },
      // 46
      {
        question: "下列哪一項是「綠色消費」的例子？",
        questionEn: "Which of the following is an example of green consumption?",
        options: ["購買標示不清的產品", "選擇具有環保標章的商品", "只看促銷價錢就購買", "刻意追求一次性用品"],
        optionsEn: [
          "Buying products with unclear labeling",
          "Choosing products with eco‑labels",
          "Buying only based on promotional prices",
          "Deliberately seeking single‑use items"
        ],
        correctIndex: 1
      },
      // 47
      {
        question: "面對氣候變遷，下列哪一種說法較合理？",
        questionEn: "Which statement about climate change is more reasonable?",
        options: ["完全與人類活動無關", "只會影響極地不影響台灣", "需要透過減碳與調適雙管齊下", "只要多開冷氣就能解決"],
        optionsEn: [
          "It has nothing to do with human activity",
          "It only affects the poles and not Taiwan",
          "We need both mitigation (reducing emissions) and adaptation",
          "Just using more air‑conditioning can solve it"
        ],
        correctIndex: 2
      },
      // 48
      {
        question: "「環保署」(或環境部) 的主要工作為何？",
        questionEn: "What is the main job of the Environmental Protection Agency (or Environment Ministry)?",
        options: ["負責所有教育政策", "負責所有交通建設", "制定與執行環境保護相關政策", "管理金融市場"],
        optionsEn: [
          "Handling all education policies",
          "Handling all transportation construction",
          "Formulating and enforcing environmental protection policies",
          "Managing financial markets"
        ],
        correctIndex: 2
      },
      // 49
      {
        question: "下列哪一種包裝材質一般較容易回收？",
        questionEn: "Which type of packaging material is generally easier to recycle?",
        options: ["混合多種材質且難分離", "乾淨的紙類與紙盒", "髒污且油膩的紙容器", "沾滿食物殘渣的塑膠袋"],
        optionsEn: [
          "Mixed materials that are hard to separate",
          "Clean paper and cardboard",
          "Dirty and greasy paper containers",
          "Plastic bags covered with food scraps"
        ],
        correctIndex: 1
      },
      // 50
      {
        question: "在辦理活動時，下列哪一項作法較符合「環保活動」？",
        questionEn: "When organizing an event, which practice is more eco‑friendly?",
        options: ["大量印製一次性海報", "提供一次性瓶裝水", "採用電子海報與自備水壺", "全部用免洗餐具"],
        optionsEn: [
          "Printing many disposable posters",
          "Providing disposable bottled water",
          "Using electronic posters and encouraging reusable bottles",
          "Using only disposable tableware"
        ],
        correctIndex: 2
      },
      // 51
      {
        question: "「環境正義」主要關心什麼議題？",
        questionEn: "What does “environmental justice” mainly focus on?",
        options: ["只關心富人權益", "污染負擔是否不成比例地落在弱勢族群", "只看經濟成長數字", "只關注野生動物"],
        optionsEn: [
          "Only the rights of the rich",
          "Whether pollution burdens fall disproportionately on vulnerable groups",
          "Only economic growth figures",
          "Only wild animals"
        ],
        correctIndex: 1
      },
      // 52
      {
        question: "下列哪一項不是節電的好方法？",
        questionEn: "Which of the following is NOT a good way to save electricity?",
        options: ["使用節能家電", "不使用電器時拔插頭", "離開房間就關燈", "所有燈具整晚開著不關"],
        optionsEn: [
          "Using energy‑saving appliances",
          "Unplugging appliances when not in use",
          "Turning off lights when leaving a room",
          "Leaving all lights on all night"
        ],
        correctIndex: 3
      },
      // 53
      {
        question: "低碳飲食的概念，下列何者較符合？",
        questionEn: "Which choice best fits the idea of a low‑carbon diet?",
        options: ["大量食用高加工、高里程食物", "多選擇在地、當季、少加工食物", "每天外送速食", "只考慮價錢不管來源"],
        optionsEn: [
          "Eating a lot of highly processed, long‑distance foods",
          "Choosing more local, seasonal, minimally processed foods",
          "Ordering fast food delivery every day",
          "Only caring about price, not origin"
        ],
        correctIndex: 1
      },
      // 54
      {
        question: "下列哪一項是「室內空氣品質」常見的污染來源？",
        questionEn: "Which is a common source of indoor air pollution?",
        options: ["植物光合作用", "抽菸與燃燒香燭", "開窗通風", "擺放綠色植物"],
        optionsEn: [
          "Plant photosynthesis",
          "Smoking and burning incense",
          "Opening windows for ventilation",
          "Placing green plants indoors"
        ],
        correctIndex: 1
      },
      // 55
      {
        question: "關於節能標章，下列何者較正確？",
        questionEn: "Which statement about energy‑saving labels is more correct?",
        options: ["只代表品質差", "代表能源效率較佳", "與用電量無關", "只在進口產品上出現"],
        optionsEn: [
          "They only mean poor quality",
          "They indicate better energy efficiency",
          "They have nothing to do with power use",
          "They only appear on imported products"
        ],
        correctIndex: 1
      },
      // 56
      {
        question: "下列哪一個是「環境監測」的主要目的？",
        questionEn: "What is the main purpose of environmental monitoring?",
        options: ["裝飾城市", "收集資料掌握污染與變化趨勢", "宣傳觀光景點", "控制市場價格"],
        optionsEn: [
          "Decorating the city",
          "Collecting data to track pollution and trends",
          "Promoting tourist spots",
          "Controlling market prices"
        ],
        correctIndex: 1
      },
      // 57
      {
        question: "「用電離峰」最適合的行為是哪一個？",
        questionEn: "Which behavior best matches the idea of using electricity in off‑peak hours?",
        options: ["在尖峰時段大量使用高耗能設備", "把非必要用電移到離峰時段", "全天候維持最高用電量", "完全不理會用電時段"],
        optionsEn: [
          "Using many high‑power devices during peak hours",
          "Moving non‑essential electricity use to off‑peak times",
          "Keeping electricity use at the maximum all day",
          "Ignoring peak and off‑peak times completely"
        ],
        correctIndex: 1
      },
      // 58
      {
        question: "下列哪一個屬於「棕地再生」概念？",
        questionEn: "Which of the following fits the concept of brownfield regeneration?",
        options: ["開發新的農地做工業區", "將閒置污染工業地整治後再利用", "砍伐森林建新都市", "把舊工廠放著不管"],
        optionsEn: [
          "Developing new farmland into industrial zones",
          "Cleaning up contaminated idle industrial land for reuse",
          "Cutting forests to build new cities",
          "Leaving old factories abandoned"
        ],
        correctIndex: 1
      },
      // 59
      {
        question: "「在地採購」對環境的好處為何？",
        questionEn: "What is an environmental benefit of local purchasing?",
        options: ["增加運輸距離", "降低運輸過程的能源消耗與排放", "讓產品一定比較高價", "與環保無關"],
        optionsEn: [
          "Increasing transportation distance",
          "Reducing energy use and emissions in transport",
          "Always making products more expensive",
          "Having nothing to do with the environment"
        ],
        correctIndex: 1
      },
      // 60
      {
        question: "下列哪一項不利於保護水資源？",
        questionEn: "Which of the following is NOT helpful for protecting water resources?",
        options: ["避免將油污倒入水槽", "正確處理化學藥劑與廢油", "任意將垃圾丟入河川", "節約用水"],
        optionsEn: [
          "Avoiding pouring oil and grease into the sink",
          "Properly handling chemicals and waste oil",
          "Throwing garbage into rivers at will",
          "Saving water"
        ],
        correctIndex: 2
      },
      // 61
      {
        question: "「PM2.5」主要是指什麼？",
        questionEn: "What does “PM2.5” mainly refer to?",
        options: ["粒徑小於 2.5 公釐的石頭", "粒徑小於 2.5 微米的細懸浮微粒", "2.5 公里外的空氣", "空氣中 2.5% 的氧氣"],
        optionsEn: [
          "Stones smaller than 2.5 millimeters",
          "Fine particulate matter smaller than 2.5 micrometers",
          "Air 2.5 km away",
          "2.5% of oxygen in the air"
        ],
        correctIndex: 1
      },
      // 62
      {
        question: "關於「環保標章」產品，下列敘述何者正確？",
        questionEn: "Which statement about eco‑labelled products is correct?",
        options: ["一定最便宜", "經審查對環境衝擊較小", "代表品質較差", "不需要任何標準就可貼"],
        optionsEn: [
          "They are always the cheapest",
          "They have been reviewed and have lower environmental impact",
          "They mean lower product quality",
          "They can be used without any standards"
        ],
        correctIndex: 1
      },
      // 63
      {
        question: "若要減少一次性塑膠吸管的使用，下列何者較佳？",
        questionEn: "To reduce the use of single‑use plastic straws, which is better?",
        options: ["改用自備環保吸管或直接不使用", "多拿幾支備用", "用完隨意丟棄", "改用更多塑膠杯"],
        optionsEn: [
          "Use your own reusable straw or stop using straws",
          "Take several extra straws just in case",
          "Throw them away casually after use",
          "Use more plastic cups instead"
        ],
        correctIndex: 0
      },
      // 64
      {
        question: "「零廢棄」(Zero Waste) 的核心精神是什麼？",
        questionEn: "What is the core spirit of “zero waste”?",
        options: ["完全禁止生產", "盡可能不產生垃圾、將資源循環再利用", "所有垃圾都焚化", "只要掩埋就好"],
        optionsEn: [
          "Completely banning production",
          "Producing as little waste as possible and cycling resources",
          "Incinerating all waste",
          "Just burying waste in landfills"
        ],
        correctIndex: 1
      },
      // 65
      {
        question: "學校推動「綠色校園」時，下列哪一項措施最符合目標？",
        questionEn: "Which measure best matches the goal of a “green campus”?",
        options: ["大量使用一次性教材", "擴大校園綠地與生態池", "全天候開冷氣與電燈", "鼓勵學生多開車上學"],
        optionsEn: [
          "Using a lot of disposable teaching materials",
          "Expanding green areas and ecological ponds on campus",
          "Keeping AC and lights on all day",
          "Encouraging students to drive to school more"
        ],
        correctIndex: 1
      },
      // 66
      {
        question: "「環境承載力」的概念是什麼？",
        questionEn: "What does the concept of “environmental carrying capacity” mean?",
        options: ["環境可以無限度承受開發", "環境在不被破壞情況下所能承受的最大負荷", "國家的經濟實力", "人口的最高上限"],
        optionsEn: [
          "The environment can withstand unlimited development",
          "The maximum load the environment can bear without being damaged",
          "A country’s economic strength",
          "The maximum population"
        ],
        correctIndex: 1
      },
      // 67
      {
        question: "下列哪一種購物行為較不符合永續概念？",
        questionEn: "Which shopping behavior is least consistent with sustainability?",
        options: ["衝動購物、過量購買", "按需求購買、避免浪費", "選擇耐用的產品", "重視產品維修服務"],
        optionsEn: [
          "Impulse buying and over‑purchasing",
          "Buying according to need to avoid waste",
          "Choosing durable products",
          "Valuing product repair services"
        ],
        correctIndex: 0
      },
      // 68
      {
        question: "「生態足跡」用來衡量什麼？",
        questionEn: "What does “ecological footprint” measure?",
        options: ["城市面積大小", "需要多少土地與資源來支撐一個人的生活型態", "森林覆蓋率", "海岸線長度"],
        optionsEn: [
          "The area of a city",
          "How much land and resources are needed to support a person’s lifestyle",
          "Forest coverage rate",
          "Length of coastline"
        ],
        correctIndex: 1
      },
      // 69
      {
        question: "下列哪一種做法較能保護生態河川？",
        questionEn: "Which practice better protects ecological rivers?",
        options: ["將河川全部水泥化", "沿岸種植樹木並維持自然河岸", "任意傾倒廢棄物入河", "過度抽取地下水"],
        optionsEn: [
          "Cementing all riverbanks",
          "Planting trees along the banks and maintaining natural shorelines",
          "Dumping waste into rivers",
          "Excessive groundwater extraction"
        ],
        correctIndex: 1
      },
      // 70
      {
        question: "關於「環境影響評估」(EIA)，下列哪一項說法正確？",
        questionEn: "Which statement about Environmental Impact Assessment (EIA) is correct?",
        options: ["只是一種形式，不需實際執行", "在大型開發前評估對環境的可能影響", "只評估經濟效益", "只與交通建設有關"],
        optionsEn: [
          "It is just a formality and need not be implemented",
          "It assesses possible environmental impacts before large developments",
          "It evaluates only economic benefits",
          "It only relates to transport projects"
        ],
        correctIndex: 1
      },
      // 71
      {
        question: "若想減少家中廚餘的環境影響，下列哪一項作法較佳？",
        questionEn: "To reduce the environmental impact of household food waste, which practice is better?",
        options: ["全部丟一般垃圾", "適量並做廚餘回收或堆肥", "完全不分類", "任意倒入排水溝"],
        optionsEn: [
          "Throwing all food waste into general trash",
          "Producing a reasonable amount and doing food waste recycling or composting",
          "Not sorting at all",
          "Pouring it into drains at will"
        ],
        correctIndex: 1
      },
      // 72
      {
        question: "「環境噪音」主要會影響什麼？",
        questionEn: "What does environmental noise mainly affect?",
        options: ["只影響動物，不影響人類", "人類的聽力與身心健康", "只影響空氣品質", "只影響水質"],
        optionsEn: [
          "Only animals, not humans",
          "Human hearing and physical and mental health",
          "Only air quality",
          "Only water quality"
        ],
        correctIndex: 1
      },
      // 73
      {
        question: "下列哪一項屬於「氣候調適」措施？",
        questionEn: "Which of the following is a climate adaptation measure?",
        options: ["提高海堤高度防止海水倒灌", "增加燃煤發電量", "砍伐所有樹木", "大量興建高耗能建築"],
        optionsEn: [
          "Raising seawalls to prevent seawater intrusion",
          "Increasing coal power generation",
          "Cutting down all trees",
          "Building many high‑energy‑consuming buildings"
        ],
        correctIndex: 0
      },
      // 74
      {
        question: "使用「環保清潔劑」的好處是什麼？",
        questionEn: "What is a benefit of using eco‑friendly cleaning products?",
        options: ["一定比一般清潔劑更便宜", "降低對水體與生態的傷害", "完全沒有任何化學成分", "清潔效果一定比較差"],
        optionsEn: [
          "They are always cheaper than regular cleaners",
          "They reduce harm to water bodies and ecosystems",
          "They contain no chemicals at all",
          "They always clean worse than regular cleaners"
        ],
        correctIndex: 1
      },
      // 75
      {
        question: "下列哪一個是「公害」的典型例子？",
        questionEn: "Which is a typical example of public nuisance (pollution)?",
        options: ["適度城市綠化", "工廠排放廢氣造成空氣污染", "社區種植花草", "學校節能減碳計畫"],
        optionsEn: [
          "Moderate urban greening",
          "Factory emissions causing air pollution",
          "Planting flowers in communities",
          "School energy‑saving and carbon reduction plans"
        ],
        correctIndex: 1
      },
      // 76
      {
        question: "關於「節能家電」使用方式，下列何者較恰當？",
        questionEn: "Which way of using energy‑saving appliances is more appropriate?",
        options: ["買來後長期待機不關", "搭配良好使用習慣才能發揮節能效果", "開越久越節能", "與使用習慣無關"],
        optionsEn: [
          "Leaving them on standby for a long time after purchase",
          "Combining them with good usage habits to save energy",
          "The longer they run, the more energy they save",
          "Usage habits make no difference"
        ],
        correctIndex: 1
      },
      // 77
      {
        question: "下列哪一項是「城市綠地」的環境效益？",
        questionEn: "Which is an environmental benefit of urban green spaces?",
        options: ["增加都市熱島效應", "提供休憩空間與生物棲地", "製造更多廢棄物", "完全沒有生態功能"],
        optionsEn: [
          "Increasing the urban heat island effect",
          "Providing recreation space and wildlife habitat",
          "Producing more waste",
          "Having no ecological function"
        ],
        correctIndex: 1
      },
      // 78
      {
        question: "若要減少電子廢棄物，下列哪一項作法較好？",
        questionEn: "To reduce electronic waste, which is a better practice?",
        options: ["經常更換手機追求最新款", "延長產品使用年限並善用回收管道", "隨意丟棄舊電子產品", "買越多備份越好"],
        optionsEn: [
          "Frequently changing phones to get the newest model",
          "Extending product lifespan and using recycling channels",
          "Randomly throwing away old electronics",
          "Buying as many backup devices as possible"
        ],
        correctIndex: 1
      },
      // 79
      {
        question: "「能源轉型」常見的方向為何？",
        questionEn: "What is a common direction of energy transition?",
        options: ["由再生能源轉回化石燃料", "由高碳能源轉向低碳與再生能源", "完全不變化", "只增加用電量"],
        optionsEn: [
          "Switching from renewable energy back to fossil fuels",
          "Shifting from high‑carbon to low‑carbon and renewable energy",
          "Keeping everything unchanged",
          "Only increasing electricity use"
        ],
        correctIndex: 1
      },
      // 80
      {
        question: "下列哪一項最有助於降低學校用電？",
        questionEn: "Which action helps most in reducing electricity use at school?",
        options: ["中午無人時仍開燈開冷氣", "下課時關閉教室電燈與電器", "讓電腦終年不停機", "所有教室燈具全開"],
        optionsEn: [
          "Keeping lights and AC on at noon when nobody is there",
          "Turning off classroom lights and devices after class",
          "Leaving computers on all year round",
          "Turning on all classroom lights all the time"
        ],
        correctIndex: 1
      },
      // 81
      {
        question: "關於「生物多樣性」，下列哪一項說明較正確？",
        questionEn: "Which statement about biodiversity is more correct?",
        options: ["只指動物種類的多寡", "包括物種、基因與生態系多樣性", "只與植物有關", "只看數量不看種類"],
        optionsEn: [
          "It only refers to the number of animal species",
          "It includes diversity of species, genes, and ecosystems",
          "It only relates to plants",
          "Only the number matters, not the types"
        ],
        correctIndex: 1
      },
      // 82
      {
        question: "環保觀念中提到的「在地化」(Localization) 主要強調什麼？",
        questionEn: "In environmental thinking, what does “localization” mainly emphasize?",
        options: ["完全禁止進出口貿易", "強化在地生產與在地消費，減少運輸負擔", "只吃一種食物", "與環保無關"],
        optionsEn: [
          "Completely banning imports and exports",
          "Strengthening local production and consumption to reduce transportation burden",
          "Eating only one type of food",
          "Having nothing to do with environmental protection"
        ],
        correctIndex: 1
      },
      // 83
      {
        question: "下列哪一項不是「綠色校園」應推動的措施？",
        questionEn: "Which is NOT a measure a green campus should promote?",
        options: ["減少一次性用品使用", "推動能源與水資源節約", "加強生態與環境教育", "要求學生每天開車上學"],
        optionsEn: [
          "Reducing the use of single‑use items",
          "Promoting energy and water conservation",
          "Strengthening ecological and environmental education",
          "Requiring students to drive to school every day"
        ],
        correctIndex: 3
      },
      // 84
      {
        question: "家中使用冰箱時，下列哪一種做法較不環保？",
        questionEn: "Which way of using a refrigerator at home is less environmentally friendly?",
        options: ["頻繁開關冰箱門", "避免熱食直接放入冰箱", "整理內容物、減少開門時間", "保持適當溫度設定"],
        optionsEn: [
          "Frequently opening and closing the fridge door",
          "Avoiding putting hot food directly into the fridge",
          "Organizing contents to reduce door‑open time",
          "Keeping an appropriate temperature setting"
        ],
        correctIndex: 0
      },
      // 85
      {
        question: "「環保志工」參與的活動通常不包含哪一項？",
        questionEn: "Which activity is usually NOT part of an environmental volunteer’s work?",
        options: ["淨灘與環境清理", "協助宣導環保觀念", "監測與回報污染情況", "非法傾倒廢棄物"],
        optionsEn: [
          "Beach cleanups and environmental cleaning",
          "Helping promote environmental awareness",
          "Monitoring and reporting pollution",
          "Illegally dumping waste"
        ],
        correctIndex: 3
      },
      // 86
      {
        question: "下列哪一項是「氣候行動」(Climate Action) 的例子？",
        questionEn: "Which of the following is an example of climate action?",
        options: ["持續增加燃煤發電比重", "推動再生能源與節能措施", "鼓勵使用高油耗車", "將所有森林砍伐改為農地"],
        optionsEn: [
          "Continuing to increase the share of coal power",
          "Promoting renewable energy and energy‑saving measures",
          "Encouraging the use of gas‑guzzling cars",
          "Cutting down all forests and turning them into farmland"
        ],
        correctIndex: 1
      },
      // 87
      {
        question: "「生活週期評估」(LCA) 主要分析什麼？",
        questionEn: "What does Life Cycle Assessment (LCA) mainly analyze?",
        options: ["產品從生產到廢棄對環境的全生命週期影響", "產品的顏色變化", "產品的品牌形象", "只有價格高低"],
        optionsEn: [
          "The environmental impacts of a product from production to disposal",
          "Changes in product color",
          "Brand image of the product",
          "Only the price level"
        ],
        correctIndex: 0
      },
      // 88
      {
        question: "若要降低紙張使用量，下列哪一項作法較佳？",
        questionEn: "To reduce paper use, which practice is better?",
        options: ["所有公告都印成紙本", "多使用電子文件與線上系統", "習慣單面列印一次就丟", "大量影印備用"],
        optionsEn: [
          "Printing all announcements on paper",
          "Using more electronic documents and online systems",
          "Always printing single‑sided and throwing pages away",
          "Making lots of photocopies as backup"
        ],
        correctIndex: 1
      },
      // 89
      {
        question: "下列哪一項是「公民科學」在環保上的應用？",
        questionEn: "Which is an example of citizen science in environmental protection?",
        options: ["民眾參與鳥類調查與回報觀察資料", "只有專家才能做環境調查", "禁止民眾接觸環境資料", "只在實驗室內進行"],
        optionsEn: [
          "Citizens joining bird surveys and reporting observations",
          "Only experts can conduct environmental surveys",
          "Banning citizens from accessing environmental data",
          "Doing everything only in laboratories"
        ],
        correctIndex: 0
      },
      // 90
      {
        question: "「用電尖峰」時段應該怎麼做比較好？",
        questionEn: "What should we do during peak electricity hours?",
        options: ["集中在尖峰時段洗衣、烘衣", "避免使用大量電力設備", "全部電器同時開啟", "與離峰時段完全一樣"],
        optionsEn: [
          "Do laundry and drying mainly during peak hours",
          "Avoid using many high‑power devices",
          "Turn on all appliances at the same time",
          "Use electricity exactly the same as off‑peak times"
        ],
        correctIndex: 1
      },
      // 91
      {
        question: "下列哪一個是「友善農業」的目標？",
        questionEn: "Which is a goal of environmentally friendly agriculture?",
        options: ["大量使用農藥與化肥", "保護土壤、水源與生物多樣性", "只追求短期高產量", "完全不管環境影響"],
        optionsEn: [
          "Using large amounts of pesticides and fertilizers",
          "Protecting soil, water, and biodiversity",
          "Only pursuing short‑term high yields",
          "Ignoring environmental impacts completely"
        ],
        correctIndex: 1
      },
      // 92
      {
        question: "關於「綠色採購」，哪一項敘述較正確？",
        questionEn: "Which statement about green procurement is more correct?",
        options: ["只看最低價格", "優先選擇對環境衝擊較小的產品與服務", "只看外觀設計", "與政府無關"],
        optionsEn: [
          "Only considering the lowest price",
          "Prioritizing products and services with lower environmental impact",
          "Only looking at appearance design",
          "Having nothing to do with government"
        ],
        correctIndex: 1
      },
      // 93
      {
        question: "下列哪一種行為可以減少「食物里程」？",
        questionEn: "Which behavior can help reduce food miles?",
        options: ["多選擇遠距進口食物", "採買在地、當季食材", "偏愛空運冷凍食品", "習慣網購跨國美食"],
        optionsEn: [
          "Choosing long‑distance imported foods more often",
          "Buying local and seasonal ingredients",
          "Preferring air‑freighted frozen foods",
          "Frequently ordering cross‑border gourmet food online"
        ],
        correctIndex: 1
      },
      // 94
      {
        question: "「環境標示」主要提供什麼資訊？",
        questionEn: "What information do environmental labels mainly provide?",
        options: ["產品顏色與尺寸", "產品對環境影響或節能特性", "促銷折扣", "銷售地點"],
        optionsEn: [
          "Product color and size",
          "Environmental impact or energy‑saving features of the product",
          "Promotional discounts",
          "Sales locations"
        ],
        correctIndex: 1
      },
      // 95
      {
        question: "下列哪一項最有助於降低教室夏季用電？",
        questionEn: "Which action helps most to reduce classroom electricity use in summer?",
        options: ["拉上窗簾、全開冷氣與燈", "適度使用電扇並搭配開窗或合理溫度冷氣", "門窗全關又不開冷氣", "所有電器同時開啟"],
        optionsEn: [
          "Closing curtains and turning AC and lights to max",
          "Using fans appropriately and combining with open windows or reasonable AC settings",
          "Keeping doors and windows closed with AC off",
          "Turning on all electrical equipment at once"
        ],
        correctIndex: 1
      },
      // 96
      {
        question: "關於「再生紙」，哪一項說法較正確？",
        questionEn: "Which statement about recycled paper is more correct?",
        options: ["品質一定很差不能用", "使用舊紙漿再製，減少對林木需求", "比一般紙張用水更多", "一定沒有環保效益"],
        optionsEn: [
          "Its quality is always too poor to use",
          "It is made from used pulp, reducing the need for new trees",
          "It uses more water than regular paper",
          "It definitely has no environmental benefit"
        ],
        correctIndex: 1
      },
      // 97
      {
        question: "下列哪一項是「減塑生活」的具體作法？",
        questionEn: "Which is a concrete practice of a plastic‑reduction lifestyle?",
        options: ["每次購物都拿新塑膠袋", "自備購物袋、餐具與水壺", "大量囤積塑膠杯", "偏好小包裝零食"],
        optionsEn: [
          "Taking new plastic bags every time you shop",
          "Bringing your own shopping bag, tableware and water bottle",
          "Stockpiling lots of plastic cups",
          "Preferring small packaged snacks"
        ],
        correctIndex: 1
      },
      // 98
      {
        question: "「綠色金融」主要希望達成什麼目標？",
        questionEn: "What is the main goal of green finance?",
        options: ["將資金投入高污染產業", "支持環保與低碳產業的發展", "完全不考慮環境風險", "只追求短期高利潤"],
        optionsEn: [
          "Channeling funds into highly polluting industries",
          "Supporting the development of environmentally friendly and low‑carbon industries",
          "Ignoring environmental risks completely",
          "Only pursuing short‑term high profits"
        ],
        correctIndex: 1
      },
      // 99
      {
        question: "下列哪一項屬於「校園環境維護」的一部分？",
        questionEn: "Which of the following is part of campus environmental maintenance?",
        options: ["在校園任意丟垃圾", "參與校園打掃與綠化", "破壞校園植栽", "塗鴉破壞公共設施"],
        optionsEn: [
          "Throwing garbage around campus at will",
          "Joining campus cleaning and greening",
          "Damaging campus plants",
          "Vandalizing public facilities with graffiti"
        ],
        correctIndex: 1
      },
      // 100
      {
        question: "若想在日常生活中支持永續發展，下列哪一項最不恰當？",
        questionEn: "If you want to support sustainable development in daily life, which is the LEAST appropriate?",
        options: ["節能、減碳、減少浪費", "支持環保與公平貿易產品", "重視資源回收與再利用", "盡量多消費、多丟棄"],
        optionsEn: [
          "Saving energy, cutting carbon, and reducing waste",
          "Supporting eco‑friendly and fair‑trade products",
          "Valuing recycling and reuse of resources",
          "Consuming and throwing away as much as possible"
        ],
        correctIndex: 3
      }
];

// ==========================================
// 2. 塑戰速決 (機會卡) 左右滑動是非題題庫
// ==========================================
const swipeQuestionsBank = [
    { question: "我喝完的寶特瓶，裡面還有剩一些飲料，可以直接丟進回收桶。", questionEn: "I can recycle a PET bottle with some drink left inside.", answer: false, feedback: "殘留的液體會汙染整批回收物！", feedbackEn: "Leftover liquid contaminates the recycling batch!" },
    { question: "回收寶特瓶時，最重要的步驟是『清空、沖洗』，避免液體殘留。", questionEn: "The most important step in recycling PET bottles is emptying and rinsing.", answer: true, feedback: "乾淨的回收物是 rPET 的第一步！", feedbackEn: "Clean recyclables are the first step for rPET!" },
    { question: "『生物可分解塑膠 (PLA)』看起來很環保，所以用完後，應該丟進 PET 寶特瓶回收桶。", questionEn: "Biodegradable plastic (PLA) should be recycled with PET bottles.", answer: false, feedback: "PLA 會汙染 PET 回收流，讓 rPET 報廢！", feedbackEn: "PLA contaminates the PET stream and ruins rPET!" },
    { question: "寶特瓶 (PET) 回收後，只能降級做成衣服，不能再做回食品級的瓶子。", questionEn: "Recycled PET can only be downcycled into clothes, not food-grade bottles.", answer: false, feedback: "「瓶到瓶」技術 (rPET) 能讓它重生！", feedbackEn: "'Bottle-to-bottle' technology gives it new life!" },
    { question: "使用 rPET (再生塑膠) 製成的瓶子，衛生和安全標準比較低。", questionEn: "rPET bottles have lower hygiene and safety standards.", answer: false, feedback: "食品級 rPET 的安全標準與新料相同！", feedbackEn: "Food-grade rPET is just as safe as new plastic!" },
    { question: "玻璃瓶比寶特瓶重。運輸 100 瓶玻璃瓶，會比運輸 100 瓶寶特瓶產生更多碳排放。", questionEn: "Transporting 100 glass bottles creates more carbon emissions than 100 PET bottles.", answer: true, feedback: "「輕量化」是減少運輸碳排的關鍵！", feedbackEn: "Lightweight packaging is key to reducing emissions!" },
    { question: "包裝『輕量化』（例如用更薄的瓶身、更小的瓶蓋）是一種永續行為。", questionEn: "Lightweight packaging is a sustainable practice.", answer: true, feedback: "使用更少的原料 = 更少的碳排。", feedbackEn: "Less material used = fewer carbon emissions." },
    { question: "在飲料工廠隔壁直接生產空瓶（駐廠生產），會比從外地用卡車運送空瓶更浪費能源。", questionEn: "Producing empty bottles right next to the beverage factory wastes more energy.", answer: false, feedback: "「駐廠生產」能省下所有運輸碳排！", feedbackEn: "In-house production saves all transport emissions!" },
    { question: "回收時，瓶蓋和瓶身應該要分開丟棄。", questionEn: "Bottle caps and bodies should be discarded separately.", answer: false, feedback: "環境部建議「鎖上瓶蓋」一起回收！", feedbackEn: "It is recommended to recycle them together!" },
    { question: "只要是塑膠，都可以混在一起回收。", questionEn: "All types of plastic can be recycled together.", answer: false, feedback: "不同材質的塑膠必須分開，才能進入各自的循環。", feedbackEn: "Different plastics must be separated for proper recycling." }
];

// ==========================================
// 3. 永續記憶卡 (命運卡) 關卡與卡牌庫
// ==========================================
const memoryGameLevels = [
  { nameZh: 'S — 原料階段（Supply）', nameEn: 'S — Supply Stage', size:4, time:60, targetMoves:40, descZh:'掌握材料替代與碳盤查，從源頭減碳開始。', descEn:'Master material substitution and carbon accounting to start decarbonizing at the source.' },
  { nameZh: 'P — 製程階段（Production）', nameEn: 'P — Production Stage', size:4, time:60, targetMoves:40, descZh:'導入綠電與節能設備，優化製程效率。', descEn:'Adopt green power and energy-saving equipment to optimize process efficiency.' },
  { nameZh: 'M — 包裝階段（Material）', nameEn: 'M — Material Stage', size:4, time:60, targetMoves:40, descZh:'設計輕量化瓶蓋與易撕包裝，提升可回收性。', descEn:'Design lightweight caps and easy-tear packaging to enhance recyclability.' },
  { nameZh: 'W — 倉儲與回收階段（Warehouse）', nameEn: 'W — Warehouse & Recycling Stage', size:4, time:60, targetMoves:40, descZh:'整合物流與再生回收，打造閉環循環經濟。', descEn:'Integrate logistics and regenerative recycling to build a closed-loop economy.' }
];

const memoryGameBank = [
  /* ---- S：原料階段（Supply） ---- */
  { stage: 0, emoji:'🧪', labelZh:'碳盤查', labelEn:'Carbon Footprint', tipZh:'建立上游原料碳盤查，掌握排放來源。', tipEn:'Establish upstream raw material carbon accounting.'},
  { stage: 0, emoji:'🔁', labelZh:'再生料導入', labelEn:'Recycled Content', tipZh:'導入 rPET 取代原生料，降低碳足跡。', tipEn:'Introduce rPET to replace virgin materials.'},
  { stage: 0, emoji:'🧰', labelZh:'品管 QC', labelEn:'Quality Control', tipZh:'嚴格檢驗減少瑕疵品與浪費。', tipEn:'Strict inspection reduces defective products and waste.'},
  { stage: 0, emoji:'🧴', labelZh:'瓶胚製造', labelEn:'Preform Mfg', tipZh:'優化瓶胚重量設計，節省塑料與能耗。', tipEn:'Optimize preform weight to save plastic and energy.'},
  { stage: 0, emoji:'🌱', labelZh:'綠色採購', labelEn:'Green Procurement', tipZh:'優先選用低碳與環保認證原料。', tipEn:'Prioritize low-carbon and eco-certified raw materials.'},
  { stage: 0, emoji:'🧮', labelZh:'供應商評估', labelEn:'Supplier Eval', tipZh:'以 ESG 準則評量供應商的永續表現。', tipEn:'Assess supplier sustainability performance using ESG criteria.'},
  { stage: 0, emoji:'📊', labelZh:'生命週期分析', labelEn:'LCA', tipZh:'分析原料從製造到廢棄的環境影響。', tipEn:'Analyze the environmental impact from manufacturing to disposal.'},
  { stage: 0, emoji:'⚗️', labelZh:'材料研發', labelEn:'Material R&D', tipZh:'開發新型環保塑料與可分解材料。', tipEn:'Develop new eco-friendly plastics and biodegradable materials.'},

  /* ---- P：製程階段（Production） ---- */
  { stage: 1, emoji:'🌞', labelZh:'綠電導入', labelEn:'Green Energy', tipZh:'採用太陽能、風能，降低製程碳排。', tipEn:'Utilize solar and wind power to reduce emissions.'},
  { stage: 1, emoji:'⚙️', labelZh:'節能製程', labelEn:'Energy-Efficient', tipZh:'使用高效率馬達與餘熱回收技術。', tipEn:'Use high-efficiency motors and waste-heat recovery.'},
  { stage: 1, emoji:'🏭', labelZh:'無菌充填', labelEn:'Aseptic Filling', tipZh:'節能高良率的綠色生產技術。', tipEn:'Energy-saving and high-yield green production tech.'},
  { stage: 1, emoji:'💧', labelZh:'節水循環', labelEn:'Water Recycling', tipZh:'製程回收水系統減少取水與排放。', tipEn:'Process water recovery systems reduce intake.'},
  { stage: 1, emoji:'🧊', labelZh:'製冷優化', labelEn:'Cooling Opt', tipZh:'導入冷卻塔與變頻系統節能降耗。', tipEn:'Implement cooling towers and VFD systems for energy savings.'},
  { stage: 1, emoji:'🌡️', labelZh:'溫控管理', labelEn:'Temp Management', tipZh:'動態調節製程溫度以降低能源使用。', tipEn:'Dynamically adjust process temperatures to lower energy usage.'},
  { stage: 1, emoji:'🧯', labelZh:'零事故管理', labelEn:'Zero Incident', tipZh:'落實安全製程與設備維護。', tipEn:'Ensure process safety and equipment maintenance.'},
  { stage: 1, emoji:'🪫', labelZh:'廢熱回收', labelEn:'Heat Recovery', tipZh:'再利用生產過程中產生的餘熱。', tipEn:'Reuse residual heat generated during the production process.'},

  /* ---- M：包裝階段（Material） ---- */
  { stage: 2, emoji:'🍶', labelZh:'PET 瓶設計', labelEn:'Bottle Design', tipZh:'瓶身減重可顯著降低運輸碳排。', tipEn:'Reducing bottle weight lowers transport carbon emissions.'},
  { stage: 2, emoji:'🏷️', labelZh:'標籤減重', labelEn:'Label Reduction', tipZh:'易撕式標籤方便分流回收。', tipEn:'Easy-tear labels facilitate recycling separation.'},
  { stage: 2, emoji:'🔩', labelZh:'瓶蓋輕量化', labelEn:'Cap Lightweight', tipZh:'降低用料量並提升回收性。', tipEn:'Reduces material usage and enhances recyclability.'},
  { stage: 2, emoji:'📦', labelZh:'包裝減量', labelEn:'Pkg Reduction', tipZh:'去除非必要包裝結構以減少浪費。', tipEn:'Eliminate unnecessary packaging to minimize material waste.'},
  { stage: 2, emoji:'📐', labelZh:'模具優化', labelEn:'Mold Optimization', tipZh:'設計節省材料且提高生產效率的模具。', tipEn:'Design molds that save material and boost efficiency.'},
  { stage: 2, emoji:'🧷', labelZh:'黏合劑改良', labelEn:'Adhesive Improve', tipZh:'採用可分離式環保膠提高回收純度。', tipEn:'Use separable eco-friendly glue to enhance recycling purity.'},
  { stage: 2, emoji:'🎨', labelZh:'油墨減量', labelEn:'Ink Reduction', tipZh:'使用環保油墨減少印刷污染。', tipEn:'Use eco-friendly inks to minimize printing pollution.'},
  { stage: 2, emoji:'🪶', labelZh:'包裝創新', labelEn:'Pkg Innovation', tipZh:'研發紙基與生物降解替代包材。', tipEn:'Research and develop biodegradable packaging alternatives.'},

  /* ---- W：倉儲與回收階段（Warehouse） ---- */
  { stage: 3, emoji:'🚚', labelZh:'物流優化', labelEn:'Logistics Opt', tipZh:'最佳化路線與裝載率，減少碳排。', tipEn:'Optimize routes and loading capacity to reduce emissions.'},
  { stage: 3, emoji:'🏬', labelZh:'智慧倉儲', labelEn:'Smart Warehouse', tipZh:'集中配送降低空車與能源浪費。', tipEn:'Centralized distribution reduces empty vehicle runs.'},
  { stage: 3, emoji:'♻️', labelZh:'回收再生', labelEn:'Recycling', tipZh:'實現瓶到瓶閉環循環。', tipEn:'Achieve bottle-to-bottle closed-loop recycling.'},
  { stage: 3, emoji:'🌬️', labelZh:'能源回收', labelEn:'Energy Recovery', tipZh:'倉儲引入太陽能與風能再利用。', tipEn:'Introduce solar and wind energy for on-site use.'},
  { stage: 3, emoji:'📦', labelZh:'包材回收', labelEn:'Material Take-back', tipZh:'建立包裝回收系統減少廢棄物。', tipEn:'Establish a return system for packaging waste.'},
  { stage: 3, emoji:'🚴', labelZh:'低碳配送', labelEn:'Low-Carbon Delivery', tipZh:'採用電動車與綠色物流。', tipEn:'Adopt electric vehicles and green logistics.'},
  { stage: 3, emoji:'🔋', labelZh:'儲能管理', labelEn:'Energy Storage', tipZh:'整合電池與太陽能板提升能源效率。', tipEn:'Integrate batteries with solar panels for improved efficiency.'},
  { stage: 3, emoji:'🛰️', labelZh:'智慧監測', labelEn:'Smart Monitoring', tipZh:'利用物聯網監控溫濕度與能源使用。', tipEn:'Use IoT to monitor temperature, humidity, and energy.'}
];