# proyecto-mern

Sistema de administración de tareas desarrollado con el stack MERN (MongoDB, Express, React, Node.js), donde los usuarios pueden crear, actualizar, eliminar y visualizar tareas. Se utilizo Node.js, Express, MongoDB para base de datos y JWT para la autenticación.
La aplicacion esta disponible en el port:
http://localhost:3000
Repositorio front-end: https://github.com/rodrisebastian/proyect-mern-front.git

Hooks y servicios:
Autenticación y Gestión de Usuarios=
La autenticación está diseñada para registrar, autenticar y verificar usuarios mediante tokens JWT.
----------------------------
Verificación de Token:
verifyTokenRequest: Verifica si el token JWT es válido.
authMiddleware:  Verifica el token JWT y permite el acceso solo a usuarios autenticados.
------------------------------
JWT:
createAccessToken: Crea un token JWT con los datos del usuario, que se guarda en las cookies y se usa para validar las sesiones.

Gestión de Tareas=
La gestión de tareas permite a los usuarios crear, leer, actualizar y eliminar tareas. Las tareas están vinculadas a cada usuario y solo pueden ser accedidas por ellos.
-------------------------------
getTasks: Recupera todas las tareas asociadas al usuario autenticado.
createTask: Recibe los datos de la tarea (título, descripción, fecha) y crea una nueva tarea asociada al usuario.
getTask: Recupera una tarea específica utilizando su ID.
updateTask: Permite modificar una tarea existente, actualizando sus campos (título, descripción, fecha).
deleteTask: Elimina una tarea mediante su ID.
-----------------------------
Protección de Rutas=
authMiddleware,: Garantiza que solo los usuarios autenticados puedan interactuar con las tareas.
