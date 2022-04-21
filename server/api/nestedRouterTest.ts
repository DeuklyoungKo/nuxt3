import { createRouter } from 'h3'

const router = createRouter()

router.get('/serverApiTest', () => 'serverApi Hello World')

export default router