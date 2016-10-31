<template>
  <div class="tb-container">
    <div class="tb-c-inner">
      <a class="tb-brand" href="/">Fleamarket Title</a>

      <div class="actions">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'bourbon';
  @import '~susy/sass/susy';
  @import '../scss/mixins/_responsive.scss';

  .tb-container {
    @include layout(auto 12 (60px 20px) split static);
  }

  .tb-c-inner {
  }

  .tb-brand {
    padding: 0;
    margin: 0;
    font-size: em(18px);
  }
</style>
