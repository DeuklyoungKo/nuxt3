<template>
  <div>
    <div class="header">header</div>
    <div class="Body"><slot /></div>
    <div class="footer">footer</div>
  </div>
</template>

<style scoped>
.header{
    border:1px solid red;
}
</style>