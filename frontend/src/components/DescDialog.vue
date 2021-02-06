<template>
  <div >
    <md-dialog md-accent :md-active.sync="showDialog">
      <md-dialog-title>OnePiece Bitcoin</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="Intro">
          <ul>
            <li>해당 서비스는 유실 된 비트코인 지갑을 찾는 프로젝트입니다.</li>
            <li>유실 지갑이 발생 하는 대표적인 이유로는 오송금과 개인키 분실이 있습니다.</li>
            <li>현재 10년이상 움직임이 없는 지갑의 BTC 총합은 약 300만개가 되고, 이는 전체 2,100만개의 발행량 중 약 14%를 차지합니다.</li>
          </ul>
        </md-tab>

        <md-tab md-label="How">
          <ul>
            <li>해당 웹페이지를 켜놓고 있다면, 특정 구역이 할당 됩니다.</li>
            <li>아래의 조건에 부합되는 지갑을 찾습니다.</li>
            <ol>
              <li>지갑의 마지막 트랜잭션이 10년 이상 되었다.</li>
              <li>채굴로 얻은 입금 트랜잭션을 제외한 트랜잭션이 없다.</li>
              <li>잔고가 5 BTC 이상 있다.</li>
            </ol>
            <li>지갑을 찾는다면, 이메일을 입력하는 팝업이 나타나고 개발자와 연락을 합니다.</li>
            <li>비트코인 커뮤니티에 해당 지갑의 주인을 1년 동안 찾습니다.</li>
            <ul>
              <li>주인은 "onepiece bitcoin"을 자신의 지갑 주소로 서명하여 증명합니다.</li>
            </ul>
            <li>주인이 있다면, 해당 BTC는 주인에게 반환 되고, 주인이 없다면 수수료 10%를 제외한 모든 BTC를 찾은 이에게 지급 합니다.</li>
          </ul>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-speed-dial class="md-top-right" md-event="click" md-direction="bottom">
      <md-speed-dial-target @click="showDialog = true">
        <md-icon>contact_support</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  },
  data: () => ({
    showDialog: false
  })
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.md-dialog /deep/.md-dialog-container {
  max-width: 768px;
}
</style>
