<template>
    <div class="result">
        <p>counter is {{ counter }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.state.counter;
        }
    }
}
</script>

<style scoped>
    .result {
        margin: 100px;
    }
</style>
