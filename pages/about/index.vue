<template>
  <div>
    <div>
      <HeroText :header="HeroData.title" :text="HeroData.subTitle" />
    </div>
    <div>
      <TimeLine :Sections="TimelineData"/>
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'
import TimeLine from '~/components/TimeLine.vue'

export default {

  async asyncData(context) {

    try {
      let [aboutRes] = await Promise.all([
        await context.app.$storyapi.get(`cdn/stories/about`, {
          // cv: context.cv,
          cv: + new Date(),
          version: 'published',
        })
      ])

      return {
        HeroData: {
          title: aboutRes.data.story.content.hero_header,
          subTitle: aboutRes.data.story.content.hero_sub_header
        },

        TimelineData: aboutRes.data.story.content.timeline_section.map(resData => {
          return {
            header: resData.title,
            verticalList: resData.switch,
            list: resData.text_blocks.map(text => {
              return text.content
            })
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
    HeroText,
    TimeLine
  }
}
</script>
