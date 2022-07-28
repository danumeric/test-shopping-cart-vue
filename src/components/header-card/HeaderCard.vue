<template>
  <div class="header">
    <div class="header__whitespace"></div>
    <div class="header__mini-counter mini-counter">
      <img
        src="@/assets/icons/card-ico.svg"
        class="mini-counter__ico"
        alt="card-ico"
      />
      <div class="mini-counter__data">
        <h3 class="mini-counter__header">Ваша корзина</h3>
        <p class="mini-counter__goods">{{ getTotalQuantityRu }}</p>
        <p class="mini-counter__sum">{{ getTotalSum }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  name: "HeaderCard",
  computed: {
    ...mapGetters(["getTotalSum", "getTotalQuantityRu"]),
  },

};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 95px;
  &__whitespace {
    flex: 1 0;
  }
}
.mini-counter {
  display: flex;
  align-items: center;
  font-family: "Lato";
  font-weight: 400;

  &__ico {
    height: 25px;
    width: 28px;
    cursor: pointer;
  }
  &__data {
    margin: 0px 0px 0px 12px;
  }
  &__header {
    font-size: 14px;
    line-height: 1;
    color: #1f2432;
  }
  &__goods {
    font-size: 12px;
    line-height: 1.2;
    color: #797b86;
  }
  &__sum {
    font-size: 12px;
    line-height: 1.2;
    color: #1f2432;
  }
}
</style>