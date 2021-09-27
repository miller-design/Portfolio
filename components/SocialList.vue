<template>
  <div class="[ c-ContactList ]" :class="{ 'c-ContactList--large': largeList, 'c-ContactList--padding': addPadding }">
		<div class="[ c-ContactList__item c-ContactList__item-header ]" v-if="addTitle">
			<p>Social:</p>
		</div>
		<div class="[ c-ContactList__item ]">
			<p class="[ u-faded-text ]"><a href="#" class="[ u-text-link ]" data-cursor-hover>LinkedIn</a></p>
		</div>
		<div class="[ c-ContactList__item ]">
			<p class="[ u-faded-text ]"><a href="#" class="[ u-text-link ]" data-cursor-hover>Instagram</a></p>
		</div>
		<div class="[ c-ContactList__item ]">
			<p class="[ u-faded-text ]"><a href="#" class="[ u-text-link ]" data-cursor-hover>Github</a></p>
		</div>
  </div>
</template>

<script>

export default {

	props: {

		largeList: {
			type: Boolean,
      default: true
		},

    addTitle: {
      type: Boolean,
      default: true
    },

		addPadding: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style lang="scss">
.c-ContactList {
	width: 100%;
	position: relative;

	@include grid-container(true);
	@include v-spacing(margin-bottom, 60px, 120px);
}

.c-ContactList__item {

	@include grid-col(1, -1);
	@include v-spacing(margin-bottom, 15px, 28px);

	@include media(">=medium") {

		@include grid-col(2, 7);
	}

	&:last-of-type {
		margin-bottom: 0;
	}

	> p {
		margin-top: 0;
		margin-bottom: 0;
		transition:
			800ms color 400ms $standard-curve,
			400ms opacity $standard-curve;

		.dark-theme & {
			color: $c-white;
		}
	}
}

.c-ContactList__item > p {

	@include H3;

	@include media("<medium") {

		@include v-type(20px, 40px, 45px);
	}
}

.c-ContactList__item-header > p {

	@include H2;

	@include media("<medium") {

		@include v-type(30px, 50px, 50px);
	}
}

.c-ContactList--large {

	.c-ContactList__item > p {

		@include H3;

		@include media("<medium") {

			@include v-type(30px, 60px, 65px);
		}
	}

	.c-ContactList__item-header > p {

		@include H2;

		@include media("<medium") {

			@include v-type(40px, 80px, 80px);
		}
	}
}

.c-ContactList--padding {

	@include grid-container;
}
</style>