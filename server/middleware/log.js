export default defineEventHandler((event) => {
  console.log('running global middleware')
  console.log('New request: ' + event.req.url)
})