<template>
  <span :class="classIcon"></span>
</template>

<script>
  export default {
    name: 'FaIcon',
    props: ['icon'],
    computed: {
      classIcon() {
        return `faicon fa fa-${this.icon}`;
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "../../scss/font-awesome/index.scss";
</style>
