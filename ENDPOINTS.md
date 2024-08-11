# Documentación de Endpoints

Esta documentación describe los endpoints disponibles en la API para el registro e inicio de sesión de usuarios.

## 1. Endpoint: Registro de Usuario

**Ruta:** `POST /Log/register`  
**Descripción:** Permite a los usuarios registrarse en la base de datos con un nombre de usuario y una contraseña.  
**Método:** POST

**Cuerpo de la Solicitud:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Respuestas:**

Éxito (201 Created):
```json
{
  "message": "Usuario registrado exitosamente"
}
```
Error (400 Bad Request):
```json
{
  "message": "Error al registrar usuario",
  "error": "detalles del error"
}
```

**Ejemplo de Solicitud:**
curl -X POST http://localhost:3002/Log/register \
  -H "Content-Type: application/json" \
  -d '{"username": "nuevoUsuario", "password": "miContraseña"}'

**Ejemplo de Respuesta Exitosa:**
```json
{
  "message": "Usuario registrado exitosamente"
}
```

## 2. Endpoint: inicio de sesion

**Ruta:** `POST /Log/login`

**Descripción:** Permite a los usuarios iniciar sesión con nombre de usuario y contraseña.  

**Método:** POST

**Cuerpo de la Solicitud:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Respuestas:**
Éxito (200 OK):
```json
{
  "message": "Autenticación satisfactoria"
}
```

Error (400 Bad Request):
```json
{
  "message": "Usuario no encontrado" // o "Contraseña incorrecta"
}
```

Error (500 Internal Server Error):
```json
{
  "message": "Error en la autenticación",
  "error": "detalles del error"
}
```

**Ejemplo de Solicitud:**
curl -X POST http://localhost:3002/Log/login \
  -H "Content-Type: application/json" \
  -d '{"username": "usuarioExistente", "password": "miContraseña"}'


**Ejemplo de Respuesta Exitosa:**
```json
{
  "message": "Autenticación satisfactoria"
}
```

## 3. Endpoint Raíz

**Ruta:** `GET /`

**Descripción:** Endpoint de prueba para verificar que el servidor esté funcionando correctamente.

**Método:** GET

**Respuestas:**
Éxito (200 OK):
"Prueba respuesta del servidor"


**Ejemplo de Solicitud:**
curl -X GET http://localhost:3002/


**Ejemplo de Respuesta Exitosa:**
"Prueba respuesta del servidor"








