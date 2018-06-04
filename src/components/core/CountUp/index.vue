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
  watch: {
    end (value) {
      if (this.c && this.c.update) {
        this.c.update(value)
      }
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
          this.c.start(() => {
            this.callback(this.c)
          })
        } else {
          console.error(this.c.error)
        }
      }
    }
  },
  start (callback) {
    if (this.c && this.c.start) {
      this.c.start(() => {
        callback && callback(this.c)
      })
    }
  },
  pauseResume () {
    if (this.c && this.c.pauseResume) {
      this.c.pauseResume()
    }
  },
  reset () {
    if (this.c && this.c.reset) {
      this.c.reset()
    }
  },
  update (newEndVal) {
    if (this.c && this.c.update) {
      this.c.update(newEndVal)
    }
  }
}
</script>

<style scoped>

</style>
