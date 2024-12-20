# proyecto-mern

Sistema de administración de tareas desarrollado con el stack MERN (MongoDB, Express, React, Node.js), donde los usuarios pueden crear, actualizar, eliminar y visualizar tareas. Se utilizo Node.js, Express, MongoDB para base de datos y JWT para la autenticación.
La aplicacion esta disponible en el port:
http://localhost:4000
Repositorio front-end: https://github.com/rodrisebastian/proyect-mern-front.git

hooks y servicios:
Autenticacion y gestion de usuarios=
Verificacion de token:
verifyTokenRequest: verifica si el token JWT es valido.
authMiddleware: verifica el token JWT y permite el acceso solo a usuarios autenticados.

JWT=
createAccesssToken: crea un token JWT con los datos del usuarios, se guarda en las cookies y se validan las sesiones.

Gestion de Tareas= (crear, leer, actualizar y eliminar tareas) 
getTasks: recupera todas las tareas asociadas al usuario autenticado.
createTask: recibe los datos de la tarea (titulo, descripcion, fecha) y crea una nueva tarea asociada al usuario.
getTask: recupera una tarea especifica utilizando su ID.
updateTask: Permite modificar una tarea existente, actualizando sus campos (titulo, descripcion, fecha).
deleteTask: elimina una tarea mediante su ID.

Proteccion de Rutas=
authMiddleware: garantiza que sololos usuarios autenticados puedan interactuar con las tareas.

Estructura de directorios:
proyecto-mern/
├── src/
│   ├── api/ // archivos para realizar solicitudes
│   │   ├── auth.js
│   │   ├── axios.js
│   │   └── tasks.js
│   ├── controllers/ // controladores para manejar las solicitudes
│   │   ├── authController.js
│   │   └── tasksControllers.js
│   ├── libs/ // librerias personalizadas
│   │   └── jwt.js
│   ├── middlewares/ // validaciones y autenticacion
│   │   ├── authMiddleware.js
│   │   └── validatorMiddleware.js
│   ├── models/ // modelos que interactuan con la base de datos
│   │   ├── taskModel.js
│   │   └── userModel.js
│   ├── routes/ 
│   │   ├── authRoutes.js
│   │   └── tasksRoutes.js
│   ├── schemas/ // validacion de datos
│   │   ├── authSchema.js
│   │   └── taskSchema.js
│   ├── app.js // configuracion principal
│   ├── config.js
│   ├── db.js // conexion a la base de datos
│   └── index.js // entrada de la aplicacion
├── .env // variables de entorno
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json // dependencias y scripts
└── README.md // documentacion
