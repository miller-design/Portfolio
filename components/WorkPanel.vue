<template>
  <div class="[ c-WorkPanel ]" :class="{ open: panelOpen }">
    <div ref="scrollArea">
      <div class="[ c-WorkPanel__data ]">
				<div class="[ c-WorkPanel__header ]">
					<h2 class="[ c-WorkPanel__title ]"><span ref="title"></span><span>Type: <span ref="subtitle"></span></span></h2>
					<p class="[ c-WorkPanel__tags ]" ref="tags"><span class="design">Designed</span> + <span class="develop">Developed</span></p>
				</div>
				<div class="[ c-WorkPanel__img ]">
					<img alt="project thumbnail" src="https://picsum.photos/1200/1800" ref="img">
				</div>
				<p class="[ c-WorkPanel__text ]" ref="text"></p>
				<div class="[ c-WorkPanel__link-wrap ]">
					<a href="" target="_blank" class="[ c-WorkPanel__link ]" ref="link" data-cursor-hover>View Live Site</a>
      	</div>
			</div>
    </div>
    <button class="[ c-WorkPanel__close ] [ u-btn--reset ]" @click="closePanel" data-cursor-hover>
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
      panelOpen: false,
    }
  },

  mounted() {

    EventBus.$on('open_panel', (data) => {
      this.panelOpen = true
      disablePageScroll(this.$el)
			this.addDataToPanel(data)
    })

    EventBus.$on('close_panel', () => {
      this.panelOpen = false
      enablePageScroll(this.$el)

			if(this.$refs.scrollArea.scrollTop > 0) {

				setTimeout(() => {
					this.$refs.scrollArea.scrollTop = 0
				}, 600)
			}
    })
  },

  methods: {

    closePanel() {
      EventBus.$emit('close_panel')
      this.panelOpen = false
    },

		addDataToPanel(data) {
			const img = data.img
			const header = data.header
			const text = data.text
			const link = data.link
			const info = data.info
			const designed = data.design
			const developed = data.build
			let tagType

			if(designed && !developed) {
				tagType = 'Designed'
			} else if(developed && !designed) {
				tagType = 'Developed'
			} else if(developed && designed) {
				tagType = 'Designed & Developed'
			}

			if(img) {
				this.$refs.img.src = img
			}

			this.$refs.title.innerHTML = header
			this.$refs.subtitle.innerHTML = text
			this.$refs.text.innerHTML = info
			this.$refs.link.href = link
			this.$refs.tags.innerHTML = tagType
		}
  },

  watch: {
    $route(to, from){
      this.panelOpen = false
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
.c-WorkPanel {
  position: fixed;
  z-index: $z-level-three;
  width: 100vw;
	height: 100vh;
  background-color: $c-off-white;
  top: 0;
  right: 0;
  bottom: 0;
  transition:
		600ms transform $standard-curve,
		600ms box-shadow $standard-curve,
		800ms background-color 400ms $standard-curve;
  transform: translate(100%, 0);

  @include media(">=small") {
    width: 75vw;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0);
  }

  @include media(">=large") {
    width: 55vw;
  }

  @include media(">=xlarge") {
    width: 50vw;
  }

	.dark-theme & {
		background-color: $c-black;
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
		padding-top: var(--site-margin);
		padding-right: var(--site-margin);
		padding-left: var(--site-margin);
		padding-bottom: var(--site-margin);
		overflow-y: auto;
	}
}

.c-WorkPanel__data {

	@include grid-container(true, 6);

	.c-WorkPanel__header,
	.c-WorkPanel__img,
	.c-WorkPanel__text,
	.c-WorkPanel__link-wrap,
	.c-WorkPanel__tags {
		padding-right: 40px;

		@include grid-col(1, -1);
	}

	.c-WorkPanel__header {
		display: flex;
    flex-direction: column;
		position: relative;

		@include v-spacing(padding-bottom, 20px, 45px);
		@include v-spacing(margin-bottom, 40px, 65px);

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -1px;
			width: calc(100% - 40px);
			height: 1px;
			background-color: $c-black;
			transition: 800ms background-color 400ms $standard-curve;

			.dark-theme & {
				background-color: $c-white;
			}
		}
	}

	.c-WorkPanel__title {
		text-transform: uppercase;
		margin-top: -3px;
		margin-bottom: 18px;
		transition: 800ms color 400ms $standard-curve;

		@include H3;

		.dark-theme & {
			color: $c-white;
		}

		> span {
			float: left;
			margin-bottom: 10px;
		}
		> span + span {
			clear: left;
			text-transform: capitalize;
			margin-bottom: 0;

			@include H4("light");
		}
	}

	.c-WorkPanel__tags {
		color: $c-orange;
		margin-top: 0;
		margin-bottom: 0;

		@include P1;
		@include v-type(15px, 22px, 22px);

		&.design .develop {
			text-decoration: line-through;
		}

		&.developed .design {
			text-decoration: line-through;
		}
	}

	.c-WorkPanel__text {
		padding-right: 8vw;
		transition: 800ms color 400ms $standard-curve;

		@include P1("light");

		.dark-theme & {
			color: $c-white;
		}
	}

	.c-WorkPanel__link {
		color: $c-orange;
		text-decoration: none;

		@include P1;
		@include v-type(15px, 22px, 22px);
	}
}

// close trigger
.c-WorkPanel__close {

  @include close-trigger;
}
</style>