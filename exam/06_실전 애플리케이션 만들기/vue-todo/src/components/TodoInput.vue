<template lang="html">
  <div class="inputBox shadow">
    <!-- 인풋 박스에 텍스트를 입력함에 따라 newTodoItem의 값도 같이 갱신됨  -->
    <!-- v-on:keyup.enter:인풋박스에서 enter를 눌렀을 때 동작하는 속성 -->
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo"/>
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i> <!-- : 어썸 아이콘의 + 아이콘을 추가 -->
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem : ''
    }
  },
  methods : {
    addTodo() {
      //console.log(this.newTodoItem); //여기서 this는 해당 컴포넌트를 가리킴

      //입력받은 텍스트를 로컬 스토리지에 저장.
      //setItem은 로컬 스토리지에 데이터를 추가하는 API. API형식은 키,값 형태
      //저장 기능을 최대한 단순하게 하기위해 키,값 모두 입력받은 텍스트로 지정.
      if(this.newTodoItem !== ""){ //인풋 박스의 입력 값이 있을때만 저장
        var value = this.newTodoItem && this.newTodoItem.trim(); //인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
        localStorage.setItem(value,value);
        this.clearInput(); //인풋 박스의 입력 값을 초기화
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}

//cf. 로컬스토리지에 저장되었는 지 확인하는 방법
//크롬 개발자 도구 Application > Local Storage > 현재URL 클릭해 확인.
</script>

<style scoped>
  input:focus {
    outline: none; /* 인풋박스 포커스됬을때 생기는 선 스타일 없애기 */
    /*1px solid red 와 같이 지정할 수도 있음*/
  }
  .inputBox {
    background:  white;
    height: 50px;
    line-height: 50px; /*인풋 박스에 입력되는 텍스트의 중앙 정렬을 위해 설정*/
    border-radius: 5px;
  }
  .inputBox input {
    border-style :  none;
    font-size : 0.9rem;
  }
  .addContainer {
    float : right;
    background:  linear-gradient(to right,#6478FB,#8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color : white;
    vertical-align: middle;
  }
</style>
