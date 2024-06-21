<template>
  <h1>영화 정보</h1>
    <div>
      <!-- :속성명="데이터"  -->
      <h3 :style="textRed">{{ title }}</h3>
      <p>개봉: {{ year }}</p>
      <p>장르: {{ category }}</p>
    </div>
<!-- 
    <p>{{ foods[0] }}</p>
    <p>{{ foods[1] }}</p>
    <p>{{ foods[2] }}</p>
     -->

    <p v-for="(item, index) in foods" :key="index">{{ item }}</p>
</template>

<script>
  export default {
    name: 'App',
    data() { // 상태변수
      return {
        foods: ["김밥", "순대", "만두"],
        title: "노량",
        year: 2023,
        category: "액션, 드라마",
        textRed: "color: red",
      }
    }
  }
</script>

<style>

</style>
