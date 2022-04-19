<template>
  <div>
    <div>
      <HeroText header="T&C’s and all the boring Mumbo jumbo 🥱" />
    </div>
    <div class="terms-wrapper">
      <div class="terms-content">
        <p>
          <strong>Privacy Policy</strong>
          <br/>
          Your privacy is important to us. It is Miller Design’s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https://jackmiller.design, and other sites we own and operate.
          <br/>
          <br/>
          This policy is effective as of 1 January 2021 and was last updated on 20 July 2021.
          <br/>
          <br/>
          <strong>Information We Collect</strong>
          <br/>
          Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.
          <br/>
          <br/>
          <strong>Log Data</strong>
          <br/>
          When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.
          <br/>
          <br/>
          Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.
          <br/>
          <br/>
          <strong>Collection and Use of Information</strong>
          <br/>
          We may collect personal information from you when you do any of the following on our website:
          <br/>
          <br/>
          Use a mobile device or web browser to access our content<br/>
          Contact us via email, social media, or on any similar technologies<br/>
          When you mention us on social media<br/>
          We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:
          <br/>
          <br/>
          <strong>Use of Cookies</strong>
          <br/>
          We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.
          <br/>
          <br/>
          <strong>Limits of Our Policy</strong>
          <br/>
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
          <br/>
          <br/>
          <strong>Changes to This Policy</strong>
          <br/>
          At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.
          <br/>
          <br/>
          If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.
          <br/>
          <br/>
          <strong>Contact Us</strong>
          <br/>
          For any questions or concerns regarding your privacy, you may contact us using the following details: <a href="mailto:contact@jackmiller.design?subject=Terms and Conditions Question" class="[ u-text-link ]" data-cursor-hover>contact@jackmiller.design</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeroText from '~/components/HeroText.vue'

export default {
  computed: {

  },

  layout: 'default',

  components: {
    HeroText
  }
}
</script>

<style lang="scss">
.terms-wrapper {

  @include v-spacing(padding-top, 60px, 110px);
}

.terms-content {

  @include grid-container;

  > p {
    transition: 800ms color 400ms $standard-curve;

    @include P1("light");
    @include grid-col(1, -1);

    @include media(">=small") {

      @include grid-col(1, 6);
    }

    @include media(">=medium") {

      @include grid-col(2, 12);
    }

    strong {

      @include P1("regular");
    }

		.dark-theme & {
			color: $c-white;
		}
  }
}
</style>
