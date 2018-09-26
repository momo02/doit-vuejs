<!-- 날짜 선택기 위젯을 컴포넌트로 분리 -->
<template>
  <input class="calendar" />
</template>

<script>
export default {
  mounted() {
    $(".calendar").datepicker();
  }
}
</script>
