<template >
  <div class="slider">
    <div class="slider__header">
      <div class="slider__capture">Просмотренные товары</div>
      <div class="slider__control">
        <div @click="goBack" class="slider__button">
          <img
            src="@/assets/icons/left-ico.svg"
            class="slider__ico-left"
            alt="card-ico"
          />
        </div>
        <span class="slider__current-slide">{{ currentSlide + " " }} </span>
        <span class="slider__total-slides">
          / {{ +Math.ceil(getViewedGoods.length / 4) }}
        </span>

        <div @click="goForward" class="slider__button">
          <img
            src="@/assets/icons/left-ico.svg"
            class="slider__ico-right"
            alt="card-ico"
          />
        </div>
      </div>
    </div>

    <agile
      ref="carousel"
      :slidesToShow="4"
      :infinite="true"
      :navButtons="false"
      :swipeDistance="10"
      @after-change="updateDigits($event)"
      class="slider__agile"
    >
      <div
        class="slider__item"
        v-for="viewedItem in getViewedGoods"
        :key="viewedItem.id"
      >
        <SliderViewsItem :viewedItem="viewedItem" />
      </div>
    </agile>
  </div>
</template>
<script>
import SliderViewsItem from "@/components/slider-views/SliderViewsItem.vue";
import { mapGetters } from "vuex";
import { VueAgile } from "vue-agile";

export default {
  data() {
    return {
      currentSlide: 1,
    };
  },
  components: { agile: VueAgile, SliderViewsItem },
  computed: {
    ...mapGetters(["getViewedGoods"]),
  },

  methods: {
    updateDigits() {
      let currSlide = this.$refs.carousel.getCurrentSlide();
      this.currentSlide = Math.ceil((currSlide + 1) / 4);
    },
    goForward() {
      let nextSlide = this.$refs.carousel.getCurrentSlide() + 4;
      if (nextSlide === this.getViewedGoods.length) {
        nextSlide = 0;
      } else if (this.getViewedGoods.length - nextSlide < 4) {
        nextSlide = this.getViewedGoods.length - 4;
      }
      this.$refs.carousel.goTo(nextSlide);
      this.currentSlide = Math.ceil((nextSlide + 1) / 4);
    },
    goBack() {
      let prevSlide = this.$refs.carousel.getCurrentSlide() - 4;
      if (prevSlide === -4) {
        prevSlide = this.getViewedGoods.length - 4;
      } else if (prevSlide < 0) {
        prevSlide = 0;
      }
      this.$refs.carousel.goTo(prevSlide);
      this.currentSlide = Math.ceil((prevSlide + 1) / 4);
    },
  },
};
</script>
<style lang="scss" scoped>
.slider {
  width: 1280px;
  &__header {
    display: flex;
  }
  &__capture {
    flex: 1 0;
    font-family: "Lato";
    font-weight: 600;
    font-size: 30px;
    line-height: 120.52%;
    color: #1f2432;
  }
  &__control {
    display: flex;
    align-items: baseline;
    margin: 0px 15px 0px 0px;
  }
  &__current-slide {
    margin: 0px 0px 0px 20px;
    font-family: "Lato";
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #212121;
  }
  &__total-slides {
    margin: 0px 15px 0px 4px;
    font-family: "Lato";
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #797b86;
  }
  &__button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #90a2b5;
    border-radius: 50%;
    cursor: pointer;
  }
  &__ico-right {
    transform: rotate(180deg);
  }
  &__agile {
    margin: 60px 0px 0px 0px;
  }
}
</style>