<template>
	<div class="[ c-WorkList ]">
		<ul class="[ c-WorkList__list ]">
			<li
				class="[ c-WorkList__item ]"
				v-for="(item, i) in Sections"
				:key="i" @click="emitMethod"
				:data-index="i"
				data-cursor-hover
			>
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

	data() {
    return {
      showImage: false,
    }
  },

  props: {
		Sections: []
  },


  methods: {
		getTheData(e) {
			const activeListItem = e.target.closest('li')
			const activeKey = activeListItem.getAttribute("data-index")
			const activeData = this.$props.Sections[activeKey]

			return activeData
		},

    emitMethod(e) {
			e.preventDefault();
			const activeData = this.getTheData(e)
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

	@include sibling-fade;
}

.c-WorkList__item {
	position: relative;
	margin-top: 0;
	margin-bottom: 0;
	border-top: 1px solid $c-black;

	@include v-spacing(padding-top, 60px, 120px);
	@include v-spacing(padding-bottom, 60px, 120px);
	@include grid-container;

	&:last-child {
		border-bottom: 1px solid $c-black;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: $c-black;
		transition: 800ms background-color 400ms $standard-curve;
	}

	&::before {
		top: -1px;
	}

	&::after {
		bottom: -1px;
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

.c-WorkList__hover-img {
	position: fixed;
	top: 0;
	left: 0;
	max-width: 30vw;
	max-height: 50vh;
	width: 100%;
	height: 100%;
	object-fit: contain;
	opacity: 0;
	pointer-events: none;
	transition: 600ms opacity $standard-curve;

	&.active {
		opacity: 1;
	}
}

html.dark-theme {

	.c-WorkList__header  {
		color: $c-white;
	}

	.c-WorkList__item {

		&::before,
		&::after {
			background-color: $c-white;
		}
	}
}
</style>
