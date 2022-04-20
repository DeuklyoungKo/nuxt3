<template>
  <div>
    <h1>child.vue</h1>
    <h2>PROPS</h2>
    <h3>{{Props.foobar}}</h3>
    <h3>{{Props.abar}}</h3>
  </div>

</template>

<script setup>

const Props = defineProps(['foobar','abar'])

</script>