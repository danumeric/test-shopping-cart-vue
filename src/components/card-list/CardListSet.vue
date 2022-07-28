<template>
  <div class="set">
    <input
      v-model="checkInstallation"
      class="set__checkbox"
      type="checkbox"
      id="horns"
      name="horns"
    />
    <div class="set__logo">
      <div class="set__ico"></div>
    </div>
    <div class="set__text">
      <h3 class="set__capture">Установка</h3>
      <p class="set__descr">
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardListSet",
  data() {
    return {
      setChecked: false,
    };
  },
  computed: {
    checkInstallation: {
      get() {
        return this.$store.getters.getIsInstallation;
      },
      set(value) {
        this.$store.commit("setIsInstallation", value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.set {
  height: 102px;
  display: flex;
  align-items: center;
  margin: 44px 0px 0px 0px;
  background: #f6f8fa;
  border-radius: 5px;
  &__checkbox {
    width: 20px;
    height: 20px;
    margin: 0px 0px 0px 25px;
  }
  &__logo {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px 20px;
    background: #ffffff;
    border-radius: 4px;
  }
  &__ico {
    width: 30px;
    height: 30px;
    background: url(@/assets/icons/set-ico.svg) center no-repeat;
  }
  &__text {
    margin: 0px 0px 0px 20px;
    font-family: "Lato";
  }
  &__capture {
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1f2432;
  }
  &__descr {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797b86;
  }
}
</style>