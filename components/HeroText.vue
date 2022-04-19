<template>
	<div :style="cssVars" class="[ c-HeroText ]" :class="{'c-HeroText--shallow': shallowHeight}">
		<div class="[ c-HeroText__inner ]">
			<div class="[ c-HeroText__wrapper ]" ref="textBlock">
				<h1 class="[ c-HeroText__header ][ entrance-animation-in-up-delay-700 ]" v-html="header">{{header}}</h1>
				<p class="[ c-HeroText__text ][ entrance-animation-in-up-delay-1200 ]" v-html="text" v-if="text">{{text}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	data() {
    return {
      height: 0,
			shallowHeight: false,
    }
  },

	computed: {
    cssVars() {
      return {
        '--el-offset-height': this.height + 'px',
      }
    }
  },

  props: {
		header: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },

  methods: {
    getElHeight() {
			const height = this.$refs.textBlock.offsetHeight
			const windowMinOffset = window.innerHeight / 2

			if(height < windowMinOffset) {
				this.height = (height / 2)
				this.shallowHeight = false
			} else {
				this.height = 0
				this.shallowHeight = true
			}
    }
  },

	mounted() {
		// update css var with elements height
		this.getElHeight()
	}
}
</script>

<style lang="scss">
.c-HeroText {
	width: 100vw;
	min-height: 100vh;
	position: relative;

	@include v-spacing(padding-bottom, 60px, 110px);
}

.c-HeroText__inner {
	padding-top: calc(50vh - var(--el-offset-height));

	@include grid-container;
}

.c-HeroText__wrapper {
	width: 100%;
	position: relative;

	@include grid-col(1, -1);

	@include media(">=medium") {

		@include grid-col(2, 12);
	}

	@include media(">=xlarge") {

		@include grid-col(2, 11);
	}
}

.c-HeroText__header {
	width: 100%;
	margin: 0;
	text-transform: uppercase;
	transition:
		800ms color 400ms $standard-curve,
		800ms stroke 400ms $standard-curve;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: $c-black;

	@include H1;
}

.c-HeroText__text {
	width: 100%;
	margin: 0;
	transition: 800ms color 400ms $standard-curve;

	@include v-spacing(padding-top, 10px, 20px);
	@include H3;

	@include media(">=small") {
		padding-right: 10vw;
	}

	@include media(">=medium") {
		padding-right: 20vw;
	}

	@include media(">=xlarge") {
		padding-right: 30vw;
	}
}

.c-HeroText--shallow {

	.c-HeroText__inner {
		padding-top: 25vh;
	}
}

html.dark-theme {

	.c-HeroText__header {
-webkit-text-stroke-color: $c-white;
	}

	.c-HeroText__header,
	.c-HeroText__text {
		color: $c-white;
	}
}
</style>
