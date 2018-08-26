<template lang="html">
  <section>
      <ul>
        <!-- v-for 디렉티브는 뷰 데이터 속성 todoItems의 내용물 개수(todoItems 배열 요소 수)만큼 반복해서 <li>태그를 출력하는 디렉티브 -->
        </li>
        <!-- <li v-for="todoItem in todoItems" class="shadow"> -->
        <li v-for="(todoItem,index) in todoItems" class="shadow"> <!-- v-for디렉티브로 반복한 요소는 모두 뷰애서 내부적으로 인덱스를 부여 -->
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
  data() {
    return {
      //로컬 스토리지 데이터를 담을 todoItems 배열(v-for목록 렌더링에 활용하기위해 배열로 선언..)
      todoItems : []
    }
  },
  methods : {
    removeTodo(todoItem,index) {
      //console.log(todoItem,index);
      localStorage.removeItem(todoItem); //로컬 스토리지의 데이터를 삭제하는 removeItem()
      this.todoItems.splice(index,1);  //배열의 해당 인덱스에서 1만큼 삭제.
      /// * 뷰 데이터 속성인 todoItems의 배열 요소를 제거하자마자 바로 뷰에서 자동으로 화면을 다시 갱신함.
      /// ==> 데이터 속성이 변하면 화면에 즉시 반영하는 뷰의 반응성 때문.
    }
  },
  //뷰의 인스턴스가 생성되자마자 실행.
  created() {
    //로컬 스토리지 데이터를 뷰 데이터에 저장.
    if(localStorage.length > 0){
      for(var i=0; i<localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },

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
