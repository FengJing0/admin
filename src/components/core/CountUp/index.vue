<template>
  <span></span>
</template>

<script>
import Countup from 'countup.js'

export default {
  props: {
    start: {
      type: Number,
      required: false,
      default: 0
    },
    end: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      required: false,
      default: 0
    },
    duration: {
      type: Number,
      required: false,
      default: 2
    },
    options: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    },
    callback: {
      type: Function,
      required: false,
      default: () => {
      }
    }
  },
  data () {
    return {
      c: null
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    this.c = null
  },
  methods: {
    init () {
      if (!this.c) {
        this.c = new Countup(
          this.$el,
          this.start,
          this.end,
          this.decimals,
          this.duration,
          this.options
        )
        if (!this.c.error) {
          this.c.start();
        } else {
          console.error(this.c.error)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
