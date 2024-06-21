<template>
  <h1>영화 정보</h1>
    <div>
      <!-- :속성명="데이터"  -->
      <h3 :style="textRed">{{ title }}</h3>
      <p>개봉: {{ year }}</p>
      <p>장르: {{ category }}</p>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() { // 상태변수
      return {
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
