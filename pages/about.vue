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
          cv: context.cv,
          version: 'draft',
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

  data() {
    return {
      Content: [
        {
          verticalList: false,
          header: "Experienced in:",
          list: [
            {
              light: "Front-end Development,<br/>Web design,<br/>Logo Design,<br/>Branding",
            },
            {
              light: "JavaScript,<br/>CSS/SCSS,<br/>HTML<br/>PHP,<br/>GSAP",
            },
            {
              light: "Photoshop,<br/>Illustrator,<br/>XD,<br/>Indesign",
            },
            {
              light: "Wordpress,<br/>Shopify,<br/>Storyblock",
            }
          ]
        },
        {
          verticalList: true,
          header: "Experience:",
          list: [
            {
              orange: "Web Developer",
              bold: "@ SIX",
              light: "2019 – NOW"
            },
            {
              orange: "Web Designer / Developer",
              bold: "@ Pod Digital",
              light: "2017 – 2019"
            }
          ]
        },
        {
          verticalList: true,
          header: "Education:",
          list: [
            {
              orange: "BA Graphic Design (Hons): First class",
              bold: "@ Coventry University",
              light: "2013 - 2017"
            },
            {
              orange: "Foundation in Art and Design & Visual communication",
              bold: "@ De Montfort University",
              light: "2012 – 2013"
            }
          ]
        },
        {
          verticalList: false,
          header: "Hobbies:",
          list: [
            {
              light: "Lacrosse 🥍,<br/>Mountain Biking 🚵‍♂️"
            }
          ]
        }
      ]
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
