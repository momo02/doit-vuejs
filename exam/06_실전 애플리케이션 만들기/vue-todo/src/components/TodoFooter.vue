<template lang="html">
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods : {
    clearTodo() {
      //Claer All버튼을 클릭하면 removeAll이벤트를 발생시켜 상위 컴포넌트(App.vue)로 전달.
      this.$emit('removeAll');
    }
  }
}
</script>


<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: #e20303;
    display: black;
  }
</style>
