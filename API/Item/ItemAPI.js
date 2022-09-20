const ITEMHTTP = "https://img-api.neople.co.kr/df/items/";

class Item {
  itemImage(itemId) {
    return ITEMHTTP + itemId;
  }
}

module.exports = new Item();
