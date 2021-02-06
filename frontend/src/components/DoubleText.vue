<template>
  <div class="flex-end">
      <p class="text-bold">{{ title }}</p>
      <p class="text-bold content-text">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>
.flex-end {
  display: flex;
  justify-content: space-between;

  width: 100%;
  min-width: 350px;
}
.text-bold {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0.00937em;
  text-align: center;
  color: #fff;
}
.content-text {
  margin-left: 30px !important;
}
</style>
