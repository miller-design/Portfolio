<template>
  <div>
    <div>
      <HeroText :header="contactData.title" :text="contactData.subTitle" />
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

  async asyncData(context) {

    try {
      let [contactRes] = await Promise.all([
        await context.app.$storyapi.get(`cdn/stories/contact`, {
          // cv: context.cv,
          cv: + new Date(),
          version: 'published',
        })
      ])

      return {
        contactData: {
          title: contactRes.data.story.content.hero_header,
          subTitle: contactRes.data.story.content.hero_sub_header
        }
      }
    } catch(err) {
      console.log(err)
    }
  },

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
