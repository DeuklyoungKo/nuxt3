
<template>
  <div>
    middlewareTest
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>