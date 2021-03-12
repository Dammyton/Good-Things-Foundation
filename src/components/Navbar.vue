<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand to="/"
        >GoodThings Foundation</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-for="item in getMenuItems"
            :key="item.id"
            :href="item.link"
            >{{ item.item }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  created() {
    this.$store.dispatch("menuItems");
  },
  computed: {
    ...mapGetters(["getMenuItems"]),
  },
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  color: rgba(44, 42, 42, 0.5) !important;
}
.navbar-light .navbar-nav .nav-link:active {
    color: #5a5454  !important;
}
</style>