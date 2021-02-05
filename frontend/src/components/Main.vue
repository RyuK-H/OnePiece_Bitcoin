<template>
  <div id="animated-gif-container">
    <div class="Modal">
      <p>Worker : 45</p>
      <p>Processing Count : 21412412</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.Modal {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
}

#animated-gif-container {
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
