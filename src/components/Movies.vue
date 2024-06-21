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
        <button @:click="$emit('increseLike', index)">좋아요</button> <span>{{ item.like }}</span>
        <p>
          <!-- <button @:click="isModal=true; selectedMovie=index">상세보기</button> -->
           <!-- $emit() 2번째 인자로 값을 전달할 수 있다. -->
          <button @:click="$emit('openModal', index)">상세보기</button>
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesComponent',
    props: {
      movies: Array,
    },
    
}
</script>

<style>
    
</style>