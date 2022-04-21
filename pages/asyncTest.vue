<script setup>
const dataResult = await useAsyncData('count', () => $fetch('/api/count'))
const { data } = dataResult
console.log(dataResult);
console.log(data);
console.log(dataResult.data);
</script>

<template>
  Page visits: {{ data }}
</template>