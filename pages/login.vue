<template>
<div>
  <LazynewLayoutTheHeader></LazynewLayoutTheHeader>
  <component :is="bodyable ? newBody : 'hr'"></component>
  <Content1></Content1>
  <NuxtLink to="/">home</NuxtLink>
</div>  
</template>

<script setup>

import {NuxtLink, Content1} from '#components'

const newBody = resolveComponent('newBody')
let bodyable = ref(true)

console.log("Content1")
console.log(Content1.__file)
</script>