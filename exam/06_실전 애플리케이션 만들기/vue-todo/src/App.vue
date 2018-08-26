<template>
  <div id="app">
    <!-- 등록한 컴포넌트 4개를 HTML에 표시 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
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
</style>
