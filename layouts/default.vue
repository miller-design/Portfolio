<template>
  <div>
    <CustomCursor/>
    <Header/>
      <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import CustomCursor from '~/components/CustomCursor.vue'

export default {

  components: {
    Header,
    Footer,
    CustomCursor
  },

  // mounted() {

  // },
}
</script>