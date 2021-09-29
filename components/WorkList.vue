<template>
	<div class="[ c-WorkList ]">
		<ul class="[ c-WorkList__list ]">
			<li class="[ c-WorkList__item ]" v-for="(item, i) in Sections" :key="i" @click="emitMethod" :data-index="i" data-cursor-hover>
				<h3 class="[ c-WorkList__header ]" v-if="item.header">
					<a :href="item.link" :target="item.target">
						{{item.header}} <span v-if="item.text">({{item.text}})</span>
					</a>
				</h3>
			</li>
		</ul>
	</div>
</template>

<script>
import EventBus from '~/event-bus'

export default {

  props: {
		Sections: []
  },


  methods: {
    emitMethod(e) {
			e.preventDefault();
			const activeListItem = e.target.closest('li')
			const activeKey = activeListItem.getAttribute("data-index")
			const activeData = this.$props.Sections[activeKey]

      EventBus.$emit('open_panel', activeData)
    }
  },

	mounted() {

	}
}
</script>

<style lang="scss">
.c-WorkList {
	width: 100%;
	position: relative;
}

.c-WorkList__list {
	width: 100%;
	position: relative;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	padding-right: 0;
	list-style: none;
}

.c-WorkList__item {
	margin-top: 0;
	margin-bottom: 0;
	border-top: 1px solid $c-black;
	transition: 800ms border-color 400ms $standard-curve;

	@include v-spacing(padding-top, 60px, 120px);
	@include v-spacing(padding-bottom, 60px, 120px);
	@include grid-container;

	&:last-child {
		border-bottom: 1px solid $c-black;
	}

	@include hover {

		> * {
			pointer-events: none;
		}
	}
}

.c-WorkList__header {
	text-transform: uppercase;
	margin-top: 0;
	margin-bottom: 0;
	transition: 800ms color 400ms $standard-curve;

	@include H2;
	@include grid-col(1, -1);

	a {
		text-decoration: none;
		color: inherit;
	}

	span {
		vertical-align: top;
		text-transform: capitalize;
		pointer-events: none;
		position: relative;
		top: 3px;

		@include H4("light");

		@include media("<medium") {
			display: block;
			margin-top: 5px;
		}
	}
}

html.dark-theme {

	.c-WorkList__header  {
		color: $c-white;
	}

	.c-WorkList__item {
		border-color: $c-white;
	}
}
</style>
