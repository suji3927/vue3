<template>
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
          <button @:click="isModal=true">상세보기</button>
        </p>
      </div>
    </div>

    <div class="modal" v-if="isModal">
      <div class="inner">
        <h3>Detail</h3>
        <p>영화 상세정보</p>
        <button @:click="isModal=false">닫기</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() { // 상태변수
      return {
        isModal: false,
        like: 0,
        movies: [
          {
            title: "노량",
            year: 2023,
            category: "액션, 드라마",
            textRed: "color: red",
            like: 0,
            imgUrl: 'poster1.jpg', // path는 index.html 기준
          },
          {
            title: "아쿠아맨",
            year: 2023,
            category: "판타지",
            like: 0,
            imgUrl: 'poster2.jpg',
          },
        ]
      }
    },
    methods: {
      increseLike(index) {
        this.data[index].like++
      }
    }
  }
</script>

<style>
  button {
    margin-top: 1rem;
  }

  .modal {
    background: rbga(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-self: center;
    align-items: center;
  }

  .modal .inner {
    background: #f0f1ff;
    width: 500px;
    padding: 20px;
    border-radius: 10px;
  }
</style>
