const APIHTTP = "https://api.neople.co.kr/df/servers/";
const IMAGEHTTP = "https://img-api.neople.co.kr/df/servers/";

const APIKEY = "apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ";
const SearchAPIKey = "?" + APIKEY;

const axios = require("axios");
const urlencode = require("urlencode");

class CharacterSearch {
  async nickNameSearch(nickName) {
    const characterList = {};

    try {
      const res = await axios.get(
        APIHTTP +
          "all/characters?characterName=" +
          urlencode.encode(nickName) +
          "&WordType=full" +
          "&" +
          APIKEY
      );
      characterList.rows = res.data.rows;
    } catch (error) {
      characterList.error = error.response.data.error;
    }
    return characterList;
  }

  async defaultSearch(serverId, characterId) {
    const CHARACTERHTTP = APIHTTP + serverId + "/characters/" + characterId;
    const characterInfo = {};
    try {
      const equipment = await axios.get(
        CHARACTERHTTP + "/equip/equipment" + SearchAPIKey
      );
      const avatar = await axios.get(
        CHARACTERHTTP + "/equip/avatar" + SearchAPIKey
      );
      const creature = await axios.get(
        CHARACTERHTTP + "/equip/creature" + SearchAPIKey
      );
      const flag = await axios.get(
        CHARACTERHTTP + "/equip/flag" + SearchAPIKey
      );
      const talisman = await axios.get(
        CHARACTERHTTP + "/equip/talisman" + SearchAPIKey
      );

      // 기본 정보는 처음 장비에서 추출합니다.
      characterInfo.character = equipment.data;
      characterInfo.equipment = equipment.data.equipment;
      characterInfo.avatar = avatar.data.avatar;
      characterInfo.creature = creature.data.creature;
      characterInfo.flag = flag.data.flag;
      characterInfo.talismans = talisman.data.talismans;

      // 장비에서 추출한 데이터를 characterInfo.equipment와 중복되지않게 삭제합니다.
      delete characterInfo.character.equipment;
    } catch (error) {
      characterInfo.error = error.response.data.error;
    }

    return characterInfo;
  }

  characterImage(serverId, characterId) {
    return IMAGEHTTP + serverId + "/characters/" + characterId;
  }
}

module.exports = new CharacterSearch();
