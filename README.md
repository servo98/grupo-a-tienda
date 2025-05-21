# grupo-a-tienda

## Rutas del Backend

| Ruta                 | Pública/Privada | Método | Body                                                                              | Posibles Respuestas                                              |
| -------------------- | --------------- | ------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `/api/auth/register` | Pública         | POST   | `{ "name": string, "email": string, "password": string }`                         | `201 Created`, `400 Bad Request`                                 |
| `/api/auth/login`    | Pública         | POST   | `{ "email": string, "password": string }`                                         | `200 OK` (token de acceso), `401 Unauthorized`                   |
| `/api/products`      | Pública         | GET    | N/A                                                                               | `200 OK` (lista de productos)                                    |
| `/api/products/:id`  | Pública         | GET    | N/A                                                                               | `200 OK` (detalle del producto), `404 Not Found`                 |
| `/api/products`      | Privada         | POST   | `{ "name": string, "price": number, "description": string, "stock": number }`     | `201 Created`, `400 Bad Request`, `401 Unauthorized`             |
| `/api/products/:id`  | Privada         | PUT    | `{ "name"?: string, "price"?: number, "description"?: string, "stock"?: number }` | `200 OK`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found` |
| `/api/cart`          | Privada         | GET    | N/A                                                                               | `200 OK` (contenido del carrito), `401 Unauthorized`             |
| `/api/cart`          | Privada         | POST   | `{ "productId": string, "quantity": number }`                                     | `201 Created`, `400 Bad Request`, `401 Unauthorized`             |
| `/api/cart/:id`      | Privada         | PUT    | `{ "productId": string, "quantity": number }`                                     | `200 OK`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found` |
| `/api/orders`        | Privada         | GET    | N/A                                                                               | `200 OK` (lista de órdenes), `401 Unauthorized`                  |
| `/api/orders`        | Privada         | POST   | `{ "cartId": string, "address": string }`                                         | `201 Created`, `400 Bad Request`, `401 Unauthorized`             |

## Rutas del Frontend

| Ruta                       | Descripción                               | Requiere Autenticación |
| -------------------------- | ----------------------------------------- | ---------------------- |
| `/`                        | Página principal con listado de productos | No                     |
| `/login`                   | Página de inicio de sesión                | No                     |
| `/register`                | Página de registro de usuario             | No                     |
| `/product/:id`             | Detalle de un producto específico         | No                     |
| `/cart`                    | Página del carrito de compras             | Sí                     |
| `/checkout`                | Página de confirmación de compra          | Sí                     |
| `/orders`                  | Historial de órdenes del usuario          | Sí                     |
| `/admin/products`          | Gestión de productos (admin)              | Sí                     |
| `/admin/products/:id/edit` | Edición de un producto (admin)            | Sí                     |

<!-- Crear Image de frontend -->

docker build -t front-img:latest ./frontend

<!-- Crear Image de backend -->

docker build -t back-img:latest ./backend

<!-- Descargar Image de mongo -->

docker pull mongo:latest

<!-- Crear contenedor de frontend -->

docker run -d --name front-expuesto -p 5173:5173 front-img:latest

<!-- Crear network tienda-net -->

docker network create tienda-net

<!-- Crear volume tienda-volume -->

docker volume create tienda-volume

<!-- Crear contenedor de base de datos -->

docker run -d --name tienda-db --network tienda-net -v tienda-volume:/data/db mongo:latest

<!-- Crear contenedor de backend-->

docker run -d --name back-expuesto --network tienda-net -p 8080:8080 -e MONGO_URI="mongodb://tienda-db:27017/tiendaDBLocal" back-img:latest
