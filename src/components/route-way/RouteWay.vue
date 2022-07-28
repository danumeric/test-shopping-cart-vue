<template>
  <div class="route-way">
    <span class="route-way__text">Главная</span>
    <div class="route-way__triangle"></div>
    <span class="route-way__text route-way__text_current">Корзина</span>
  </div>
</template>

<script>
export default {
  name: "RouteWay",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
.route-way {
  &__text {
    font-family: "Lato";
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #33374e;
    &_current {
      margin: 0px 0px 0px 10px;
      color: #797b86;
    }
  }
  &__triangle {
    display: inline-block;
    margin: 0px 0px 0px 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 5px;
    border-color: transparent transparent transparent #041273;
  }
}
</style>