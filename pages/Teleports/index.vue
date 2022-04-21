<template>
  <NuxtExampleLayout example="app/teleport">
    <div>

        <h1>SSR Teleport title</h1>

      <!-- SSR Teleport -->
      <Teleport to="body">
        SSR Teleport
      </Teleport>

      <!-- Client Teleport -->
      <ClientOnly>
        <Teleport to="body">
          <div>
            Hello from a client-side teleport!
          </div>
        </Teleport>
      </ClientOnly>

      <!-- Modal Example -->
      <BodyTeleport />
    </div>
  </NuxtExampleLayout>
</template>