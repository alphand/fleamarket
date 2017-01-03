<!-- Based on http://tobiasahlin.com/spinkit/  -->

<template>
  <div class="fl-loader-wrapper">
    <div class="fl-cube-grid">
      <div class="fl-cube fl-cube1"></div>
      <div class="fl-cube fl-cube2"></div>
      <div class="fl-cube fl-cube3"></div>
      <div class="fl-cube fl-cube4"></div>
      <div class="fl-cube fl-cube5"></div>
      <div class="fl-cube fl-cube6"></div>
      <div class="fl-cube fl-cube7"></div>
      <div class="fl-cube fl-cube8"></div>
      <div class="fl-cube fl-cube9"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes fl-cubeGridScaleDelay {
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  } 35% {
    transform: scale3D(0, 0, 1);
  }
}

.fl-loader-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2000;
  top: 0; left: 0;
  background: rgba(0, 0, 0, 0.7);

  .fl-cube-grid {
    width: 40px;
    height: 40px;
    margin: 30% auto;

    .fl-cube {
      width: 33%;
      height: 33%;
      background-color: #ccc;
      float: left;
      animation: fl-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }

    .fl-cube1 {
      animation-delay: 0.2s;
    }
    .fl-cube2 {
      animation-delay: 0.3s;
    }
    .fl-cube3 {
      animation-delay: 0.4s;
    }
    .fl-cube4 {
      animation-delay: 0.1s;
    }
    .fl-cube5 {
      animation-delay: 0.2s;
    }
    .fl-cube6 {
      animation-delay: 0.3s;
    }
    .fl-cube7 {
      animation-delay: 0s;
    }
    .fl-cube8 {
      animation-delay: 0.1s;
    }
    .fl-cube9 {
      animation-delay: 0.2s;
    }
  }
}
</style>
