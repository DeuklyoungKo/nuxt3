<template>
    <div>
        <h1>... slug</h1>
        <h2>[{{$route.params.slug}}]</h2>
    </div>
</template>

<script setup>
const route = useRoute()

console.log("route");
console.log(route);
console.log(route.params);

</script>