
    let ListItem = [
        ["환경부", false],
        ["제주전기자동차서비스", false],
        ["한국전력", false],
        ["한국전기차충전서비스", false],
        ["포스코", false],
        ["서울시", false],
        ["기아자동차", false],
        ["현대자동차", false],
        ["대구환경공단", false],
        ["수원시", false],
        ["에스트래픽", false],
        ["지엔텔", false],
        ["수소충전소", false],
        ["에버온", false],
        ["울릉군청", false],
        ["인천국제공항", false],
        ["대영채비", false],
        ["클린일렉스", false],
        ["테슬라", false]
      ];

      ListItem.map( (item, index) => {

        console.log(item)

      } )


      ListItem[5][1] = true

      console.log("===================================")

      ListItem.map( (item, index) => {

        console.log(item)

      } )