<template>
    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
        </nav>
</template>

<script>
export default {
    // 이름이 단순하면 에러 발생하는 경우가 있어서 + 'component' 사용
    name: 'NavbarComponent',
}
</script>

<style>
    .navbar {
        background: #000;
        padding: 20px;
    }

    .navbar a {
        color: #fff;
        text-decoration: none;
        padding: 10px;
    }
    
</style>