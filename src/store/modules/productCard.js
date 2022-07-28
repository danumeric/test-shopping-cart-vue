import { addSpaces } from "@/main";
export default ({
  state: {
    goodsInCard: [
      {
        quantity: 1,
        information: {
          id: 'id0',
          name: 'Вытяжное устройство G2H',
          descr: '12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия',
          price: 12644,
          vendorCode: 'G2H1065',
          image: 'G2H_G2H1065',
        }
      },
      {
        quantity: 2,
        information: {
          id: 'id1',
          name: 'Вытяжное устройство BXC',
          descr: '12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия',
          price: 12644,
          vendorCode: 'G2H1065',
          image: 'BXC_G2H1065',
        }
      }, {
        quantity: 1,
        information: {
          id: 'id2',
          name: 'Вытяжное устройство GHN',
          descr: '12-72/168 м<sup>3</sup>/ч / гидрорегулируемый расход / от датчика присутствия',
          price: 12644,
          vendorCode: 'G2H1065',
          image: 'GHN_G2H1065',
        }
      },
    ],
    isInstallation: false
  },
  getters: {
    getGoodsInCard(state) {
      return state.goodsInCard;
    },
    getTotalSum(state) {
      let sum = state.goodsInCard.reduce((acc, item) => {
        return acc + item.information.price * item.quantity
      }, 0);
      return addSpaces(sum)
    },
    getTotalQuantity(state) {
      return state.goodsInCard.reduce((acc, item) => {
        return acc + item.quantity
      }, 0);
    },
    getTotalQuantityRu(state) {
      let totalQuantity = state.goodsInCard.reduce((acc, item) => {
        return acc + item.quantity
      }, 0);
      let nounRuQuantity = 'товаров';
      if ((totalQuantity === 1 || totalQuantity % 10 === 1) && totalQuantity !== 11) {
        nounRuQuantity = 'товар';
      }
      if (totalQuantity > 1 && totalQuantity < 5) {
        nounRuQuantity = 'товара';
      }
      return totalQuantity + ' ' + nounRuQuantity;
    },
    getIsInstallation(state) {
      return state.isInstallation;
    }
  },
  mutations: {
    decreaseQuantity(state, id) {
      let changedItem = state.goodsInCard.find(item => item.information.id === id);
      if (changedItem.quantity < 2) {
        return;
      }
      changedItem.quantity--;
    },
    increaseQuantity(state, id) {
      let changedItem = state.goodsInCard.find(item => item.information.id === id);
      if (changedItem.quantity > 99) {
        return;
      }
      changedItem.quantity++;
    },

    clearCard(state) {
      state.goodsInCard = [];
    },
    deleteItem(state, id) {
      state.goodsInCard = state.goodsInCard.filter(item => item.information.id != id)
    },
    setIsInstallation(state, value) {
      state.isInstallation = value;
    }

  },
  actions: {
  },

})
