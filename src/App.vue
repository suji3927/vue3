<template>
  <h1>영화 정보</h1>
    <div v-for="(item, index) in data" :key="index">
      <h3 :style="item.textRed">{{ item.title }}</h3>
      <p>개봉: {{ item.year }}</p>
      <p>장르: {{ item.category }}</p>
      <button @:click="increseLike(index)">좋아요</button> <span>{{ item.like }}</span>
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
            like: 0
          },
          {
            title: "아쿠아맨",
            year: 2023,
            category: "판타지",
            like: 0
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

</style>
