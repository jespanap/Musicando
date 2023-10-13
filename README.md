
# Musicando

Un CRUD de canciones con API RESTful

Musicando es un proyecto de creación de canciones mediante artistas, álbumes y géneros ya predispuestos en la base de datos. Tiene las vistas donde se puede ver el listado de las canciones, editar las mismas, una de detalle de canción y permite eliminarlas incluso.

También se hizo el uso de API RESTful para crear endpoints que permitan visualizar la cantidad de canciones con todas sus propiedades y los géneros incluso.

Tecnologías utilizadas

ExpressJS
NodeJS
JavaScript
EJS
HTML
CSS
MySQL
Sequelize
Instalación

Para instalar Musicando, siga estos pasos:

Clone el repositorio de GitHub:
git clone https://github.com/jespanap/Musicando.git
Instale las dependencias:
npm install
Cree un archivo .env y añada las siguientes variables de entorno:
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=Musicando
Inicie el servidor:
npm test
npm start
Uso

Para usar Musicando, abra un navegador y vaya a la siguiente dirección:

http://localhost:3000
API RESTful

La API RESTful de Musicando se encuentra en la siguiente dirección:

http://localhost:3000/api
Para obtener una lista de todas las canciones, haga una solicitud GET a la siguiente URL:

http://localhost:3000/api/canciones
Para obtener una canción específica, haga una solicitud GET a la siguiente URL:

http://localhost:3000/api/canciones/:id
Para crear una nueva canción, haga una solicitud POST a la siguiente URL:

http://localhost:3000/api/canciones
El cuerpo de la solicitud debe ser una JSON con la siguiente estructura:

{
  "title": "Título de la canción",
  "artist": "Artista",
  "album": "Álbum",
  "genre": "Género"
}
Para actualizar una canción, haga una solicitud PUT a la siguiente URL:

http://localhost:3000/api/songs/[id]
El cuerpo de la solicitud debe ser una JSON con la siguiente estructura:

{
  "title": "Título de la canción",
  "artist": "Artista",
  "album": "Álbum",
  "genre": "Género"
}
Para eliminar una canción, haga una solicitud DELETE a la siguiente URL:

http://localhost:3000/api/songs/[id]
Mejoras futuras

Agregar autenticación para proteger la API RESTful.
Agregar pruebas unitarias y de integración.
Agregar documentación de la API RESTful.
Agregar soporte para más idiomas.
Conclusiones

Musicando es un proyecto simple pero útil que demuestra cómo crear un CRUD de canciones con API RESTful.

