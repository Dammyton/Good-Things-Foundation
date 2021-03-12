<template>
    <div>
      <HeroBanner/>
      <Section/>
      <HelpYou/>
      <Footer/>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue'
import Section from '@/components/Section.vue'
import HelpYou from '@/components/HelpYou.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
     HeroBanner, Section, HelpYou, Footer
  }
}
</script>
