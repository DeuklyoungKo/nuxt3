<template>
  <!-- some content -->
  <NuxtErrorBoundary @error="someErrorLogger">
    <!-- You use the default slot to render your content -->
    <template #error="{ error }">
      You can display the error locally here.
      <button @click="error = null">
        This will clear the error.1
      </button>
    </template>
  </NuxtErrorBoundary>
</template>