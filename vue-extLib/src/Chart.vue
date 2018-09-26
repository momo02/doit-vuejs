<template>
  <div id="container" style="width:100%; height:400px;"></div>
</template>

<script>
export default{
  mounted() {
    //출처 : 하이차트 예제 코드 (https://www.highcharts.com/docs/getting-started/your-first-chart)
      Highcharts.chart('container', {
         chart: {
             type: 'bar'
         },
         title: {
             text: 'Fruit Consumption'
         },
         xAxis: {
             categories: ['Apples', 'Bananas', 'Oranges']
         },
         yAxis: {
             title: {
                 text: 'Fruit eaten'
             }
         },
         series: [{
             name: 'Jane',
             data: [1, 0, 4]
         }, {
             name: 'John',
             data: [5, 7, 3]
         }]
     });
  }
}
</script>
