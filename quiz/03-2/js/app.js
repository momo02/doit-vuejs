// 전역 컴포넌트와 지역 컴포넌트 등록하기




// 실습 #1 - 'todo-ooter' 컴포넌트 전역 등록
// <p>This is another global child componet</p>를 template으로 갖는 컴포넌트 등록
Vue.component('todo-footer',{
  template : '<p>This is another global child componet</p>'
})

var cmp = {
   template : '<p>This is another local child componet</p>'
}

var app = new Vue({
  el : '#app',
  data : {
      message : 'This is a parent component'
  },
  // 실습 #2 - 'todo-list' 컴포넌트 지역 등록
  // <p>This is another local child componet</p>를 template으로 갖는 컴포넌트 등록
  components : {
    'todo-list' : cmp
  }
})
