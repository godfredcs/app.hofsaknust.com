<template>
    <div>
        <button @click="increment">Increase</button>
        <button @click="decrement">Decrease</button>
    </div>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$store.state.counter++;
        },
        decrement() {
            this.$store.state.counter && this.$store.state.counter--;
        }
    }
}
</script>

