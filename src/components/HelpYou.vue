<template>
  <div id="section">
    <b-container fluid class="bg-secondary p-5 text-left">
      <b-row>
        <b-col> 
            <h2>How can we help you?</h2>
            <h6>Let us know who you are and what you're looking for, and we'll help get you to the right place.</h6>
            <p class="paragraph md mt-4 py-3 text-center">
                I am
                <b-form-select v-model="selected" :options="options"></b-form-select>
                and I want
                <b-form-select v-model="selected_" :options="options_"></b-form-select>
            <b-button pill class="text-white bg-danger">Start now</b-button>

            </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelpYou",
  components: {},
  data(){
      return{
        selected: 'individual',
        selected_: 'learn',
        options: [
          { value: 'individual' , text: 'an individual' },
          { value: 'ngo', text: 'a NGO' },
        ],
        options_: [
          { value: 'learn' , text: 'want to learn' },
          { value: 'help', text: 'want to help' },
        ]
    }
  }
};
</script>

<style scoped>
.bg-secondary{
    background: rgb(212, 211, 211) !important;
}
p.paragraph.md {
    background: #fff;
    padding: 0.5rem;
    color: rgb(49, 47, 47);
    font-size: 1rem;
}
.custom-select {
    display: inline-block;
    width: min-content !important;
    height: auto  !important;
    padding: 0 1.3rem 0 0rem!important;
    font-size: 1rem;
    color: #4b7b92;
    border: none  !important;
    border-radius: 0.25rem;
}
</style>