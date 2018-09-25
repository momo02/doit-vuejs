<template>
  <div id="app">
    <!-- 등록한 컴포넌트 4개를 HTML에 표시 -->
    <TodoHeader></TodoHeader>
    <!-- TodoInput 컴포넌트 태그에는 할 일 추가 버튼을 클릭했을 때 App컴포넌트로 이벤트를 전달할 수 있게
         v-on 디렉티브를 추가 -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <!-- App 컴포넌트에 선언한 todoItems속성을 TodoList 컴포넌트에 props로 전달.  -->
    <!-- @removeTodo는 이벤트 전달 디렉티브인 v-on:removeTodo의 약식 문법 -->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
//import 구문으로 다른 컴포넌트 내용을 불러와서 등록.(ES6 import 구문)
//싱글 파일 컴포넌트 체계(.vue 파일 체계)에서는 특정 컴포넌트에서 다른 위치에 있는 컴포넌트의 내용을 불러올 때 아래 형식 사용.
// import 불러온 파일의 내용이 담길 객체 from '불러올 파일 위치'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
//cf... 컴포넌트 내용을 불러올 때 ES5문법과 ES6문법의 차이
//ex)) ES5 문법 적용 예..
// var TodoHeader = { template : '<div>header</div>' } ==> ES5방식 : var에 직접 담는다.
// import TodoHeader from './components/TodoHeader.vue' ==> ES6방식 : import로 vue파일을 가져온다.
export default {
  //데이터 속성 todoItems 선언
  data() {
    return {
      todoItems : []
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
  methods : {
    addTodo(todoItem) { //인자는 TodoInput컴포넌트에서 올려 보낸 할 일 텍스트 값.
       localStorage.setItem(todoItem,todoItem);  //로컬 스토리지에 데어터를 추가
       this.todoItems.push(todoItem);  //todoItems 데이터 속성에도 추가
    }
    ,removeTodo(todoItem, index) {
      //console.log(todoItem,index);
      localStorage.removeItem(todoItem); //로컬 스토리지의 데이터를 삭제하는 removeItem()
      this.todoItems.splice(index,1);  //배열의 해당 인덱스에서 1만큼 삭제.
      /// * 뷰 데이터 속성인 todoItems의 배열 요소를 제거하자마자 바로 뷰에서 자동으로 화면을 다시 갱신함.
      /// ==> 데이터 속성이 변하면 화면에 즉시 반영하는 뷰의 반응성 때문.
    }
    ,clearAll() {
      localStorage.clear(); //로컬 스토리지의 데이터를 모두 삭제
      this.todoItems = []; //todoItems의 데이터를 비움.
    }
  },
  //지역 컴포넌트 등록 방법
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
  body {
    text-align : center;
    background-color : #F6F6F8;
  }
  input {
    border-style : groove;
    width : 200px;
  }
  button {
    border-style : groove;
  }
  .shadow {
    box-shadow : 5px 10px 10px rgba(0,0,0,0.03)
  }
</style>
