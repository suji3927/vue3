<template>
    <div class="modal" v-if="isModal">
      <div class="inner">
        <h3>{{ movies[selectedMovie].title}}</h3>
        <p>영화 상세정보</p>
        <button @:click="isModal=false">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ModalComponent',
    
}
</script>

<style>
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