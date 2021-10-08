<template>
	<div>
		<div class="[ c-PageTransition ]">
			<div class="[ c-PageTransition__swipe ]" ref="overlay"></div>
			<!-- <div class="[ c-PageTransition__logo ]" ref="logo">
				<Logo />
			</div> -->
		</div>
		<transition
		mode="out-in"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
  	@enter="enter"
  	:css="false"
		>
			<router-view>
				<slot></slot>
			</router-view>
		</transition>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
    Logo
  },

	methods: {

		beforeLeave(el) {
			this.$gsap.fromTo(this.$refs.overlay, {scaleX: 0, transformOrigin:'left'}, {scaleX: 1, transformOrigin:'left', ease: "expo.out", duration: 0.6})
			// this.$gsap.fromTo(this.$refs.logo, {left:"40%", opacity: 0}, {left:"50%", opacity: 1, delay: 0.3, ease: "expo.out", duration: 0.6})
    },

		leave(el, done) {

			setTimeout(() => done(), 1000)
    },

		afterLeave(el) {
			window.scrollTo(0, 0)
		},

    enter(el, done) {

			this.$gsap.fromTo(this.$refs.overlay, {scaleX: 1, transformOrigin:'right'}, {scaleX: 0, transformOrigin:'right', delay: 0.3, ease: "expo.out", duration: 0.6, onComplete: done})
			// this.$gsap.fromTo(this.$refs.logo, {left:"50%", opacity: 1}, {left:"60%", opacity: 0, ease: "expo.out", duration: 0.6})
    }
	},

	mounted() {

	}
}
</script>

<style lang="scss">
.c-PageTransition {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: $z-level-three;
	pointer-events: none;
}

.c-PageTransition__swipe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: $c-orange;
	clip-path: inset(0 0 0 0);
	transition: width 800ms $standard-curve;
	transform: scaleX(0);
	transform-origin: right;
}

// .c-PageTransition__logo {
// 	position: fixed;
// 	top: 50%;
// 	left: 40%;
// 	transform: translate(-50%, -50%);
// 	opacity: 0;
// }

// html.dark-theme {

// 	.c-HeroText__header,
// 	.c-HeroText__text {
// 		color: $c-white;
// 	}
// }
</style>
