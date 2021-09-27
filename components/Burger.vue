<template>
  <button class="[ c-Burger ] [ u-btn--reset ]" data-cursor-hover @click="emitMethod">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
import EventBus from '~/event-bus'

export default {
  methods: {
    emitMethod() {
      EventBus.$emit('open_menu')
    }
  }
}
</script>

<style lang="scss">
.c-Burger {
  display: inline-block;
  width: 30px;
  height: 18px;
	cursor: none;

	@include media(">=medium") {
		display: none;
	}

  @include hover {

		span:nth-of-type(1) {
			animation: strike_through 500ms ease forwards;
		}

		span:nth-of-type(2) {
			animation: strike_through 500ms ease forwards;
			animation-delay: 0.05s;
		}

		span:nth-of-type(3) {
			animation: strike_through 500ms ease forwards;
			animation-delay: 0.1s;
		}
	}

  span {
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 6px;
    background-color: $c-black;
		pointer-events: none;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@keyframes strike_through {

  0% {
    transform-origin: 100% 0;
    transform: scaleX(1);
  }

  50% {
    transform-origin: 100% 0;
    transform: scaleX(0);
  }

  51% {
    transform-origin: 0 100%;
    transform: scaleX(0);
  }

  100% {
    transform-origin: 0 100%;
    transform: scaleX(1);
  }
}
</style>