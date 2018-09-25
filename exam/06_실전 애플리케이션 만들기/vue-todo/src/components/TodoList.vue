<template lang="html">
  <section>
      <ul>
        <!-- v-for 디렉티브는 뷰 데이터 속성 todoItems의 내용물 개수(todoItems 배열 요소 수)만큼 반복해서 <li>태그를 출력하는 디렉티브 -->
        </li>
        <!-- App컴포넌트의 todoItems 데이터 개수만틈 목록 아이템을 생성 -->
        <li v-for="(todoItem,index) in propsdata" class="shadow"> <!-- v-for디렉티브로 반복한 요소는 모두 뷰애서 내부적으로 인덱스를 부여 -->
          <i class="checkBtn fa fa-check" aria-hidden="true"></i>
          {{ todoItem }}
          <!-- @click은 v-on:click과 동일하게 동작 -->
          <!-- index : 목록에서 순서번호, 배열 인덱스와 동일 -->
          <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
              <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </li>
      </ul>
  </section>
</template>

<script>
export default {
  props : ['propsdata'],
  methods : {
    removeTodo(todoItem,index) {
      this.$emit('removeTodo',todoItem,index);
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none; /*목록 아이템의 스타일을 지정*/
    padding-left : 0px;
    margin-top : 0;
    text-align: left;
  }
  li {
    display: flex; /*비율 기준의 레이아웃 방식인 flex로 지정*/
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>
