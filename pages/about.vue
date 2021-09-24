<template>
  <div>
    <div>
      <HeroText header="About" text="I’m a creative front end developer / designer living in Leicestershire." />
    </div>
    <div>
      <TimeLine :Sections="Content"/>
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'
import TimeLine from '~/components/TimeLine.vue'

export default {

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
  computed: {

  },

  layout: 'default',

  components: {
    HeroText,
    TimeLine
  }
}
</script>
