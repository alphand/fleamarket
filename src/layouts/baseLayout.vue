<template>
  <div class="main-app">
    <slot name="header"></slot>
    <slot></slot>
    </slot name="footer"></slot>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  @import '../scss/themes/default/theme.scss'

</style>
