<template>
  <BaseLayout>
    <TopBar slot="header" />
    <div class="homeholder">
      <img src="../../../assets/logo.png">
      <p>
        Something to be used
      </p>
      <Hello />
    </div>
  </BaseLayout>
</template>

<script>
  import BaseLayout from '../../../layouts/baseLayout';
  import Hello from '../../../components/Hello';
  import TopBar from '../../../components/TopBar';

  export default {
    components: {
      BaseLayout,
      Hello,
      TopBar,
    },
  };

</script>

<style lang="scss">
  @import 'bourbon';
  @import '~susy/sass/susy';
  @import '../../../scss/mixins/_responsive.scss';

  .homeholder {
      text-align: center;
      color: #2c3e50;
      margin-top: em(60);

      @include respond-to(smartphones) {
        background-color: aqua;
      }
  }
</style>
