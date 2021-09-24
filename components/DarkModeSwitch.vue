<template>
  <div class="[ c-DarkModeSwitch ]" :class="{ 'c-DarkModeSwitch--checked': userTheme === 'dark-theme' }">
		<div class="[ c-DarkModeSwitch__background ]">
			<span
				class="[ c-DarkModeSwitch__switch ]"
				data-cursor-hover
				@click="toggleTheme">
			</span>
		</div>
	</div>
</template>

<script>
export default {

	data() {
    return {
			userTheme: "light-theme",
		}
  },

  methods: {

		setTheme(theme) {
			localStorage.setItem("user-theme", theme)
			this.userTheme = theme
			document.documentElement.className = theme
		},

		toggleTheme() {
			const activeTheme = localStorage.getItem("user-theme");
			if(activeTheme === "light-theme") {
				this.setTheme("dark-theme")
			} else {
				this.setTheme("light-theme")
			}
		},

		getMediaPreference() {
			const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
			if(hasDarkPreference || localStorage.getItem("user-theme") === 'dark-theme') {
				return "dark-theme"
			} else {
				return "light-theme"
			}
		},
	},

	mounted() {
		const initUserTheme = this.getMediaPreference()
    this.setTheme(initUserTheme)
	}
}
</script>

<style lang="scss">
.c-DarkModeSwitch {
	width: 60px;
	height: 28px;
	border-radius: 28px;
	background-color: $c-orange;
	position: relative;
	overflow: hidden;
}


// NightMode Elements
.c-DarkModeSwitch__background {
	width: 100%;
	height: 100%;
	display: block;
	position: relative;
	background-color: $c-orange;
	transition: 400ms background-color ease;
}

.c-DarkModeSwitch__switch {
	width: 20px;
	height: 20px;
	display: inline-block;
	border-radius: 20px;
	background-color: $c-white;
	position: absolute;
	left: 4px;
	top: 50%;
	transform: translateY(-50%);
	transform-origin: center;
	transition:
		400ms background-color ease,
		400ms transform ease;
}

.c-DarkModeSwitch--checked {

	.c-DarkModeSwitch__background {
		background-color: $c-white;
	}

	.c-DarkModeSwitch__switch {
		transform: translateX(32px) translateY(-50%);
		background-color: $c-orange;
	}
}

</style>
