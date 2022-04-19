<template>
  <div>
    <div>
      <HeroText :header="HeroData.title" :text="HeroData.subTitle" />
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'

export default {

  async asyncData(context) {

    try {
      let [homeRes] = await Promise.all([
        await context.app.$storyapi.get(`cdn/stories/home`, {
          // cv: context.cv,
          cv: + new Date(),
          version: 'published',
        })
      ])

      return {
        HeroData: {
          title: homeRes.data.story.content.hero_header,
          subTitle: homeRes.data.story.content.hero_sub_header
        }
      }
    } catch(err) {
      console.log(err)
    }
  },

  mounted() {

  },

  layout: 'default',

  components: {
    HeroText
  }
}
</script>

<style lang="scss">

</style>