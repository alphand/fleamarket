<template>
  <input :type="type" :class="inClass" :value="value">
</template>

<script>
  export default {
    props: ['type', 'class', 'value'],
    name: 'FlButton',
    computed: {
      inClass() {
        const btnClass = {
          btn: true,
        };

        if (this.class) {
          btnClass[this.class] = true;
        }

        return btnClass;
      },
    },
  };
</script>

