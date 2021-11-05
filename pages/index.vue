<template>
  <div>
    <div>
      <HeroText v-for="(data, i) in HeroData" :key="i" :header="data.title" :text="data.subTitle" />
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
          cv: context.cv,
          version: 'draft',
        })
      ])

      return {
        HeroData: homeRes.data.story.content.body.map(resData => {
          return {
            title: resData.hero_header,
            subTitle: resData.hero_sub_header
          }
        })
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