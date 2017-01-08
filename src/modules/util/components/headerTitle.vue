<template>
<div class="fl-header-title fl-header-title-parralax fl-header-title-parralax-opacity">
  <ul class="fl-parallax-scene">
    <li class="fl-parallax-layer" data-depth="0.20">
      <img src="../../../assets/bg-image1-web.jpg">
    </li>
  </ul>
  <div class="fl-header-table">
    <div class="fl-header-table-cell">
      <div class="container">
        <h1 class="fl-title">Beauty Blender</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.fl-header-title {
  position: relative;
  display: block;
  color: #fff;
  overflow: hidden;
  background-color: #1c1c1c;
  z-index: 0;
  text-align: center;

  .fl-parallax-scene {
    position: relative;
    overflow: hidden;
    position: absolute;
    z-index: -100;
  }

  .fl-parallax-scene, .fl-parallax-layer {
    display: block;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  h1.fl-title {

  }


  .fl-header-table {
    display: table;
    height: 350px;
    width: 100%;
  }

  .fl-header-table-cell {
    display: table-cell;
    vertical-align: middle;
    padding: 60px 0;
  }
}
</style>
