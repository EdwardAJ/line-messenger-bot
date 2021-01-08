import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  return res.json({ foo: 'bar' })
})

export default router
