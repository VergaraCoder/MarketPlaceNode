import swaggerJsDoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// IMPORT SCHEMES
import UserScheme from './swagger/schemas/user.schemes.ts';
import ServiceScheme from './swagger/schemas/service.scheme.ts';
import ScheduleScheme from './swagger/schemas/schedule.scheme.ts';
import ProductScheme from './swagger/schemas/product.scheme.ts';
import RoleScheme from './swagger/schemas/role.scheme.ts';

// IMPORT EXAMPLES
import ExamplesUser from './swagger/examples/user.example.ts';
import ExamplesService from './swagger/examples/service.example.ts';
import ExampleSchedule from './swagger/examples/schedule.example.ts';
import ExampleRole from './swagger/examples/role.example.ts';
import ExampleProduct from './swagger/examples/product.example.ts';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ALO',
      version: '0.0.1',
    },
    components: {
      schemas: {
        // USER SCHEME
        User: UserScheme,

        // SERVICE SCHEME
        Service: ServiceScheme,

        // SCHEDULE SCHEME
        Schedule: ScheduleScheme,

        // PRODUCT SCHEME
        Product: ProductScheme,

        // ROLE SCHEME
        Role: RoleScheme,
      },
      examples: {
        // EXAMPLES FOR ALL PATCH OPERATION
        ExamplePatch: {
          summary: 'Example when one user is updated',
          value: true,
        },

        // EXAMPLES FOR ALL DELETE OPERATION
        ExampleDelete: {
          summary: 'Example when one user is delete',
          value: true,
        },

        // EXAMPLES FOR ALL 500 ERROR
        ExampleError500: {
          summary: 'Example error 500 ',
          value: {
            status: 500,
            timeStamp: new Date(),
            message: 'INTERNAL SERVER ERROR',
          },
        },

        // EXAMPLES USER
        ...ExamplesUser,

        // EXAMPLES OF THE SERVICE
        ...ExamplesService,

        // EXAMPLES SCHEDULES
        ...ExampleSchedule,

        // EXAMPLES ROLES
        ...ExampleRole,

        // EXAMPLES PRODUCTS
        ...ExampleProduct,
      },
    },
  },
  apis: [path.join(__dirname, '/api/routes/*')],
};

const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;
