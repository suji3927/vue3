<template>
    <!-- 클래스명: 조건
     (flase가 되면 개발자도구에서 해당 클래스명('show')이 보이지 않는다.) -->
    <div class="event" :class="{show : isOpen}">
        <p>{{ text }}</p>
        <button @click="isOpen=false">X</button>
    </div>
</template>

<script>
export default {
    name: 'EventComponent',
    props: {
        text: String,   // 부모에게서 data 받아오기
    },
    data() {    // 클래스명 동적 추가를 위한 상태 변수 설정
        return {
            isOpen: true,
        }
    }
}
</script>

<style>
    .event {
        background: #444;
        color: #fff;
        padding: 10px 20px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        display: none;
    }

    /* 조건부 클래스 */
    .show {
        display: flex;
    }

    .event p {
        margin: 0;
    }

    .event button {
        margin: 0;
    }
</style>