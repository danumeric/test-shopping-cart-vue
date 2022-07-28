<template>
  <div class="card-list">
    <div class="card-list__header">
      <h1 class="card-list__capture">Ваша корзина</h1>
      <span class="card-list__minicounter">{{ getTotalQuantityRu }}</span>
      <span @click="clearCard" class="card-list__clearall"
        >Очистить корзину</span
      >
    </div>
    <div class="card-list__goods">
      <template v-for="item in getGoodsInCard" :key="item.id">
        <CardListItem :item="item" />
      </template>
      <div v-if="getGoodsInCard.length === 0" class="card-list__empty">
        Ваша корзина пока что пуста
      </div>
    </div>
    <CardListSet />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import CardListItem from "@/components/card-list/CardListItem.vue";
import CardListSet from "@/components/card-list/CardListSet.vue";

export default {
  name: "CardList",
  components: { CardListItem, CardListSet },

  computed: {
    ...mapGetters(["getGoodsInCard", "getTotalQuantityRu"]),
  },
  methods: {
    ...mapMutations(["clearCard"]),
  },
};
</script>

<style lang="scss" scoped>
.card-list {
  width: 800px;

  &__header {
    display: flex;
    align-items: baseline;
  }
  &__capture {
    display: inline-block;
    font-family: "Lato";
    font-weight: 700;
    font-size: 44px;
    line-height: 120.52%;
    color: #1f2432;
  }
  &__minicounter {
    flex: 1 0;
    margin: 0px 0px 0px 22px;
    font-family: "Lato";
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;
    color: #797b86;
  }
  &__clearall {
    cursor: pointer;
    font-family: "Lato";
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    text-decoration-line: underline;
    color: #797b86;
  }
  &__empty {
    margin: 30px 0px 0px 0px;
    font-family: "Lato";
    font-weight: 700;
    font-size: 34px;
    line-height: 120.52%;
    color: #797b86;
  }
}
</style>