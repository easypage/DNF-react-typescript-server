# 🚀DNF-react-typescript-server

## 🚀**관련 사이트**

> **[FrontEnd(netlify) 배포](https://chimerical-genie-9befff.netlify.app/)**

> **[BackEnd(heroku) 배포](https://dnf-react-typescript.herokuapp.com/)**

> **[BackEnd(Github) 배포](https://github.com/easypage/DNF-react-typescript-server)**

---

# **🚀REST API**

## **🌍 기본 도메인**

> https://dnf-react-typescript.herokuapp.com/

#

## **🌍 Character**

#

### **🌈 nickName**

> 서버에서 닉네임을 검색 합니다.

> Get

> 파라미터 nickname

#### **예시**

> https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=<닉네임>

> https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=메론맛어썰트

#### **결과예시**

```json
{
  "rows": [
    {
      "serverId": "",
      "characterId": "",
      "characterName": "",
      "level": "",
      "jobId": "",
      "jobGrowId": "",
      "jobName": "",
      "jobGrowName": ""
    }
  ]
}
```

#

### **🌈 default**

> 캐릭터 아이디로 상세 검색합니다.

> Get

> 파라미터 serverId, charcterId(닉네임검색 value)

#### **예시**

> https://dnf-react-typescript.herokuapp.com/character/default?serverId=<서버아이디>&characterId=<캐릭터아이디>

> https://dnf-react-typescript.herokuapp.com/character/default?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### **결과예시**

```json
{
  "character":{...},
  "equipment": [...],
  "avatar":[...],
  "creature":{...},
  "talismans":[...],
  }
```

#

### **🌈 status**

> 캐릭터 아이디로 스텟정보를 검색합니다.

> Get

> 파라미터 serverId, charcterId(닉네임검색 value)

#### **예시**

> https://dnf-react-typescript.herokuapp.com/character/status?serverId=<서버아이디>&characterId=<캐릭터아이디>

> https://dnf-react-typescript.herokuapp.com/character/status?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### **결과예시**

```json{
  "default": [
    { "name": "HP", "value": 124547 },
    { "name": "MP", "value": 160449 },
    { "name": "힘", "value": 4303 },
    { "name": "지능", "value": 2917 },
    { "name": "체력", "value": 3011 },
    { "name": "정신력", "value": 3137 },
    { "name": "물리 공격", "value": 2871 },
    { "name": "마법 공격", "value": 1977 },
    { "name": "독립 공격", "value": 2018 },
    null,
    { "name": "물리 방어", "value": 52280 },
    { "name": "마법 방어", "value": 62280 },
    { "name": "물리 크리티컬", "value": 102.9 },
    { "name": "마법 크리티컬", "value": 36 },
    { "name": "공격 속도", "value": 66 },
    { "name": "캐스팅 속도", "value": 49 },
    { "name": "이동 속도", "value": 48 },
    null
  ],
  "attributeEnhancement": [
    { "name": "화속성 강화", "value": 209 },
    { "name": "수속성 강화", "value": 106 },
    { "name": "명속성 강화", "value": 196 },
    { "name": "암속성 강화", "value": 106 }
  ]
}

```

#

### **🌈 characterImage**

> 캐릭터카드 이미지를 줍니다.

> Get (리다이렉트)

> 파라미터 serverId, charcterId(닉네임검색 value)

#### **예시**

> https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=<서버아이디>&characterId=<캐릭터아이디>

> https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### **결과 예시**

![캐릭터이미지 API 예결과](/readmeAsset/%EC%BA%90%EB%A6%AD%ED%84%B0%EC%9D%B4%EB%AF%B8%EC%A7%80.png)

#

## **🌍 Auction(경매장검색)**

#

### **🌈 itemSearch**

> 경매장에서 아이템을 검색합니다.

> Get

> 파라미터 itemNAme

#### **예시**

> https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=<아이템 이름>

>     https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=무색

#### **결과예시**

```json
{"rows":[
    {"auctionNo":1186335498,"regDate":"2022-09-06 14:33:29",
    "expireDate":"2022-09-07 14:33:29",
    "itemId":"785e56a0ed4e3efd573da1f56a45217d",
    "itemName":"무색 큐브 조각",
    "itemAvailableLevel":1,
    "itemRarity":"언커먼","itemType":"스태커블",
    "itemTypeDetail":"재료",
    "refine":0,
    "reinforce":0,
    "amplificationName":null,
    "adventureFame":0,
    "count":700000,
    "price":-1,
    "currentPrice":58100000,
    "unitPrice":83,
    "averagePrice":78},
    ...
 ]

 }
```

#

## **🌍Event**

#

### **🌈 banner**

> 이벤트 이름, 배너이미지주소를 리스트 형식으로 가져옵니다.

> Get

> 파라미터 없음

#### **예시**

> https://dnf-react-typescript.herokuapp.com/event/banner

#### **결과예시**

```json
{
  [
  {url:"https://df.nexon.com/df/pg/chuseok2022", img: "https://dnf-react-typescript.herokuapp.com/eventBanner/오늘의던전.png"}
  },
 {url: "https://df.nexon.com/df/pg/landrunner2022", img: "https://dnf-react-typescript.herokuapp.com/eventBanner/로봇랜디.png"}
 ]
}
```

#

## **🌍 Item**

#

### **🌈 itemimage**

> 아이템의 이미지를 가져옵니다.

> Get

> 파라미터 itemId(아이템 검색 값)

#### **예시**

> https://dnf-react-typescript.herokuapp.com/item/itemimage?<ItemId>

> https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=16f0995beea7ef49e854316eb9b34c79

#### **결과예시**

![캐릭터이미지 API 예결과](/readmeAsset/아이템이미지.png)
