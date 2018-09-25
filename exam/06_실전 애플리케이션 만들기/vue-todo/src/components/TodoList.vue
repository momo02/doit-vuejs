<template lang="html">
  <section>
    <!-- <transition-group>은 목록에 애니메이션을 추가할 때 사용되는 태그.
         tag속성에 애니메이션이 들어갈 HTML태그 이름을 지정.  -->
      <transition-group name="list" tag="ul">
        <!-- li 태그에 v-bind:key를 간략하게 표현한 :key를 추가.
        목록에 애니메이션을 적용하려면 <transition-group>안의 대상 태그에 :key속성을 꼭 지정해야 하기 때문.
        key속성에는 유일하게 구분되는 값을 넣어야 함. -->
        <li v-for="(todoItem,index) in propsdata" :key="todoItem" class="shadow"> <!-- v-for디렉티브로 반복한 요소는 모두 뷰애서 내부적으로 인덱스를 부여 -->
          <i class="checkBtn fa fa-check" aria-hidden="true"></i>
          {{ todoItem }}
          <!-- @click은 v-on:click과 동일하게 동작 -->
          <!-- index : 목록에서 순서번호, 배열 인덱스와 동일 -->
          <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
              <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </li>
      </transition-group>
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
  /* <transition-group> 태그에 적용할 CSS속성을 추가 */
  .lzist-item {
    display : inline-block;
    margin-right : 10px;
  }
  .list-move {
    transition : transform 1s;
  }
  .list-enter-active, .list-leave-active {
    transition : all 1s;
  }
  .list-enter, .list-leave-to {
    opacity : 0;
    transform : translateY(30px);
  }
</style>
