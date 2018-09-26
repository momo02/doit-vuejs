<template>
  <div id="app">
    App 컴포넌트<br />
    <input id="calendar" />
  </div>
</template>

<script>
export default {
//App컴포넌트의 인스턴스가 생성되고 나면 바로 created()에 정의된 로직을 실행.
  // created() {
  //   console.log($.fn.jquery); //jquery 라이브러리 버전 출력
  //   console.log($.ui.version); //jquery UI 라이브러리 버전 출력
  // }

  //jquery 로직을 수행할 때 mounted()를 사용한 이유?
  //<template>안의 HTML태그에 접근할 수 있는 시점이 뷰의 가상 돔이 화면의 특정 요소에 부착되고 난 시점인 mounted()이기 때문.
  //mounted의 이전 아리프 사이클 단계인 created에서는 <template>에 정의한 돔 요소에 접근할 수 없음.
  mounted() {
    $("#calendar").datepicker();
  }
}
</script>

<style>
</style>
