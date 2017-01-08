<template>
  <BaseLayout>

    <div slot="header" class="header navbar navbar-dark bg-inverse navbar-fixed-top">
      <div class="header-separation">

      </div>
      <div class="side-col">
        <div class="navbar nav_title">
            <router-link to="dashboard" class="navbar-brand">
              <FaIcon icon="shopping-basket" />
              SOCOMA
            </router-link>
        </div>
      </div>
    </div>

    <div class="top-nav">
    </div>

    <div class="main-col">
      <slot></slot>
    </div>

    <footer>
      footer
    </footer>
  </BaseLayout>
</template>

<script>
  import BaseLayout from './baseLayout';
  import FaIcon from '../components/FaIcon';

  export default {
    components: {
      BaseLayout,
      FaIcon,
    },
  };
</script>

<style>
.col-md-3.side-col {
  width: 230px;
  padding: 0;
  position: absolute;
  z-index: 9999;
  display: flex;
}

.side-col {
  background: #2A3F54;
}
</style>
