export default defineNuxtPlugin(() => {
    return {
      provide: {
        hello: (inNumber) => 'world'+inNumber*3
      }
    }
  })