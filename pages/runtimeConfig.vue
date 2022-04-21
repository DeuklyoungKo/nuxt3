<template>
  <div>
    <h1>runtimeConfig
    </h1>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

console.log("runtimeConfig")
console.log(runtimeConfig)
console.log("runtimeConfig.public")
console.log(runtimeConfig.public)


console.log("check process.server")
if (process.server) {
  console.log('API runtimeConfig:', runtimeConfig.apiSecret)
  console.log('API NUXT_PUBLIC_BASE_URL:', runtimeConfig.NUXT_PUBLIC_BASE_URL)
}

</script>
