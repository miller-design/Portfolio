<template>
  <div>
    <CustomCursor/>
    <Header/>
    <PageTransition>
      <nuxt/>
    </PageTransition>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import CustomCursor from '~/components/CustomCursor.vue'
import PageTransition from '~/components/PageTransition.vue'

export default {

  components: {
    Header,
    Footer,
    CustomCursor,
    PageTransition
  },

  // mounted() {

  // },
}
</script>