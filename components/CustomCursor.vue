<template>
	<div :class="[ 'c-CustomCursor', { 'c-CustomCursor--hidden': hidden } ]">
		<div class="c-CustomCursor__point" ref="dot"></div>
	</div>
</template>

<script>
export default {

  data() {
    return {
			w: 0,
			h: 0,
			mouseX: 0,
			mouseY: 0,
			cursorX: 0,
			cursorY: 0,
			speed: 0.2,
			hover: false,
			hidden: false,
			cursorEl: null,
		}
  },

  methods: {

		setUp() {

			// widnow width and height values
			this.w = window.innerWidth / 2
			this.h = window.innerHeight / 2

			// mouse position values
			this.mouseX = this.w
			this.mouseY = this.h

			// cursor position values
			this.cursorX = this.w
			this.cursorY = this.h

			// cursor dom el
			this.cursorEl = this.$refs.dot
		},

		animateCursor() {

			let distX = this.mouseX - this.cursorX - (this.cursorEl.offsetWidth / 2)
			let distY = this.mouseY - this.cursorY - (this.cursorEl.offsetHeight / 2)
			let scaleVal = (this.hover) ? 4 : 1

			this.cursorX += (distX * this.speed)
			this.cursorY += (distY * this.speed)

			// this.cursorEl.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`
			this.cursorEl.style.top = this.cursorY + 'px'
			this.cursorEl.style.left = this.cursorX + 'px'
			this.cursorEl.style.transform = `scale(${scaleVal})`

		},

		cursorHover(event) {
			const target = event.target
			if(target.hasAttribute("data-cursor-hover")) {
				this.hover = true
			} else {
				this.hover = false
			}
		}
  },

  mounted() {

		this.setUp()
		this.animateCursor()

		window.addEventListener("mousemove", (e) => {
			this.mouseX = e.clientX
			this.mouseY = e.clientY
			requestAnimationFrame(this.animateCursor)
			this.cursorHover(e)
		})

		document.addEventListener("mouseenter", (e) => {
			this.hidden = false
		})

		document.addEventListener("mouseleave", (e) => {
			this.hidden = true
		})

  }
};
</script>

<style lang="scss" scoped>
.c-CustomCursor {
	transition: opacity 400ms ease;
}

.c-CustomCursor__point {
	top: 0;
	left: 0;
	position: fixed;
	width: 10px;
	height: 10px;
	pointer-events: none;
	user-select: none;
	border-radius: 100%;
	background: $c-orange;
	z-index: 2000;
	backface-visibility: hidden;
	mix-blend-mode: difference;
	transition: 600ms transform cubic-bezier(0.18,0.89,0.32,1.27);
}

.c-CustomCursor--hidden {
	opacity: 0;
}
</style>