<template>
<header class="fl-header">
  <slot />
</header>
</template>

<style scoped lang="scss">
.fl-header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
}
</style>
