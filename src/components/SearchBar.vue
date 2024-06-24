<template>
    <div class="search-box">
        <!-- 입력한 값 받기 javascript문법($event.target.value) -->
        <!-- <input 
            type="search" 
            @input="inputText = $event.target.value"
            placeholder="검색어 입력"    
        > -->

        <!-- vue 문법(v-model="변수" - 사용자에게 입력받은 값 변수에 알아서 저장해준다.)
        단, 글자를 하나하나 입력할 때마다 감지가 됨
        즉, 글자가 다 입력되고 나서 실행되게 하려면 'change 이벤트'로 변경 필요-->
        <!-- <input 
            type="search" 
            v-model="inputText"
            placeholder="검색어 입력"    
        > -->

        <!-- change 이벤트 : 입력 후 엔터키를 치거나 확인 버튼을 누를 때 처리됨 -->
         <!-- 입력창 리셋 시 watch 이벤트가 작동하지 않는 이유는
         검사 대상인 inputText의 값이 변경된게 아니기 때문 -->
        <input 
            type="search" 
            @change="
                $emit('searchMovie', $event.target.value);
                inputText = $event.target.value; 
                $event.target.value='';
            "
            placeholder="검색어 입력"    
        >

        <button>검색</button>
    </div>
    <p>{{ inputText }}</p>
</template>
<script>
export default {
    name: 'SearchBarComponent',
    props: {
        movies: Array,   // 부모에게서 data 받아오기
    },
    data() {
        return {
            inputText: '',
        }
    },
    watch: {    
        // 특정 상태변수가 변경되는 것을 감지하는 hook(가로챔)
        // 1. 검사 대상 작성 : 매개변수 변경값 또는 변경값, 이전값
        // 검사할변수명(변경값) {
        //     로직
        // }
        // change 이벤트 또는 v-model 실행되고 watch가 감지

        inputText(title) {
            // 입력한 영화 제목이 데이터에 포함되는지 확인 - filter 함수 사용
            const findMovie = this.movies.filter(movie => {
                return movie.title.includes(title)
            })

            if (findMovie.length == 0) {
                alert('해당하는 자료가 없습니다.')
            }
        }

    }
}
</script>
<style>
    .search-box {
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .search-box input {
        padding: 5px 10px;
    }

    .search-box button {
        margin: 0;
    }
</style>