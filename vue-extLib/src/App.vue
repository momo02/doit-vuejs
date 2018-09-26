<template>
  <div id="app">
    <!-- 부트스트랩 버튼을 추가 -->
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <!-- 차트 표시 -->
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from './Chart.vue' //차트 컴포넌트 로딩

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : { //차트 컴포넌트 등록
    Chart
  }
}
</script>
