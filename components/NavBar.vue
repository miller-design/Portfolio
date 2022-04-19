<template>
  <nav class="[ c-NavBar ]">
    <ul class="[ c-NavBar__items ]">
      <li class="[ c-NavBar__item ]">
        <nuxt-link to="/work/" data-cursor-hover>Work</nuxt-link>
      </li>
			<li class="[ c-NavBar__item ]">
        <nuxt-link to="/about/" data-cursor-hover>About</nuxt-link>
      </li>
			<li class="[ c-NavBar__item ]">
        <nuxt-link to="/contact/" data-cursor-hover>Contact</nuxt-link>
      </li>
      <li class="[ c-NavBar__item ]" v-if="addTerms">
        <nuxt-link to="/terms-and-conditions/" data-cursor-hover>T&C's</nuxt-link>
      </li>
      <li class="[ c-NavBar__item c-NavBar__switch ]">
        <DarkModeSwitch />
      </li>
    </ul>
  </nav>
</template>

<script>
import DarkModeSwitch from '~/components/DarkModeSwitch.vue'

export default {
  props: {
    addTerms: {
      type: Boolean,
      default: false
    }
  },

   components: {
    DarkModeSwitch
  },
}
</script>

<style lang="scss">
.c-NavBar {
  width: 100%;
  position: relative;
}

.c-NavBar__items {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}

.c-NavBar__item {

  @include media("<medium") {
    width: 100%;
  }

  &:not(:first-child) {

    @include media("<medium") {
      margin-top: 15px;
    }

    @include media(">=medium") {
      margin-left: 55px;
    }
  }

  > a {
    position: relative;
    text-decoration: none;
    color: $c-black;
    transition:
      400ms opacity $standard-curve,
      800ms color 400ms $standard-curve;

    @include P1;

    &::after {
      content: "";
      width: 100%;
      height: 2 px;
      position: absolute;
      bottom: -1px;
      left: 0;
      background-color: unset;
      transition: 400ms background-color $standard-curve;
    }

    &.nuxt-link-active::after {
      background-color: $c-orange;
    }
  }
}

.c-NavBar--no-switch {

  .c-NavBar__switch {
    display: none;
  }
}

html.dark-theme {

	.c-NavBar__item > a {
		color: $c-white;
	}
}
</style>