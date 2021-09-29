<template>
  <footer class="[ c-Footer ]">
		<Overlay />
		<SidePanelMenu />
		<WorkPanel />
		<div class="[ c-Footer__col ]">
    	<NavBar :class="[ {'c-NavBar--no-switch' : hideSwitch} ]" :addTerms="true" />
		</div>
		<div class="[ c-Footer__col ]">
			<p class="[ c-Footer__copyrite ]">© {{year}} Copyright Jack Miller Design</p>
		</div>
  </footer>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import SidePanelMenu from '~/components/SidePanelMenu.vue'
import WorkPanel from '~/components/WorkPanel.vue'
import Overlay from '~/components/Overlay.vue'

export default {

	data() {
    return {
      year: new Date().getFullYear(),
    }
  },

	props: {
    hideSwitch: {
      type: Boolean,
      default: true
    }
  },

  components: {
		NavBar,
		SidePanelMenu,
		WorkPanel,
		Overlay
  },

	mounted() {

	}
}
</script>

<style lang="scss">
.c-Footer {
	width: 100%;
	position: relative;
	display: flex;
  align-items: center;
  justify-content: space-between;
	padding-left: var(--site-margin);
	padding-right: var(--site-margin);
	flex-wrap: wrap;

	@include v-spacing(padding-top, 125px, 250px);
	@include v-spacing(padding-bottom, 20px, 40px);
}

.c-Footer__col {

	@include media("<medium") {
		width: 100%;
	}
}

.c-Footer__copyrite {
	width: 100%;
	transition: 800ms color 400ms $standard-curve;

	@include P1;
}

html.dark-theme {

	.c-Footer__copyrite {
		color: $c-white;
	}
}
</style>