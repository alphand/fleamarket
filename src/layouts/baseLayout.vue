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
  @import '../../scss/themes/default/theme.scss';
</style>
