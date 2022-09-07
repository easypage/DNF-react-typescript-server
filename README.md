# DNF-react-typescript-server

# REST API

## 기본 도메인

> https://dnf-react-typescript.herokuapp.com/

#

## Character

### nickNameSearch

> 서버에서 닉네임을 검색 합니다.

> Get

> 파라미터 nickname

    https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=<닉네임>

#### 예시

     https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=메론맛어썰트

#### 결과예시

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

### defaultSearch

> 캐릭터 아이디로 상세 검색합니다.

> Get

> 파라미터 serverId, charcterId(닉네임검색 value)

    https://dnf-react-typescript.herokuapp.com/character/default?serverId=<서버아이디>&characterId=<캐릭터아이디>

#### 예시

     https://dnf-react-typescript.herokuapp.com/character/default?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### 결과예시

```json
{
  "character":{...},
  "equipment": [...],
  "avatar":[...],
  "creature":{...},
  "talismans":[...],
  }
```

### characterImage

> 캐릭터카드 이미지를 줍니다.

> Get (리다이렉트)

> 파라미터 serverId, charcterId(닉네임검색 value)

    https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=<서버아이디>&characterId=<캐릭터아이디>

#### 예시

https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### 결과 예시

![캐릭터이미지 API 예결과](/readmeAsset/%EC%BA%90%EB%A6%AD%ED%84%B0%EC%9D%B4%EB%AF%B8%EC%A7%80.png)

#

## Auction(경매장검색)

### itemSearch

> 경매장에서 아이템을 검색합니다.

> Get

> 파라미터 itemNAme

    https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=<아이템 이름>

#### 예시

     https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=무색

#### 결과예시

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
