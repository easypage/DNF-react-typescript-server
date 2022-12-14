# πDNF-react-typescript-server

## π**κ΄λ ¨ μ¬μ΄νΈ**

> **[FrontEnd(netlify) λ°°ν¬](https://chimerical-genie-9befff.netlify.app/)**

> **[BackEnd(heroku) λ°°ν¬](https://dnf-react-typescript.herokuapp.com/)**

> **[BackEnd(Github) λ°°ν¬](https://github.com/easypage/DNF-react-typescript-server)**

---

# **πREST API**

## **π κΈ°λ³Έ λλ©μΈ**

> https://dnf-react-typescript.herokuapp.com/

#

## **π Character**

#

### **π nickName**

> μλ²μμ λλ€μμ κ²μ ν©λλ€.

> Get

> νλΌλ―Έν° nickname

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=<λλ€μ>

> https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=λ©λ‘ λ§μ΄μ°νΈ

#### **κ²°κ³Όμμ**

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

### **π default**

> μΊλ¦­ν° μμ΄λλ‘ μμΈ κ²μν©λλ€.

> Get

> νλΌλ―Έν° serverId, charcterId(λλ€μκ²μ value)

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/character/default?serverId=<μλ²μμ΄λ>&characterId=<μΊλ¦­ν°μμ΄λ>

> https://dnf-react-typescript.herokuapp.com/character/default?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### **κ²°κ³Όμμ**

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

### **π status**

> μΊλ¦­ν° μμ΄λλ‘ μ€νμ λ³΄λ₯Ό κ²μν©λλ€.

> Get

> νλΌλ―Έν° serverId, charcterId(λλ€μκ²μ value)

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/character/status?serverId=<μλ²μμ΄λ>&characterId=<μΊλ¦­ν°μμ΄λ>

> https://dnf-react-typescript.herokuapp.com/character/status?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### **κ²°κ³Όμμ**

```json{
  "default": [
    { "name": "HP", "value": 124547 },
    { "name": "MP", "value": 160449 },
    { "name": "ν", "value": 4303 },
    { "name": "μ§λ₯", "value": 2917 },
    { "name": "μ²΄λ ₯", "value": 3011 },
    { "name": "μ μ λ ₯", "value": 3137 },
    { "name": "λ¬Όλ¦¬ κ³΅κ²©", "value": 2871 },
    { "name": "λ§λ² κ³΅κ²©", "value": 1977 },
    { "name": "λλ¦½ κ³΅κ²©", "value": 2018 },
    null,
    { "name": "λ¬Όλ¦¬ λ°©μ΄", "value": 52280 },
    { "name": "λ§λ² λ°©μ΄", "value": 62280 },
    { "name": "λ¬Όλ¦¬ ν¬λ¦¬ν°μ»¬", "value": 102.9 },
    { "name": "λ§λ² ν¬λ¦¬ν°μ»¬", "value": 36 },
    { "name": "κ³΅κ²© μλ", "value": 66 },
    { "name": "μΊμ€ν μλ", "value": 49 },
    { "name": "μ΄λ μλ", "value": 48 },
    null
  ],
  "attributeEnhancement": [
    { "name": "νμμ± κ°ν", "value": 209 },
    { "name": "μμμ± κ°ν", "value": 106 },
    { "name": "λͺμμ± κ°ν", "value": 196 },
    { "name": "μμμ± κ°ν", "value": 106 }
  ]
}

```

#

### **π characterImage**

> μΊλ¦­ν°μΉ΄λ μ΄λ―Έμ§λ₯Ό μ€λλ€.

> Get (λ¦¬λ€μ΄λ νΈ)

> νλΌλ―Έν° serverId, charcterId(λλ€μκ²μ value)

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=<μλ²μμ΄λ>&characterId=<μΊλ¦­ν°μμ΄λ>

> https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=prey&characterId=9ea844d6c6a69c6770c3dadb2f413bf1

#### **κ²°κ³Ό μμ**

![μΊλ¦­ν°μ΄λ―Έμ§ API μκ²°κ³Ό](/readmeAsset/%EC%BA%90%EB%A6%AD%ED%84%B0%EC%9D%B4%EB%AF%B8%EC%A7%80.png)

#

## **π Auction(κ²½λ§€μ₯κ²μ)**

#

### **π itemSearch**

> κ²½λ§€μ₯μμ μμ΄νμ κ²μν©λλ€.

> Get

> νλΌλ―Έν° itemNAme

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=<μμ΄ν μ΄λ¦>

>     https://dnf-react-typescript.herokuapp.com/auction/itemSearch?itemName=λ¬΄μ

#### **κ²°κ³Όμμ**

```json
{"rows":[
    {"auctionNo":1186335498,"regDate":"2022-09-06 14:33:29",
    "expireDate":"2022-09-07 14:33:29",
    "itemId":"785e56a0ed4e3efd573da1f56a45217d",
    "itemName":"λ¬΄μ νλΈ μ‘°κ°",
    "itemAvailableLevel":1,
    "itemRarity":"μΈμ»€λ¨Ό","itemType":"μ€νμ»€λΈ",
    "itemTypeDetail":"μ¬λ£",
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

## **πEvent**

#

### **π banner**

> μ΄λ²€νΈ μ΄λ¦, λ°°λμ΄λ―Έμ§μ£Όμλ₯Ό λ¦¬μ€νΈ νμμΌλ‘ κ°μ Έμ΅λλ€.

> Get

> νλΌλ―Έν° μμ

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/event/banner

#### **κ²°κ³Όμμ**

```json
{
  [
  {url:"https://df.nexon.com/df/pg/chuseok2022", img: "https://dnf-react-typescript.herokuapp.com/eventBanner/μ€λμλμ .png"}
  },
 {url: "https://df.nexon.com/df/pg/landrunner2022", img: "https://dnf-react-typescript.herokuapp.com/eventBanner/λ‘λ΄λλ.png"}
 ]
}
```

#

## **π Item**

#

### **π itemimage**

> μμ΄νμ μ΄λ―Έμ§λ₯Ό κ°μ Έμ΅λλ€.

> Get

> νλΌλ―Έν° itemId(μμ΄ν κ²μ κ°)

#### **μμ**

> https://dnf-react-typescript.herokuapp.com/item/itemimage?<ItemId>

> https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=16f0995beea7ef49e854316eb9b34c79

#### **κ²°κ³Όμμ**

![μΊλ¦­ν°μ΄λ―Έμ§ API μκ²°κ³Ό](/readmeAsset/μμ΄νμ΄λ―Έμ§.png)
