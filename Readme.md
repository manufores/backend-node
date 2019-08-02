#Nodepop API

##Práctica WEB-API/Node.js/MongoDB

##Descripción de la API

Esta API proporciona servicios de venta de artículos de segunda mano, llamada Nodepop. Esta API podrá ser utilizada tanto para desarrolladores iOS como Android.

##Datos que facilita la API

- Lista de anuncios (paginada, con filtros de búsqueda)
El API permite tanto buscar anuncios como poner filtros por varios criterios.
- Lista de tags existentes (categorías de anuncios)


- Todo el acceso al API se realiza sobre HTTP, sobre la url http://localhost:3000
- Todos los datos son recibidos en formato JSON.
- El API sólo utiliza métodos GET y POST.

En cuanto a la paginación, si no se especifica un límite de anuncios en las consultas, se establece en 20 el número máximo de anuncios devueltos.

###Instalación

- Bajar la carpeta nodepop contenida en git
- Acceder a la carpeta nodepop utlizando el código: 
```sh
$ cd nodepop
```
- Para instalar las dependencias contenidas en el package.json, utilizar el comando:
```sh
$ npm install
```

###Arrancar servidor
Para arrancar el servidor usaremos el siguiente comando:
```sh
$ npm start
```

###Arrancar la base de datos
Para arrancar la base de datos usaremos el siguiente comando:
```sh
$ npm run installDB
```