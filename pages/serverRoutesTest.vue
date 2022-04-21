<template>
  <div>
    <h1>Server Routes Test
    </h1>
    <div>
        <h2>MatchingRouteParameters</h2>
        <p>{{MatchingRouteParameters}}</p>
    </div>
    <div>
        <h2>HandlingRequestswithBody</h2>
        <p>{{HandlingRequestswithBody}}</p>
    </div>
    <div>
        <h2>AccessRequestCookies</h2>
        <p>
            <div v-for="(value, name, index) in AccessRequestCookies" :key="index">
                {{value}} : {{name}}
            </div>

            <!-- {{AccessRequestCookies}} -->
        </p>
    </div>        
  </div>
</template>

<script setup>

let MatchingRouteParameters = ref("")
let HandlingRequestswithBody = ref("456")
let AccessRequestCookies = ref({})

MatchingRouteParameters.value = await $fetch('/api/hello/nuxt');
console.log("await $fetch('/api/hello/nuxt')");
console.log(MatchingRouteParameters);


console.log("$fetch('/api/submit', { method: 'post', body: { test: 123 } })");
$fetch('/api/submit', { method: 'post', body: { test: 123 } }).then((data) =>{
    HandlingRequestswithBody.value = data.body.test
})


const {data} = await useFetch('/api/submit', { method: 'post', body: { test: 123 } });
console.log("data");
console.log(data.value.body.test);


// console.log(data.value);


$fetch('/api/cookies').then(data => {
    console.log("$fetch('/api/cookies'");    
    console.log(data);
    AccessRequestCookies.value = data.cookies
    console.log(AccessRequestCookies);
    console.log(AccessRequestCookies.value);

})


</script>

