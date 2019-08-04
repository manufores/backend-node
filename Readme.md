# Nodepop API

## Práctica WEB-API/Node.js/MongoDB

## Descripción de la API

Esta API proporciona anuncios de venta de artículos de segunda mano, llamada Nodepop. Esta API podrá ser utilizada tanto para desarrolladores iOS como Android.

## Datos que facilita la API

- Lista de anuncios (paginada, con filtros de búsqueda y ordenación)
- La API permite tanto buscar anuncios como poner filtros por varios criterios:
> por precio, se puede indicar un valor concreto o,
> también se puede especificar un rango de precios; por ejemplo entre 10-50.
> por tags,
> por nombre, 
> por venta, indicando si se vende o no, indicando true o false.

- Muestra también la lista de tags existentes (categorías de anuncios).


- Todo el acceso a la API se realiza sobre HTTP, a través de la url http://localhost:3000
- Todos los datos son recibidos en formato JSON.
- La API utiliza métodos GET para las consutas, POST para crear un anuncio, PUT para modificar un anuncio y DELETE para eliminar un anuncio. Para los métodos PUT y DELETE se tendrá que indicar el id del anuncio.

En cuanto a la paginación, si no se especifica un límite de anuncios en las consultas, se establece en 20 el número máximo de anuncios devueltos.

### Realizado con:

- Nodejs para el servidor
- MongoDB para la Base de Datos

### Instalación

- Bajar la carpeta nodepop contenida en git
- Acceder a la carpeta nodepop utlizando el código: 
```sh
$ cd nodepop
```
- Para instalar las dependencias contenidas en el package.json, utilizar el comando:
```sh
$ npm install
```

### Arrancar servidor
Para arrancar el servidor usaremos el siguiente comando:
```sh
$ npm start
```
También lo podemos arrancar en modo developer usando el siguiente código:
```sh
$ npm run dev
```

### Arrancar la base de datos
Para arrancar la base de datos usaremos el siguiente comando:
```sh
$ npm run installDB
```