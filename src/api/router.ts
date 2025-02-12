import { Router } from 'express'
import routerUser from './routes/user.routes.ts'
import routerProduct from './routes/product.routes.ts'
import routerRoles from './routes/roles.routes.ts'
import routerAuth from './routes/auth.routes.ts'

const router: Router = Router()

router.use('/api', routerUser)
router.use('/api', routerProduct)
router.use('/api', routerRoles)
router.use('/api', routerAuth)

export default router
