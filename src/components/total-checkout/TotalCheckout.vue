<template>
  <div class="total">
    <h2 class="total__capture">Итого</h2>
    <div class="total__table">
      <span class="total__key">Сумма заказа</span>
      <span class="total__value">{{ getTotalSum }} ₽</span>
      <span class="total__key">Количество</span>
      <span class="total__value">{{ getTotalQuantity }} шт</span>
      <span class="total__key">Установка</span>
      <span class="total__value">{{ getIsInstallation ? "Да" : "Нет" }}</span>
    </div>
    <div class="total__line"></div>
    <div class="total__sum">
      <span class="total__key-sum">Стоимость товаров</span>
      <span class="total__value-sum">{{ getTotalSum }} ₽</span>
      <button class="total__button total__button_create">Оформить заказ</button>
      <button class="total__button total__button_buy">Купить в 1 клик</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalCheckout",
  computed: {
    ...mapGetters(["getTotalSum", "getTotalQuantity", "getIsInstallation"]),
  },
};
</script>

<style lang="scss" scoped>
.total {
  width: 425px;
  height: 458px;
  padding: 35px 30px;
  background: #f6f8fa;
  border-radius: 5px;
  &__capture {
    font-family: "Lato";
    font-weight: 600;
    font-size: 24px;
    line-height: 120.52%;
    color: #1f2432;
  }
  &__table {
    margin: 30px 0px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }
  &__key {
    flex: 0 1 50%;
    font-family: "Lato";
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #1f2432;
    &:not(:first-child) {
      margin: 17px 0px 0px 0px;
    }
  }
  &__value {
    flex: 0 1 50%;
    text-align: right;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #1f2432;
  }
  &__line {
    margin: 29px 0px 0px 0px;
    width: 100%;
    height: 1px;
    background: #aeb0b6;
  }
  &__sum {
    margin: 10px 0px 0px 0px;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }
  &__key-sum {
    flex: 0 1 50%;
    font-family: "Lato";
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #1f2432;
  }
  &__value-sum {
    flex: 0 1 50%;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    text-align: right;
    letter-spacing: 0.005em;
    color: #1f2432;
  }
  &__button {
    width: 100%;
    height: 54px;
    border-radius: 4px;
    font-family: "Lato";
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #ffffff;
    &_create {
      margin: 32px 0px 0px 0px;
      background: #0069b4;
    }
    &_buy {
      margin: 12px 0px 0px 0px;
      background: #ffffff;
      border: 1px solid #0069b4;
      color: #0069b4;
    }
  }
}
</style>