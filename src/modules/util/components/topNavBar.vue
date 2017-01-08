<template>
<nav class="fl-navbar fl-navbar-transparent">
  <div class="container">
    <div class="fl-nav-table">
      <router-link to="home" class="fl-nav-logo" text="Commerzime">
        Commerzime
      </router-link>
      <ul class="fl-nav fl-nav-right fl-nav-icons">
        <li class="single-icon nk-drop-item">
          <a href='#' class="no-link-effect">
            <FaIcon icon="shopping-bag" />
            <span class="fl-badge">4</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import FaIcon from 'src/components/FaIcon';

export default {
  components: {
    FaIcon,
  },
};
</script>

<style scoped lang="scss">
@import "scss/mixins/list";
@import "scss/mixins/badge";
@import "scss/mixins/link";

.fl-navbar {
  padding: 15px 0;
  color: #fff;
  font-size: .9rem;
  z-index: 1000;
  transition: .3s background-color;
  will-change: background-color;
  position: relative;
  background-color: rgba(28, 28, 28, .75);

  a {
    color: inherit;
  }

  &.fl-navbar-transparent {
    background: transparent;
  }

  ul {
    @include list-unstyled();
  }

  li.single-icon > a {
    padding: 0 15px;
  }

  .faicon {
    height: 32px;
    line-height: 32px;
    font-size: 1.1rem;
    vertical-align: middle;
  }

  .fl-badge {
    position: absolute;
    right: 5px;
    bottom: 0;

    @include fl-badge();
  }

  .fl-nav-logo {
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;

    &::before {
      content: attr(text);
      @include link-effect-shade();
      transition: height .3s;
      will-change: height;
    }

    &:hover::before {
      content: attr(text);
      @include link-effect-shade();
      height: 100%;
    }
  }
}

.fl-nav-table {
  display: table;
  width: 100%;
  height: 100%;

  & > * {
    display: table-cell;
    vertical-align: middle;
  }

  & > .fl-nav-icons {
    width: 1%;
    white-space: nowrap;
  }
}

.fl-nav-logo {
  font-size: 1rem;
}

.fl-nav {
  position: relative;
  padding-left: 20px;

  & > li {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
}

.fl-nav-right {
  text-align: right;

  & > * {
    text-align: left;
  }
}
</style>
