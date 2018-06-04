<template>
  <svg aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    icon () {
      return `#dd-${this.name}`
    }
  }
}
</script>
