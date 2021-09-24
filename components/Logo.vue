<template>
  <nuxt-link
    to="/"
    class="[ c-Logo ]" data-cursor-hover>
		<svg xmlns="http://www.w3.org/2000/svg" width="69.778" height="67.633" viewBox="0 0 69.778 67.633">
			<g id="Group_5" data-name="Group 5" transform="translate(-203.499 -69.5)">
				<path id="Subtraction_2" data-name="Subtraction 2" d="M.02,67.633h0L0,67.567V55.511a17.945,17.945,0,0,0,6.3-4.48,16.771,16.771,0,0,0,3.14-5.208,17.366,17.366,0,0,0,1.18-6.457l0-21.767L0,27.221V11.757L12.966,0h9.1V39.106a25.6,25.6,0,0,1-.737,6.884,29.942,29.942,0,0,1-3.322,8.257A28.117,28.117,0,0,1,11.2,62.066,31.692,31.692,0,0,1,.02,67.633Z" transform="translate(203.499 69.5)" :fill="fill"/>
				<path id="Subtraction_4" data-name="Subtraction 4" d="M45.336,67.557H33.879V15.889L17.087,25.622,0,14.554V.953L.24.542l17.168,11.12L37.529,0h7.808Z" transform="translate(227.94 69.5)" :fill="fill"/>
			</g>
		</svg>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "#ff5900"
    }
  }
}
</script>

<style lang="scss">
.c-Logo {
  display: block;
  width: 60px;
  pointer-events: auto;
  transition:
    width 200ms linear,
    height 200ms linear;

  svg {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}
</style>
