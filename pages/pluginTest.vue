<template>
  <div>
    {{ $hello(1) }}
    <div>{{ $myPlugin() }}</div>
  </div>
</template>

<script setup>
// alternatively, you can also use it here
const hello = useNuxtApp()
console.log("hello");
console.log(hello);
console.log(hello.$hello(2));


const {$hello} = useNuxtApp()
console.log("$hello");
console.log($hello(3));
// console.log($hello());

</script>