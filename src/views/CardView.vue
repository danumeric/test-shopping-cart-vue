<template>
  <div class="wrapper">
    <nav class="navigation"></nav>
    <div class="home">
      <HeaderCard />
      <RouteWay class="home__route" />
      <div class="home__card-frame">
        <div class="home__card-list">
          <CardList />
        </div>
        <div class="home__total">
          <TotalCheckout />
        </div>
      </div>
      <div class="home__slider">
        <SliderViews />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "@/components/header-card/HeaderCard.vue";
import RouteWay from "@/components/route-way/RouteWay.vue";
import CardList from "@/components/card-list/CardList.vue";
import SliderViews from "@/components/slider-views/SliderViews.vue";
import TotalCheckout from "@/components/total-checkout/TotalCheckout.vue";

export default {
  name: "CardView",
  components: {
    HeaderCard,
    RouteWay,
    CardList,
    SliderViews,
    TotalCheckout,
  },
};
</script>
.<style lang="scss" scoped>
.wrapper {
  width: 1280px;
  margin: 0 auto 80px auto;
  background: #ffffff;
}
.navigation {
  height: 45px;
}
.home {
  &__slider {
    margin: 96px 0px 0px 0px;
  }
  &__card-frame {
    display: flex;
  }
  &__card-list {
    flex: 1 0;
  }
  &__total {
    margin: 70px 0px 0px 0px;
  }
  &__route {
    margin: 31px 0px 0px 0px;
  }
}
</style>