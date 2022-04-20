<script setup>
const counter = useCounter() // Same as useState('counter')
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
  <p>Current counter: {{ counter }}</p>
</template>