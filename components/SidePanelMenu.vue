<template>
  <div class="[ c-SidePanelMenu ]" :class="{ open: menuOpen }">
    <div>
      <div class="[ c-SidePanelMenu__menus ]">
				<div class="[ c-SidePanelMenu__primary ]">
					<NavBar :class="[ {'c-NavBar--no-switch' : hideSwitch} ]" />
				</div>
				<div class="[ c-SidePanelMenu__secondary ]">
					<SocialList :addTitle="false" :addPadding="false"/>
				</div>
      </div>
			<div class="[ c-SidePanelMenu__footer ]">
				<p>© {{year}} Copyright Jack Miller Design</p>
			</div>
    </div>
    <button class="[ c-SidePanelMenu__close ] [ u-btn--reset ]" @click="closeMenu" data-cursor-hover>
      <svg xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.628" viewBox="0 0 22.627 22.628">
        <g transform="translate(-1953.686 -29.685)">
          <line x2="30" transform="translate(1954.393 30.393) rotate(45)" fill="none" stroke="#000" stroke-width="2"/>
          <line x2="30" transform="translate(1954.393 51.606) rotate(-45)" fill="none" stroke="#000" stroke-width="2"/>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>

import EventBus from '~/event-bus'
import SocialList from '~/components/SocialList.vue'
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock'

export default {
  data() {
    return {
      menuOpen: false,
			year: new Date().getFullYear(),
			hideSwitch: true,
    }
  },

  mounted() {

    EventBus.$on('open_menu', () => {
      this.menuOpen = true
      disablePageScroll(this.$el)
    })

    EventBus.$on('close_menu', () => {
      this.menuOpen = false
      enablePageScroll(this.$el)
    })
  },

  methods: {

    closeMenu() {
      EventBus.$emit('close_menu')
      this.menuOpen = false
    }
  },

  watch: {
    $route(to, from){
      this.menuOpen = false
      // clearQueueScrollLocks added incase there is multiple
      // disables preventing the enable to be triggerd
      clearQueueScrollLocks()
      enablePageScroll(this.$el)
    }
  },

  components: {
		SocialList
  },

}
</script>

<style lang="scss">
.c-SidePanelMenu {
  position: fixed;
  z-index: $z-level-three;
  width: 100vw;
  background-color: $c-off-white;
  top: 0;
  right: 0;
  bottom: 0;
  padding: var(--site-margin);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
		600ms transform $standard-curve,
		600ms box-shadow $standard-curve;
  transform: translate(100%, 0);
  overflow-y: auto;

  @include media(">=small") {
    width: 65vw;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0);
  }

  @include media(">=large") {
    width: 55vw;
  }

  @include media(">=xlarge") {
    width: 50vw;
  }

  &.open {
    transform: translate(0, 0);

		 @include media(">=small") {
			box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
		}
  }

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
}

.c-SidePanelMenu__primary {
 	width: 100%;
	padding-bottom: var(--site-margin);
	margin-bottom: var(--site-margin);
	border-bottom: 2px solid $c-black;

	.c-NavBar {

		.c-NavBar__item {

			&:not(:first-child) {

				@include media("<medium") {
					margin-top: 10px;
				}
			}

			> a {

				@include H3;
				@include v-type(50px, 60px, 65px);
			}

			&.c-NavBar__switch {

				@include media("<medium") {
					margin-top: 20px;
				}
			}

			.nuxt-link-active::after {
				content: "";
				position: absolute;
				width: 3px;
				height: 50px;
				background-color: $c-orange;
				transform: translateY(-50%);
				top: 50%;
				left: -30px;
			}
		}
	}
}

.c-SidePanelMenu__footer {

	> p {
		margin-top: 0;
		margin-bottom: 0;

		@include P1("light");
	}
}

.c-SidePanelMenu__close {
  position: absolute;
  top: var(--site-margin);
  right: var(--site-margin);
  width: 20px;
  height: 20px;
  transform: rotate(0deg);
	transition: transform 500ms ease;
	cursor: none;

  svg {
    width: 100%;
    height: 100%;
		pointer-events: none;
  }

	@include hover {
		transform: rotate(90deg);
	}
}
</style>