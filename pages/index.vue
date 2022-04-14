<template>
    <div>
        <h1>Hello world!</h1>
        <LazynewBody v-if="show" />
        <button v-if="!show" @click="show = true">Show List</button>
        <br>
        <NuxtLink to="/login">login</NuxtLink>
        <br>
    </div>
</template>

<script setup>
import {NuxtLink} from '#components'

const route = useRoute()

let show = ref(false)

console.log(route);
// console.log(this.$route);
</script>


<style scoped>
.redBorder{
  border:solid red 1px;
}
</style>