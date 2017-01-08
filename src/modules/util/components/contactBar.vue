<template>
  <div class="fl-contact-bar">
    <div class="container">

      <div class="fl-contact-bar-left">
        <ul>
          <li>
            <span class="fl-contact-bar-icon">
              <FaIcon icon="phone" />
            </span>
            +61 430 061 711
          </li>
          <li>
            <span class="fl-contact-bar-icon">
              <FaIcon icon="envelope" />
            </span>
            niko@nikodarmawan.com
          </li>
        </ul>
      </div>

      <div class="fl-contact-bar-right">
        <ul>
          <li>
            <a href="https://twitter.com/nikoadarmawan"
              target="_blank" class="fl-contact-bar-icon">
              <FaIcon icon="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
.fl-contact-bar {
  background-color: rgba(28, 28, 28, .75);
  color: #fff;
  font-size: .85rem;
  padding: 10px 0;

  ul {
    list-style-type: none;
    margin: 0; padding: 0;

    & > li {
      display:inline-block;
      margin-right: 15px;

      a.fl-contact-bar-icon {
        color: inherit;
      }
    }

  }
}

.fl-contact-bar-left {
  float:left;
}

.fl-contact-bar-right {
  float:right;
}

.fl-contact-bar-icon {
  display: inline-block;
  vertical-align: bottom;
  margin-right: 3px;
}
</style>
