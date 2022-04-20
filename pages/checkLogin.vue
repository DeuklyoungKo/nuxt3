<template>
    <h1>check login</h1>
</template>

<script setup>
definePageMeta({
  middleware: "auth"
  // or middleware: 'auth'
})
</script>