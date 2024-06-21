<template>
  <NavbarC />
  <!-- props변수="보낼값" -->
  <Event :text="text" />
  <h1>영화 정보</h1>
    <div v-for="(item, index) in movies" :key="index">
      <figure>
        <img :src="`./assets/${item.imgUrl}`" :alt="item.title">
      </figure>
      <div class="info">
        <h3 :style="item.textRed">{{ item.title }}</h3>
        <p>개봉: {{ item.year }}</p>
        <p>장르: {{ item.category }}</p>
        <button @:click="increseLike(index)">좋아요</button> <span>{{ item.like }}</span>
        <p>
          <button @:click="isModal=true; selectedMovie=index">상세보기</button>
        </p>
      </div>
    </div>

    <Modal />
</template>

<script>
  // import { food, city } from './assets/movies'
  import movies from './assets/movies' // export default 사용 시 중괄호 없이 사용
  

  // export name과 상관없이 import 선언된 이름 그대로 사용됨
  // export name은
  // - 컴포넌트를 재귀적으로 구성할 때
  // - Vue 개발자 도구를 사용할 때
  import NavbarC from './components/Navbar.vue'
  import Modal from './components/Modal.vue'
  import Event from './components/Event.vue'

  export default {
    name: 'App',
    data() { // 상태변수
      return {
        isModal: false, // 부모 App이 가지고 있는 변수 (부모 컴포넌트에서 data 관리하는 게 일반적)
        like: 0,
        movies: movies, // import 한 데이터를 변수에 바인딩
        selectedMovie: 0,
        text: "넷플릭스"
      }
    },
    methods: {
      increseLike(index) {
        this.data[index].like++
      }
    },
    components: {
      NavbarC: NavbarC,
      Modal: Modal,
      Event: Event,
    }
  }
</script>

<style>
  button {
    margin-top: 1rem;
  }

</style>
