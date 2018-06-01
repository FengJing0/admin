export default {
  state: {
    isFullScreen: false
  },
  mutations: {
    toggleFullScreen (state) {
      const d = document
      const body = d.body
      const closeFullScreen = () => {
        // if (d.exitFullscreen) {
        //   d.exitFullscreen()
        // } else if (d.mozCancelFullScreen) {
        //   d.mozCancelFullScreen()
        // } else if (d.webkitCancelFullScreen) {
        //   d.webkitCancelFullScreen()
        // } else if (d.msExitFullscreen) {
        //   d.msExitFullscreen()
        // }
        d.exitFullscreen ? d.exitFullscreen()
          : d.mozCancelFullScreen ? d.mozCancelFullScreen()
            : d.webkitCancelFullScreen ? d.webkitCancelFullScreen()
              : d.msExitFullscreen ? d.msExitFullscreen()
                : console.log('不支持全屏')
        state.isFullScreen = false
      }
      const fullScreen = () => {
        body.requestFullscreen ? body.requestFullscreen()
          : body.mozRequestFullScreen ? body.mozRequestFullScreen()
            : body.webkitRequestFullScreen ? body.webkitRequestFullScreen()
              : body.msRequestFullscreen ? body.msRequestFullscreen()
                : console.log('不支持全屏')
        state.isFullScreen = true
      }
      state.isFullScreen ? closeFullScreen() : fullScreen()
    }
  }
}
