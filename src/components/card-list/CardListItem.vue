<template>
  <div class="item">
    <div class="item__image">
      <img
        class="item__img"
        :src="require(`@/assets/images/exhaust/${item.information.image}.png`)"
        :alt="item.information.image"
      />
    </div>
    <div class="item__text">
      <h3 class="item__name">{{ item.information.name }}</h3>
      <p class="item__descr" v-html="item.information.descr"></p>
      <p class="item__vendor-code">{{ item.information.vendorCode }}</p>
    </div>
    <div class="item__counter">
      <div
        @click="decreaseQuantity(item.information.id)"
        class="item__change-count item__change-count_minus"
      >
        -
      </div>
      <div class="item__change-count">{{ item.quantity }}</div>
      <div
        @click="increaseQuantity(item.information.id)"
        class="item__change-count item__change-count_plus"
      >
        +
      </div>
    </div>
    <div class="item__price-sum">{{ priceSum }} ₽</div>
    <div @click="deleteItem(item.information.id)" class="item__delete"></div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { addSpaces } from "@/main";
export default {
  name: "CardListItem",
  props: {
    item: Object,
  },
  computed: {
    priceSum: function () {
      let sum = this.item.quantity * this.item.information.price;
      return addSpaces(sum);
    },
  },
  methods: {
    ...mapMutations(["decreaseQuantity", "increaseQuantity", "deleteItem"]),
  },
};
</script>

<style lang="scss" scoped>
.item {
  height: 100px;
  display: flex;
  align-items: center;
  &:not(:first-child) {
    border-top: 1px solid #c4c4c4;
    margin: 23px 0px 0px 15px;
    padding: 20px 0px 0px 0px;
  }
  &:first-child {
    margin: 50px 0px 0px 15px;
  }
  &__img {
    width: 100px;
    height: 100px;
  }
  &__text {
    width: 263px;
    margin: 0px 0px 0px 31px;
    font-family: "Lato";
  }
  &__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1f2432;
  }
  &__descr {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #2c3242;
  }
  &__vendor-code {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797b86;
  }
  &__counter {
    margin: 0px 0px 0px 79px;
  }
  &__change-count {
    display: inline-block;
    width: 34px;
    height: 34px;
    user-select: none;
    background: #f6f8fa;
    font-family: "Lato";
    font-weight: 400;
    font-size: 14px;
    line-height: 34px;
    text-align: center;
    color: #1f2432;
    &_minus {
      margin: 0px 2px 0px 0px;
      cursor: pointer;
      border-radius: 4px 0px 0px 4px;
    }
    &_plus {
      margin: 0px 0px 0px 2px;
      cursor: pointer;
      border-radius: 0px 4px 4px 0px;
    }
  }
  &__price-sum {
    flex: 1 0;
    text-align: left;
    margin: 0px 0px 0px 83px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    color: #1f2432;
  }
  &__close {
    position: relative;
  }
  &__delete {
    align-self: flex-start;
    position: relative;
    width: 12px;
    height: 12px;
    cursor: pointer;

    &:before,
    &:after {
      position: absolute;
      content: "";
      height: 12px;
      width: 1.5px;
      background-color: #333;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>