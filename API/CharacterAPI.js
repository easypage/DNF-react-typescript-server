const APIHTTP = "https://api.neople.co.kr/df/servers/";
const APIKEY = "apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ";
const SearchAPIKey = "?" + APIKEY;

const axios = require('axios');
const urlencode = require('urlencode'); 

class CharacterSearch{
  async nickNameSearch(nickName) { 
    // APIHTTP+"all/characters?characterName=%EB%A9%94%EB%A1%A0&WordType=full"+APIKEY
    const res = await axios.get(APIHTTP+"all/characters?characterName="+urlencode.encode(nickName)+"&WordType=full"+"&"+APIKEY)
    console.log(res.data);
  
  }


  async defaultSearch(serverValue, characterId) { 
    const CHARACTERHTTP = APIHTTP + serverValue + "/characters/" + characterId
    const characterInfo = {
      equipment:[]
    }
    // APIHTTP+"all/characters?characterName=%EB%A9%94%EB%A1%A0&WordType=full"+APIKEY
    // const res = await axios.get(APIHTTP + serverValue + "/characters/" + characterId + APIKEY)
    console.log("https://api.neople.co.kr/df/servers/prey/characters/9ea844d6c6a69c6770c3dadb2f413bf1?apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ");
    const res = await axios.get(CHARACTERHTTP+"/equip/equipment"+SearchAPIKey)
    
    characterInfo.equipment = res.data.equipment;
    console.log("캐릭터 인포");
    console.log(characterInfo);
    console.log("test");
  
  }
}

module.exports = new CharacterSearch();