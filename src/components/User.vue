<template>
    <div>
        <h1 class="red">
            User 페이지
            <p>id :: {{ $route.params.id }}</p>
            <p>{{ text }}</p>
        </h1>
    </div>
</template>
<script>
export default {
    name: "UserComponent",
    data() {
        return {
            text: "",
        };
    },
    created() {
        this.$watch(
            () => this.$route.params.id,
            (newId, oldId) => {
                this.newId = newId;
                this.oldId = oldId;
            }
        );
    },
    mounted() {
        this.text = `mounted!! ${this.$route.params.id}`;
    },
};
</script>
<style>
.red {
    color: red;
}
</style>
