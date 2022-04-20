<template>
  <div>

    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>{{ dynamic }} title</Title>
        <Meta name="description" :content="`My page's ${dynamic} description`" />
        <Link rel="preload" href="/test.txt" as="script" />
        <Style type="text/css" :children="styleString" />
      </Head>
    </Html>

    <div class="logout">Log Out</div>
    <div class="Body"><slot /></div>
    <div class="footer">footer</div>
  </div>
</template>

<script setup>
const dynamic = ref(49)
const styleString = ref('body { background-color: green; }')

</script>

<style scoped>
.logout{
    border:1px solid blue;
    width:50%;
}
</style>