<template>
  <div class="item-card">
    <div class="item-card__image">
      <img
        class="item-card__img"
        :src="require(`@/assets/images/exhaust/${viewedItem.image}.png`)"
        :alt="viewedItem.image"
      />
    </div>
    <h3 class="item-card__capture">
      {{ viewedItem.name }}
    </h3>
    <p class="item-card__descr">
      {{ viewedItem.descr }}
    </p>
    <p class="item-card__price-rub">
      {{ addSpacesMethod(viewedItem.priceMin) }} ₽ –
      {{ addSpacesMethod(viewedItem.priceMax) }} ₽
    </p>
    <p class="item-card__price-eur">
      {{ convertToEuro(viewedItem.priceMin) }} € –
      {{ convertToEuro(viewedItem.priceMax) }} €
    </p>
    <button class="item-card__button">Подробнее</button>
  </div>
</template>
<script>
import { addSpaces } from "@/main";

export default {
  name: "SliderViewsItem",
  data() {
    return {
      euroToRub: 88.25,
    };
  },
  props: {
    viewedItem: Object,
  },
  methods: {
    convertToEuro(priceRub) {
      const priceEuro = Math.round((priceRub / 88.25) * 100) / 100;
      return addSpaces(priceEuro);
    },
    //в template нельзя использовать импортированные функции напрямую
    addSpacesMethod(price) {
      return addSpaces(price);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  flex-direction: column;
  user-select: none;
  width: 305px;
  height: 563px;
  padding: 25px;
  background: #f6f8fa;
  border-radius: 5px;

  &__capture {
    font-family: "Lato";
    font-weight: 700;
    font-size: 22px;
    line-height: 120.52%;
    color: #1f2432;
  }
  &__descr {
    flex: 1 0;
    margin: 10px 0px 0px 0px;
    font-family: "Lato";
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #1f2432;
  }
  &__price-rub {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    color: #1f2432;
  }
  &__price-eur {
    font-family: "Lato";
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797b86;
  }
  &__button {
    width: 100%;
    height: 52px;
    margin: 20px 0px 0px 0px;
    background: #0069b4;
    border-radius: 4px;
    font-family: "Lato";
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    text-align: center;
    color: #ffffff;
  }
}
</style>