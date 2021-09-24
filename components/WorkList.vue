<template>
	<div class="[ c-WorkList ]">
		<ul class="[ c-WorkList__list ]">
			<li class="[ c-WorkList__item ]" v-for="(item, i) in Sections" :key="i">
				<h3 class="[ c-WorkList__header ]" v-if="item.header"><a :href="item.link" :target="item.target" data-cursor-hover>{{item.header}} <span v-if="item.text">({{item.text}})</span></a></h3>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

	// data() {
  //   return {

  //   }
  // },

  props: {
		Sections: []
  },

  methods: {

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
