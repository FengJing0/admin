<template>
    <div class="loader" v-if="loading">
      <div class="loader-inner ball-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      require: false,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/public.scss";
.loader{
  width:100%;
  position: relative;
  height: 100%;
  /*margin:50px auto;*/
}
@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1); } }

.ball-spin-fade-loader {
  /*background-color: #f00;*/
  position: absolute;
  left: 50%;
  top:50%;
  width:65px;
  height:65px;
  transform: translate(-50%, -50%);
}
.ball-spin-fade-loader > div:nth-child(1) {
  top: 48px;
  left: 23px;
  -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
  animation: ball-spin-fade-loader 1s 0s infinite linear; }
.ball-spin-fade-loader > div:nth-child(2) {
  top: 40.04545px;
  left: 40.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
  animation: ball-spin-fade-loader 1s 0.12s infinite linear; }
.ball-spin-fade-loader > div:nth-child(3) {
  top: 23px;
  left: 48px;
  -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
  animation: ball-spin-fade-loader 1s 0.24s infinite linear; }
.ball-spin-fade-loader > div:nth-child(4) {
  top: 6.04545px;
  left: 40.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
  animation: ball-spin-fade-loader 1s 0.36s infinite linear; }
.ball-spin-fade-loader > div:nth-child(5) {
  top: -2px;
  left: 23px;
  -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
  animation: ball-spin-fade-loader 1s 0.48s infinite linear; }
.ball-spin-fade-loader > div:nth-child(6) {
  top: 6.04545px;
  left: 6.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
  animation: ball-spin-fade-loader 1s 0.6s infinite linear; }
.ball-spin-fade-loader > div:nth-child(7) {
  top: 23px;
  left: -2px;
  -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
  animation: ball-spin-fade-loader 1s 0.72s infinite linear; }
.ball-spin-fade-loader > div:nth-child(8) {
  top: 40.04545px;
  left: 6.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
  animation: ball-spin-fade-loader 1s 0.84s infinite linear; }
.ball-spin-fade-loader > div {
  background-color: $color-primary;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
}
</style>
