import express, { Express } from 'express'
import router from './api/router.ts'
import { dbConnection } from './config/db/db.config.ts'
import { ErrorMiddleware } from './api/middlewares/error.middleware.ts'
import { runSeeders } from 'typeorm-extension'
import { SeederPriceMode } from './config/db/seeders/priceMode.seeder.ts'
import swaggerUi from 'swagger-ui-express';
import swaggerSpect from './swagger.ts';

const server: Express = express()

const StartServer = async () => {
  try {
    await dbConnection.initialize()
    await runSeeders(dbConnection, {
      seeds: [SeederPriceMode],
    })
    server.use(express.json())
    server.use(express.urlencoded({ extended: false }))
    server.use(router)

    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpect));

    server.use(ErrorMiddleware)
    server.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  } catch (err: any) {
    console.log(err)
  }
}

StartServer()
