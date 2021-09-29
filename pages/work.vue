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
          img: "https://picsum.photos/1200/1800",
          header: "Assemblage World",
          text: "Wordpress",
          link: "#",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique sem, eget pellentesque turpis. Morbi pretium ultrices metus, non fermentum nulla porttitor vitae.<br/><br/>Pellentesque id consequat massa. Pellentesque eget enim rutrum, rhoncus purus nec, condimentum quam. Nulla odio nisl, lacinia quis metus vel, laoreet viverra nisi. Sed tempor neque risus, ornare rutrum ipsum congue nec. Curabitur consectetur finibus metus ac fringilla. Pellentesque tempus, sem quis pulvinar consequat, arcu nibh maximus sem, ac dapibus magna ex a sem.",
          build: true,
          design: false,
        },
        {
          img: "https://picsum.photos/1200/1800",
          header: "Title",
          text: "Vue.js",
          link: "#",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique sem, eget pellentesque turpis. Morbi pretium ultrices metus, non fermentum nulla porttitor vitae. Pellentesque id consequat massa. Pellentesque eget enim rutrum, rhoncus purus nec, condimentum quam. Nulla odio nisl, lacinia quis metus vel, laoreet viverra nisi. Sed tempor neque risus, ornare rutrum ipsum congue nec. Curabitur consectetur finibus metus ac fringilla. Pellentesque tempus, sem quis pulvinar consequat, arcu nibh maximus sem, ac dapibus magna ex a sem. In tristique consectetur orci, vel ornare sapien ullamcorper quis. Nullam sollicitudin facilisis est, nec pulvinar dolor dignissim ut.",
          build: true,
          design: false,
        },
        {
          img: "https://picsum.photos/1200/1800",
          header: "HallX",
          text: "Elleventy",
          link: "#",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique sem, eget pellentesque turpis. Morbi pretium ultrices metus, non fermentum nulla porttitor vitae. Pellentesque id consequat massa. Pellentesque eget enim rutrum, rhoncus purus nec, condimentum quam. Nulla odio nisl, lacinia quis metus vel, laoreet viverra nisi. Sed tempor neque risus, ornare rutrum ipsum congue nec. Curabitur consectetur finibus metus ac fringilla. Pellentesque tempus, sem quis pulvinar consequat, arcu nibh maximus sem, ac dapibus magna ex a sem. In tristique consectetur orci, vel ornare sapien ullamcorper quis. Nullam sollicitudin facilisis est, nec pulvinar dolor dignissim ut.",
          build: true,
          design: true,
        },
        {
          img: "https://picsum.photos/1200/1800",
          header: "Function Studio",
          text: "Static",
          link: "#",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique sem, eget pellentesque turpis. Morbi pretium ultrices metus, non fermentum nulla porttitor vitae. Pellentesque id consequat massa. Pellentesque eget enim rutrum, rhoncus purus nec, condimentum quam. Nulla odio nisl, lacinia quis metus vel, laoreet viverra nisi. Sed tempor neque risus, ornare rutrum ipsum congue nec. Curabitur consectetur finibus metus ac fringilla. Pellentesque tempus, sem quis pulvinar consequat, arcu nibh maximus sem, ac dapibus magna ex a sem. In tristique consectetur orci, vel ornare sapien ullamcorper quis. Nullam sollicitudin facilisis est, nec pulvinar dolor dignissim ut.",
          build: true,
          design: false,
        },
        {
          img: "https://picsum.photos/1200/1800",
          header: "Steinberg Hart",
          text: "Wordpress",
          link: "#",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique sem, eget pellentesque turpis. Morbi pretium ultrices metus, non fermentum nulla porttitor vitae. Pellentesque id consequat massa. Pellentesque eget enim rutrum, rhoncus purus nec, condimentum quam. Nulla odio nisl, lacinia quis metus vel, laoreet viverra nisi. Sed tempor neque risus, ornare rutrum ipsum congue nec. Curabitur consectetur finibus metus ac fringilla. Pellentesque tempus, sem quis pulvinar consequat, arcu nibh maximus sem, ac dapibus magna ex a sem. In tristique consectetur orci, vel ornare sapien ullamcorper quis. Nullam sollicitudin facilisis est, nec pulvinar dolor dignissim ut.",
          build: true,
          design: false,
        },
        {
          img: "https://picsum.photos/1200/1800",
          header: "Correlation Ventures",
          text: "Wordpress",
          link: "#",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tristique sem, eget pellentesque turpis. Morbi pretium ultrices metus, non fermentum nulla porttitor vitae. Pellentesque id consequat massa. Pellentesque eget enim rutrum, rhoncus purus nec, condimentum quam. Nulla odio nisl, lacinia quis metus vel, laoreet viverra nisi. Sed tempor neque risus, ornare rutrum ipsum congue nec. Curabitur consectetur finibus metus ac fringilla. Pellentesque tempus, sem quis pulvinar consequat, arcu nibh maximus sem, ac dapibus magna ex a sem. In tristique consectetur orci, vel ornare sapien ullamcorper quis. Nullam sollicitudin facilisis est, nec pulvinar dolor dignissim ut.",
          build: true,
          design: false,
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
