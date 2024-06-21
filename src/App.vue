<template>
  <h1>영화 정보</h1>
    <div v-for="(item, index) in data" :key="index">
      <h3 :style="item.textRed">{{ item.title }}</h3>
      <p>개봉: {{ item.year }}</p>
      <p>장르: {{ item.category }}</p>

      <!-- 노량과 아쿠아맨의 좋아요 모두 ++됨 -->
      <!-- <button @:click="like++">좋아요</button> <span>{{ like }}</span> -->
      <button @:click="increseLike">좋아요</button> <span>{{ like }}</span>
    </div>

    <hr>
    <p v-for="(item, index) in foods" :key="index">{{ item }}</p>
</template>

<script>
  export default {
    name: 'App',
    data() { // 상태변수
      return {
        like: 0,
        foods: ["김밥", "순대", "만두"],
        data: [
          {
            title: "노량",
            year: 2023,
            category: "액션, 드라마",
            textRed: "color: red",
          },
          {
            title: "아쿠아맨",
            year: 2023,
            category: "판타지",
          },
        ]
      }
    },
    methods: {
      increseLike() {
        this.like++
      }
    }
  }
</script>

<style>

</style>
