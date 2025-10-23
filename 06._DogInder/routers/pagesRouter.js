import { Router } from 'express'
import { matchesPage, frontpagePage } from '../util/pagesUtil.js'

const router = Router()

router.get('/frontpage', async (req, res) => {
  const page = frontpage
  res.send({ data: page })
})

export default router
