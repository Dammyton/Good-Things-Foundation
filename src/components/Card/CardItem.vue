<template>
  <div>
    <b-row class="mt-4">
      <b-col
        md="3"
        class="mb-3"
        v-for="item in getProgrammes"
        :key="item.id"
        :href="item.link"
        >

        <b-card
          bg-variant="white"
          text-variant="dark"
          class="text-center"
        >
        <h5 class="font-weight-bold">{{ item.title }}</h5>
          <b-card-text
            >{{item.text}} </b-card-text
          >
          <b-button pill class="text-danger bg-white border-dark">Read more</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CardItem",
  created() {
    this.$store.dispatch("programmes");
  },
  computed: {
    ...mapGetters(["getProgrammes"]),
  },
};
</script>

