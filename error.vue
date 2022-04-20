<template>
    <div>
        <h1>error code : {{error.statusCode}}</h1>
        <h2>error detail</h2>
        <div class="error-detail">error code : {{error}}</div>
        <button @click="handleError">Clear errors</button>
    </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

</script>

<style scoped>
.error-detail{
    color:red;
    margin-bottom:40px;
}
</style>