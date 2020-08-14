<template>
  <div class="drop-down-menu">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$on('itemClick', this.itemClick)
  },
  destroyed() {
    this.$off('itemClick', this.itemClick)
  },
  methods: {
    itemClick(show) {
      const t = this.$children
      if (show) {
        t.forEach(x => {
          if (x.show) { x.toggle(false, 0) }
        });
      }
    },
    close() {
      const t = this.$children
      t.forEach(x => {
        if (x.show) { x.toggle(false) }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.drop-down-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 48px;
    background-color: white;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}
</style>
