<template>
  <h1>영화 정보</h1>
<!--   
    <div>
      <h3 :style="data[0].textRed">{{ data[0].title }}</h3>
      <p>개봉: {{ data[0].year }}</p>
      <p>장르: {{ data[0].category }}</p>
    </div>
    <div>
      <h3 :style="data[1].textRed">{{ data[1].title }}</h3>
      <p>개봉: {{ data[1].year }}</p>
      <p>장르: {{ data[1].category }}</p>
    </div>
 -->

    <div v-for="(item, index) in data" :key="index">
      <h3 :style="item.textRed">{{ item.title }}</h3>
      <p>개봉: {{ item.year }}</p>
      <p>장르: {{ item.category }}</p>
    </div>

    <hr>
    <p v-for="(item, index) in foods" :key="index">{{ item }}</p>
</template>

<script>
  export default {
    name: 'App',
    data() { // 상태변수
      return {
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
    }
  }
</script>

<style>

</style>
