<template>
  <div class="animated-gif-container">
    <div class="grey-background flex-center">
      <div class="desc-container">
        <desc-modal></desc-modal>
      </div>
      <div class="data-container">
        <double-text
          title="Worker"
          :content="WorketCount">
        </double-text>
        <double-text
          title="Count"
          :content="ProcessingCount">
        </double-text>
      </div>
    </div>
  </div>
</template>

<script>

import DoubleText from './DoubleText.vue'
import DescModal from './DescModal.vue'

export default {
  components: {
    'double-text': DoubleText,
    'desc-modal': DescModal
  },
  data () {
    return {
      worker: 23,
      count: 214144131
    }
  },
  computed: {
    WorketCount () {
      return this.worker.toLocaleString()
    },
    ProcessingCount () {
      return this.count.toLocaleString()
    }
  }
}
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.grey-background {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: auto;
}
.desc-container {
  width: 50%;
}
.desc-background {
  background-color: rgba(0, 0, 0, 0.75);
}
.data-container {
  margin-top: 50px !important;
}
.animated-gif-container {
  background-image:url(../assets/D.gif);
  width:100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
</style>
