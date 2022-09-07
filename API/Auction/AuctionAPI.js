const APIKEY = "&apikey=kQbYDpSR4R20Lku7pxRJaDePiOiw0ZpZ";
const AUCTIONITEMHTTP = "https://api.neople.co.kr/df/auction?itemName=";

const axios = require("axios");
const urlencode = require("urlencode");

class AuctionSeacher {
  async AuctionItemSearch(ItemName) {
    try {
      const res = await axios.get(
        AUCTIONITEMHTTP +
          urlencode.encode(ItemName) +
          "&wordType=full&wordShort=true" +
          APIKEY
      );
      return res.data;
    } catch (error) {
      return error.code;
    }
  }
}

module.exports = new AuctionSeacher();
