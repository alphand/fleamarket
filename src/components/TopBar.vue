<template>
  <div class="topbar-container">
    <h2 class="brand">Fleamarket Title</h2>
  </div>
</template>

<style lang="scss">
  @import 'bourbon';
  @import '~susy/sass/susy';
  @import '../scss/mixins/_responsive.scss';

  .topbar-container {
    @include container(80em);

    .brand {
      font-size: em(18px);
    }
  }
</style>
