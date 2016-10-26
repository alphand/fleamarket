<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import 'bourbon';
  @import '~susy/sass/susy';
  @import './scss/mixins/_responsive.scss';

  #app {
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
      text-align: center;
      color: #2c3e50;
      margin-top: em(60);

      @include respond-to(smartphones) {
        background-color: aqua;
      }
  }
</style>
