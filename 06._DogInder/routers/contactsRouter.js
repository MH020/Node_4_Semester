import { Router } from 'express'

const router = Router()

router.get('/contacts', async (req, res) => {
  const page = frontpage
  res.send({ data: page })
})

export default router; 
