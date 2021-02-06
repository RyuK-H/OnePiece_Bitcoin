<template>
  <div class="animated-gif-container">
    <div class="grey-background flex-center">
      <desc-dialog></desc-dialog>
      <div>
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
import DescDialog from './DescDialog.vue'

export default {
  components: {
    'double-text': DoubleText,
    'desc-dialog': DescDialog
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
.animated-gif-container {
  background-color: rgba(0, 0, 0);
  background-image:url(../assets/D.gif);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
</style>
