<template>

  <div class="main-app">
    <FlLoader v-show="showLoader"/>
    <slot name="header"></slot>
    <slot></slot>
    </slot name="footer"></slot>
  </div>
</template>

<script>
  import $ from 'jquery';
  import { mapGetters } from 'vuex';
  import FlLoader from '../components/FlLoader';

  export default {
    props: ['bodyClass'],
    components: {
      FlLoader,
    },
    computed: {
      ...mapGetters({
        showLoader: 'showLoader',
      }),
    },
    mounted() {
      if (this.bodyClass) {
        $('body').addClass(this.bodyClass);
      }
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  @import '../../scss/themes/default/theme.scss';
</style>
