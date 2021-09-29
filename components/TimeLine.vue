<template>
  <div class="[ c-TimeLine ]">
		<div class="[ c-TimeLine__left ]">
			<div class="[ c-TimeLine__bar ]"></div>
			<div class="[ c-TimeLine__dot-wrap ]">
				<span class="[ c-TimeLine__dot ]"></span>
			</div>
		</div>
		<div class="[ c-TimeLine__right ]">
			<div class="[ c-TimeLine__section ]" v-for="(section, i) in Sections" :key="i">
				<h2 class="[ c-TimeLine__header ]">{{section.header}}</h2>
				<ul class="[ c-TimeLine__list ]" :class="{'c-TimeLine__list-vertical': section.verticalList}">
					<li v-for="(item, i) in section.list" :key="i">
						<span class="[ orange ]" v-if="item.orange" v-html="item.orange">{{item.orange}}</span>
						<span class="[ bold ]" v-if="item.bold" v-html="item.bold">{{item.bold}}</span>
						<span v-if="item.light" v-html="item.light">{{item.light}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {

	props: {
		Sections: [],
  },

  data() {
    return {
      // position: 0,
    }
  },

  methods: {

  },

  mounted() {

  }
}
</script>

<style lang="scss">
.c-TimeLine {
	width: 100%;
	position: relative;

	@include grid-container;
}

.c-TimeLine__left {
	position: relative;
	margin-top: 15px;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	@include grid-col(1, 2);

	@include media(">=medium") {

		@include v-spacing(margin-bottom, 65px, 140px);
	}
}

.c-TimeLine__right {

	@include grid-col(2, -1);
}

.c-TimeLine__section {

	@include v-spacing(margin-bottom, 65px, 140px);
}

.c-TimeLine__bar {
	position: absolute;
	left: 20px;
	top: 0;
	width: 2px;
	height: 100%;
	background-color: $c-orange;
}

.c-TimeLine__dot-wrap {
	position: sticky;
  bottom: 50vh;

	// @include media("<small") {
	// 	bottom: 50vh;
	// }
}

.c-TimeLine__dot {
	width: 24px;
	height: 24px;
	border-radius: 24px;
	background-color: $c-off-white;
	border: 2px solid $c-orange;
	position: absolute;
	top: 0;
	left: -11px;
	transition: 800ms background-color 400ms $standard-curve;
}

.c-TimeLine__header {
	margin-top: 0;
	text-transform: uppercase;
	transition: 800ms color 400ms $standard-curve;

	@include H3;
	@include v-spacing(margin-bottom, 35px, 60px);
}

.c-TimeLine__list {
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;

	&:not(.c-TimeLine__list-vertical) {

		@include grid-container(true);

		> li {

			@include grid-col(1, -1);

			@include media(">=medium") {

				@include grid-col(span, 3);
			}
		}
	}

	> li {

		&:not(:last-child) {

			@include v-spacing(margin-bottom, 35px, 60px);
		}

		span {
			width: 100%;
			display: block;
			transition: 800ms color 400ms $standard-curve;

			&.bold,
			&.orange {

				@include P1;
			}

			&.bold {
				text-transform: capitalize;
			}

			&.orange {
				color: $c-orange;
				text-transform: uppercase;
			}

			&:not(.bold):not(.orange) {

				@include P1("light");
			}

			&:not(:last-child) {
				margin-bottom: 5px;
			}
		}
	}

	&.c-TimeLine__list-vertical {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		> li {
			padding-left: 0;
		}
	}
}

html.dark-theme {

	.c-TimeLine__header {
		color: $c-white;
	}

	.c-TimeLine__list > li span:not(.orange) {
		color: $c-white;
	}

	.c-TimeLine__dot {
		background-color: $c-black;
	}
}

</style>