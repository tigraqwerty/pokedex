# Prueba técnica de Movilidad Híbrida AtSistemas

El objetivo de esta prueba será hacer una app en @ionic/angular que consuma los servicios de la api pública [pokeapi](https://pokeapi.co)

# Tabla de Contenidos
- [Análisis Funcional](#Análisis-funcional)
- [PokeApi (API)](#PokeApi-(API))
- [Pantallas](#Pantallas)
    - [Home](#Home)
    - [Filter (Modal)](#Filter-(Modal))
    - [Detalle](#Filter-(Modal))
- [Se valorará positivamente](#Se-valorará-postivamente)
- [Entregable](#Entregable)


    
    

## Análisis funcional

Un cliente nos ha pedido que hagamos una pokédex. En la franquicia pokémon una pokédex es un terminal que permite ver la lista de pokémons y ver información sobre ellos.

La app contiene 2 pantallas, la lista y detalle. Y una modal para filtrar los pokémon por tipo.

## PokeApi (API)
La pokéapi es una API con autodescrubimiento, esto es que las própias llamadas te dan links a otras llamadas. 

Estos endpoints pueden ser útiles para la app:

* https://pokeapi.co/api/v2/pokemon --> lista páginada con todos los pokémon
* https://pokeapi.co/api/v2/type --> lista con todos los tipos de pokémon

Más información en:
https://pokeapi.co/docs/v2.html


## Pantallas

### Home Page
![home](img/home.png)

La pantalla home se compone de un un header superior con un botón que abre la modal de filtro y una **lista infinita con todos** los pokémon (actualmente la API devuelve 964).
Si se pulsa sobre uno de los items te lleva a la página de detalle


### Filter (Modal)
![filter](img/filter.png) ![filter selected](img/filter-selected.png)

La modal filter se compone de un header con el título y una lista con todos los tipos de pokémon. 
Al pulsar sobre uno de los tipos, la modal se cierra y se hace el filtrado.
En caso de volver a abrir la modal de filtro, tiene que salir la opción seleccionada. 
Si se vuelve a pulsar el tipo se deselecciona y se vuelve a la pantalla original.

Así quedaría la pantalla principal con los pokémons filtrados por tipo "fighting":


![home-filtered](img/home-filtered.png)


### Detalle
![detail](img/detail.png)

Pantalla con los siguientes datos:
- Imagen frontal (front_default), Imagen trasera (back_default)
- La especie
- El nombre
- Altura
- Peso

Puedes añadir los datos extras que tu quieras.


## Se valorará postivamente

- Que sea una aplicación funcional
- Cumplir las [reglas de estilo de angular](https://angular.io/guide/styleguide)
- Control de errores
- Lista de pokémon optimizada
- Tipar correctamente y hacer un correcto uso de las interfaces
- Uso de programación reactiva
- Internacionalización
- Modularización y uso de lazy-load para la carga de las pantallas
- Unit test de la pantalla principal
- Entregar una apk funcional

## Entregable

- Entregar el código del proyecto comprimido en ZIP. El nombre del archivo entregado tiene que ser NOMBRECANDIDATO_APELLIDOCANDIDATO_pruebaAT_vNUMEROVERSION.zip por ejemplo, paco_lopez_pruebaAT_v0.zip.

## Anexos

Se incluyen assets útiles para la app en /assets.


	 
