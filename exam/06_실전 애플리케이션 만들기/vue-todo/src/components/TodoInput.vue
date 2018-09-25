<template lang="html">
  <div class="inputBox shadow">
    <!-- 인풋 박스에 텍스트를 입력함에 따라 newTodoItem의 값도 같이 갱신됨  -->
    <!-- v-on:keyup.enter:인풋박스에서 enter를 눌렀을 때 동작하는 속성 -->
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo"/>
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i> <!-- 어썸 아이콘의 + 아이콘을 추가 -->
    </span>
    <!-- modal --> 
    <modal v-if="showModal" @close="showModal = false">
      <!-- 모달 헤더 -->
      <h3 slot="header">경고</h3>
      <!-- 모달 푸터 -->
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요.
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>
</div>

  </div>

</template>

<script>
import Modal from './common/Modal.vue'  //Modal.vue 불러오기

export default {
  data() {
    return {
      newTodoItem : '',
      showModal : false // 모달 동작을 위한 플래그 값.
    }
  },
  methods : {
    addTodo() {
      //console.log(this.newTodoItem); //여기서 this는 해당 컴포넌트를 가리킴

      if(this.newTodoItem !== ""){ //인풋 박스의 입력 값이 있을때만 저장
         var value = this.newTodoItem && this.newTodoItem.trim(); //인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
//         localStorage.setItem(value,value);
         //TodoInput컴포넌트에서 App컴포넌트로 신호(이벤트)를 보내 App컴포넌트의 addTodo()메서드를 실행.
         this.$emit('addTodo',value);
         this.clearInput(); //인풋 박스의 입력 값을 초기화

      }else{
        this.showModal = !this.showModal; //텍스트 미입력 시 모달 동작
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components : {
    'modal' : Modal //모달 컴포넌트 등록
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
