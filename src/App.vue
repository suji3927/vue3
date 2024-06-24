<template>
  <NavbarC />
  <SearchBar :movies="movies_temp" @searchMovie="searchMovie($event)"/>
  <p>
    <button @click="showAllMovies">전체보기</button>
  </p>
  <!-- props변수="보낼값" -->
  <Event :text="text" />

  <!-- $emit으로 전달받은 값은 $event로 받을 수 있다. -->
  <Movies 
    :movies="movies_temp"
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
  import Movies from './components/Movies.vue'
  import SearchBar from './components/SearchBar.vue'

  export default {
    name: 'App',
    data() { // 상태변수
      return {
        isModal: false, // 부모 App이 가지고 있는 변수 (부모 컴포넌트에서 data 관리하는 게 일반적)
        like: 0,
        movies: movies, // import 한 데이터를 변수에 바인딩
        // spread operator : 배열 복사 
        // -> 배열을 직접 대입 시 복사본에서 값 변경하면 원본 데이터도 같이 변경됨
        // 방지 목적으로 'spread operator' 사용
        movies_temp: [...movies], // 사본
        selectedMovie: 0,
        text: "넷플릭스 Event"
      }
    },
    methods: {
      increseLike(id) {
        // id가 일치하는 데이터의 좋아요를 증가시킨다.
        this.movies.find(movie => {
          if(movie.id == id) {
            movie.like++
          }
        })
      },
      searchMovie(title) {
        // 영화 제목이 포함된 데이터를 가져온다.
        this.movies_temp = this.movies.filter(movie => {
          return movie.title.includes(title)
        })
      },
      showAllMovies() {
        this.movies_temp = [...this.movies]
      }

    },
    components: {
      NavbarC: NavbarC,
      Modal: Modal,
      Event: Event,
      Movies: Movies,
      SearchBar: SearchBar,
    }
  }
</script>

<style>
  button {
    margin-top: 1rem;
  }

</style>
