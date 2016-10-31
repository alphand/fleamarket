<template>
  <div class="app">
    <slot name="header"></slot>
    <slot></slot>
    </slot name="footer"></slot>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  html, body {
    padding: 0;
    margin: 0;

    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }

</style>
