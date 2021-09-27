<template>
  <div>
    <div>
      <HeroText header="Got a new project idea? Want help making your idea come to life? Then drop me a line & we can discuss it over coffee. ☕"/>
    </div>
    <div class="[ contact-wrapper ]">
      <div class="[ l-ContactList ]">
        <div class="[ l-ContactList__item ]">
          <p class="[ t-header-40-80 ]">Email:</p>
        </div>
        <div class="[ l-ContactList__item ]">
          <p class="[ t-header-30-60 ][ u-faded-text ]"><a href="mailto:contact@jackmiller.design?subject=Dropping You a Line"  class="[ u-text-link ]" data-cursor-hover>contact@jackmiller.design</a></p>
        </div>
      </div>
      <div>
        <SocialList />
      </div>
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'
import SocialList from '~/components/SocialList.vue'

export default {
  computed: {

  },

  layout: 'default',

  components: {
    HeroText,
    SocialList
  }
}
</script>

<style lang="scss">
.contact-wrapper {

  @include v-spacing(padding-top, 60px, 110px);

  .l-ContactList:last-of-type {
    margin-bottom: 0;
  }
}
</style>
