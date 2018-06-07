<template>
    <div>
        <h1>Hello World</h1>
        <app-result></app-result>
        <app-counter></app-counter>
    </div>
</template>

<script>
import Counter from './Counter'
import Result from './Result'

export default {
    components: {
        appCounter: Counter,
        appResult: Result
    }    
}
</script>

<style scoped>

</style>
