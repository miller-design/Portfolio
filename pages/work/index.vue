<template>
  <div>
    <div>
      <HeroText :header="workData.title" :text="workData.subTitle" />
    </div>
    <div>
      <WorkList :Sections="workSingle"/>
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'
import WorkList from '~/components/WorkList.vue'

export default {
  async asyncData(context) {
    try {
      let [workRes] = await Promise.all([
        await context.app.$storyapi.get(`cdn/stories/work`, {
          // cv: context.cv,
          cv: + new Date(),
          version: 'published',
        })
      ])

			let [workStories] = await Promise.all([
        await context.app.$storyapi.get(`cdn/stories`, {
          // cv: context.cv,
          cv: + new Date(),
          version: 'published',
					starts_with: 'work/',
					is_startpage: false
        })
      ])

      return {
        workData: {
          title: workRes.data.story.content.hero_header,
          subTitle: workRes.data.story.content.hero_sub_header
        },
				workSingle: workStories.data.stories.map(story => {
					return {
						header: story.name,
						text: story.content.project_type,
						info: story.content.bio,
						build: story.content.built,
						design: story.content.designed,
						img: story.content.img,
						link: '/' + story.full_slug,
						target: '',
					}
				})
      }
    } catch(err) {
      console.log(err)
    }
  },

  layout: 'default',

  components: {
    HeroText,
    WorkList
  }
}
</script>
