const APIHTTP = "https://api.neople.co.kr/df/servers/";
const IMAGEHTTP = "https://img-api.neople.co.kr/df/servers/";

const APIKEY = "apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ";
const SearchAPIKey = "?" + APIKEY;

const axios = require("axios");
const urlencode = require("urlencode");

class CharacterSearch {
  async nickNameSearch(serverId, nickName) {
    const characterList = {};
    let server = "";
    if (!serverId) {
      server = "all";
    } else {
      server = serverId;
    }
    try {
      const res = await axios.get(
        APIHTTP +
          server +
          "/characters?characterName=" +
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

  async characterStatus(serverId, characterId) {
    const CHARACTERHTTP =
      APIHTTP + serverId + "/characters/" + characterId + "/status?" + APIKEY;
    try {
      const res = await axios.get(CHARACTERHTTP);
      const statusDefault = [
        res.data.status[0],
        res.data.status[1],
        res.data.status[4],
        res.data.status[5],
        res.data.status[6],
        res.data.status[7],
        res.data.status[8],
        res.data.status[9],
        res.data.status[12],
        null,
        res.data.status[31],
        res.data.status[32],
        res.data.status[10],
        res.data.status[11],
        res.data.status[13],
        res.data.status[14],
        res.data.status[15],
        null,
      ];

      const attributeEnhancement = [
        res.data.status[23],
        res.data.status[25],
        res.data.status[27],
        res.data.status[29],
      ];
      return { default: statusDefault, attributeEnhancement };
    } catch (error) {
      return error.response.data.error;
    }
  }
}

module.exports = new CharacterSearch();
