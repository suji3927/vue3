<template>
  <NavbarC />
  <!-- props변수="보낼값" -->
  <Event :text="text" />

  <!-- $emit으로 전달받은 값은 $event로 받을 수 있다. -->
  <Movies 
    :movies="movies"
    @openModal="isModal=true; selectedMovie=$event"
    @increseLike="increseLike($event)"
  />

  <!-- 부모가 자식이 요청한 event를 전달 받아 값을 직접 바꿔준다. -->
  <Modal 
    :isModal="isModal" 
    :movies="movies" 
    :selectedMovie="selectedMovie"
    @closeModal="isModal=false"
  />
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
  import Movies from './components/Movies.vue';

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
        this.movies[index].like++
      }
    },
    components: {
      NavbarC: NavbarC,
      Modal: Modal,
      Event: Event,
      Movies: Movies,
    }
  }
</script>

<style>
  button {
    margin-top: 1rem;
  }

</style>
