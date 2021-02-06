<template>
  <div class="flex-end">
      <p>해당 서비스는 유실 된 비트코인 지갑을 찾는 프로젝트입니다.</p>
        <p>유실 지갑이 발생 하는 대표적인 이유로는 오송금과 개인키 분실이 있습니다. 현재 10년이상 움직임이 없는 지갑의 BTC 총합은 약 300만개가 되고, 이는 전체 2,100만개의 발행량 중 약 14%를 차지합니다.</p>
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
