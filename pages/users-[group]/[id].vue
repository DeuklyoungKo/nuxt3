<template>
    <div>
        <h1>id 123123</h1>
        <h2>[{{$route.params.group}}]</h2>
        <h2>[{{$route.params.id}}]</h2>
    </div>
</template>

<script setup>
const route = useRoute()

console.log("route");
console.log(route);
console.log(route.params);

if (route.params.group === 'admins') {
  console.log('Warning! Make sure user is authenticated!')
}
</script>