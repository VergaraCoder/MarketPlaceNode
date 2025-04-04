# 🛍️ Marketplace API

Bienvenido a **Marketplace API**, una potente API backend diseñada para gestionar productos y servicios, con funcionalidades avanzadas como reserva de horarios sin solapamientos, mensajería privada en tiempo real y autenticación segura.

## 🚀 Características

### 🏪 Gestión de Productos y Servicios

- **CRUD completo**: Crear, obtener, actualizar y eliminar productos y servicios.
- **Filtros y búsquedas**: Encuentra lo que necesitas rápidamente.

### ⏳ Reservas Inteligentes de Servicios

- Los usuarios pueden **asignar horarios** para la prestación de un servicio.
- Se retornan los **horarios disponibles** automáticamente, evitando conflictos con reservas previas.

### 💬 Mensajería Privada en Tiempo Real

- Implementado con **Socket.io**.
- Comunicación directa entre vendedor y comprador tras la compra de un producto o servicio.

### 🔐 Autenticación y Seguridad

- **JWT con refresh tokens** para sesiones seguras.
- Protección de rutas y gestión de roles.

### 🧪 Testing y Calidad de Código

- **Testing con Jest** para garantizar la estabilidad del sistema.
- **Prettier & ESLint** para mantener un código limpio y estandarizado.

### 📄 Documentación Interactiva

- **Swagger** para explorar y probar la API de forma sencilla.

---

## 🛠️ Tecnologías Usadas

- **Node.js** + **Express.js**
- **TypeScript**
- **Socket.io**
- **JWT & Refresh Tokens**
- **Swagger** para documentación
- **Jest** para testing
- **Prettier & ESLint** para estándares de código
- **MySQL con TypeORM** como base de datos

---

## 🚀 Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/marketplace-api.git
   cd marketplace-api
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno en un archivo **.env**:

   ```env
  DB_HOST=<tu_host>
DB_PORT=<tu_puerto>
DB_USERNAME=<tu_usuario>
DB_PASSWORD=<tu_contraseña>
DB_DATABASE=<tu_bd>
JWT_SECRET=<tu_secreto>
CLOUD_NAME=<tu_cloud_name>
API_KEY_CLOUDINARY=<tu_api_key>
API_SECRET_CLOUDINARY=<tu_api_secret>
CLOUDINARY_URL=<tu_cloudinary_url>

   ```

4. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

---

## 🔍 Endpoints Principales

Consulta la documentación completa en **Swagger** en:

```
http://localhost:3000/api-docs
```

- **Productos**

  - `POST /products` - Crear un producto
  - `GET /products` - Obtener todos los productos
  - `PUT /products/:id` - Actualizar un producto
  - `DELETE /products/:id` - Eliminar un producto

- **Servicios**

  - `POST /services` - Crear un servicio con horario
  - `GET /services/available-times` - Consultar horarios disponibles

- **Mensajería**

  - `POST /messages` - Enviar un mensaje privado
  - `GET /messages/:conversationId` - Obtener mensajes de una conversación

- **Autenticación**

  - `POST /auth/register` - Registrar usuario
  - `POST /auth/login` - Iniciar sesión
  - `POST /auth/refresh` - Renovar token

---

## 🧪 Testing

Ejecuta las pruebas con Jest:

```bash
npm run test
```


🚀 ¡Construye tu propio marketplace con esta API poderosa y flexible!

