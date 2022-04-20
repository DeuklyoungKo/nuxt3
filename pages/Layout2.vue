


<template>
    <div>
        <h1>Layout Test</h1>
    </div>  
</template>

<script setup>

const title = "lay out test"

// useHead({
// //   titleTemplate: 'My App - %s', // or, title => `My App - ${title}`,
//   title: `My App - ${title}`, // or, title => `My App - ${title}`,
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
//   charset: 'utf-8',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   }
// })


definePageMeta({
    title:"layout2 test",
  layout: "logout",
});
</script>

