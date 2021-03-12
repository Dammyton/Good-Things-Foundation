<template>
  <div id="section">
    <b-container fluid class="bg-teal p-5 text-left text-white">
      <b-row>
        <b-col>
          <h2>What do we do?</h2>
          <h6>
            You might not have heard of us, but we are the people behind the
            following impactul programmes.
          </h6>

          <!-- import each card item -->
            <CardItem />
            
          <div class="mt-5 text-center">
            <b-button pill class="text-danger bg-white"
              ><strong>More about what we do</strong>
            </b-button>
          </div>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardItem from "@/components/Card/CardItem.vue";

export default {
  name: "Footer",
  components: { CardItem },
};
</script>
