<template>
  <div id="app">
    App 컴포넌트<br />
    달력 1 : <DatePicker></DatePicker> <!-- 날짜선택기 표시 -->
    <br />
    달력 2 : <DatePicker></DatePicker> <!-- 날짜선택기 표시 -->
  </div>
</template>

<script>
import DatePicker from './DatePicker.vue' // 날짜 선택기 컴포넌트 로딩

export default {
  //날짜 선택기 컴포넌트 등록
  components : {
    // 'DatePicker' : DatePicker 와 동일 => ES6의 객체 리터럴에서 제공하는 약식 문법 사용.
    DatePicker
  }
}
</script>
