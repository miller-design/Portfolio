<template>
  <div class="[ c-Overlay ]" :class="{'is-active' : active}" @click="panelClick" ></div>
</template>

<script>
import EventBus from '~/event-bus'

export default {

	data() {
    return {
      active: false,
    }
  },

  mounted() {

    EventBus.$on('open_panel', () => {
      this.active = true
    })

    EventBus.$on('close_panel', () => {
      this.active = false
    })
  },

  methods: {

    panelClick() {
      EventBus.$emit('close_panel')
    },
  },
}
</script>

<style lang="scss">
.c-Overlay {
  position: fixed;
	top: 0;
  left: 0;
  z-index: $z-level-three;
  width: 100%;
	height: 100%;
  background-color: $c-off-white;
	opacity: 0;
	transition: 400ms opacity $standard-curve;
	pointer-events: none;

	.dark-theme & {
		background-color: $c-dark-grey;
	}

	&.is-active {
		opacity: 0.8;
		pointer-events: auto;
	}
}
</style>