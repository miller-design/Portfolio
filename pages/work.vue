<template>
  <div>
    <div>
      <HeroText header="Work" text="Checkout a selection of my recent projects" />
    </div>
    <div>
      <WorkList :Sections="Content"/>
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'
import WorkList from '~/components/WorkList.vue'

export default {
  computed: {

  },

  data() {
    return {
      Content: [
        {
          header: "Assemblage World",
          text: "Wordpress",
          link: "#",
          target: "_blank"
        },
        {
          header: "Title",
          text: "Vue.js",
          link: "#",
          target: "_blank"
        },
        {
          header: "HallX",
          text: "Elleventy",
          link: "#",
          target: "_blank"
        },
        {
          header: "Function Studio",
          text: "Static",
          link: "#",
          target: "_blank"
        },
        {
          header: "SteinbergHart",
          text: "Wordpress",
          link: "#",
          target: "_blank"
        },
        {
          header: "Correlation Ventures",
          text: "Wordpress",
          link: "#",
          target: "_blank"
        }
      ]
    }
  },

  layout: 'default',

  components: {
    HeroText,
    WorkList
  }
}
</script>
