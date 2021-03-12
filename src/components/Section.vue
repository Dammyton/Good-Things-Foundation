<template>
  <div id="section">
    <b-container fluid>
      <b-row>
        <b-col  md="6" sm="12" lg="6" id="bg-image"> </b-col>
        <b-col md="6" sm="12" lg="6"
          class="d-flex align-items-center text-left bg-green text-white px-3"
          style="height: 30rem"
        >
          <div>
            <h2 class="heading h2 mb-4">We are social change charity, helping people to improve their lives through digital.</h2>
            <p class="paragraph md mb-4">
              we tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield.
            </p>
            <b-button pill class=" btn-outline-light bg-green"
              >Learn more about us</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Section",
  components: {},
};
</script>

<style scoped>
#bg-image {
  background: url("../assets/img2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 30rem;
}
.heading.h2{
    color: #fff;
    width: fit-content;
    font-size: 2rem;
}
p.paragraph.md {
    color: #fff;
    font-size: 1.57rem;
}
</style>