<template>
  <header class="[ c-Header ]" :style="cssVars">
    <div class="[ c-Header__col left ]">
      <Logo />
    </div>
    <div class="[ c-Header__col right ]">
      <NavBar />
      <Burger />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    Logo,
		NavBar
  },

  data() {
    return {
      height: 0,
      oldTop: 0,
      barState: false,
    }
  },

  computed: {
    cssVars() {
      return {
        '--el-header-height': this.height + 'px',
      }
    }
  },

  methods: {
    toggleMode() {
      let scrollPosition = window.pageYOffset | document.body.scrollTop
      let shrinkOffset = 150

      if (scrollPosition > shrinkOffset) {
        this.$el.classList.add('shrink')
      } else {
        this.$el.classList.remove('shrink')
      }
    },

    // hideBar() {
    //   let top = document.scrollingElement.scrollTop

    //   if (this.oldTop > top) {
    //     this.barState = false
    //     console.log("↓")
    //   } else {
    //     this.barState = true
    //     console.log("↑")
    //   }

    //   this.oldTop = top
    // },

    getElHeight() {
			const height = this.$el.offsetHeight
			this.height = height
    }
  },

  mounted() {
    this.toggleMode()
    this.getElHeight()
    window.addEventListener('scroll', this.toggleMode)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleMode)
  }
}
</script>

<style lang="scss">
.c-Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $z-level-three;
  display: flex;
  align-items: center;
  justify-content: space-between;
	padding-left: var(--site-margin);
	padding-right: var(--site-margin);
  transition:
    400ms padding $standard-curve,
    400ms transform $standard-curve;

  @include v-spacing(padding-top, 20px, 50px);
  @include v-spacing(padding-bottom, 20px, 50px);

  &.shrink {

    @include media(">=medium") {

      @include v-spacing(padding-top, 10px, 20px);
      @include v-spacing(padding-bottom, 10px, 20px);
    }

    .c-Logo {

      @include media(">=medium") {
        width: 45px;
      }
    }
  }

  &.hide-bar {
    transform: translateY(calc(var(--el-header-height) * -1));
  }

  .c-NavBar {

    @include media("<medium") {
      display: none;
    }
  }
}

</style>