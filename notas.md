Como funciona la estructura de React

Tenemos 3 archivos

index.html
index.js
app.js

El archivo index.html rendereiza el contenido de index.js.
toda la aplicacion se va anexando al app.js atraves de componenentes.


---------------------------------------

COMPONENTES
1. class NombreComponente 
2. extends lo que hace es heredar las funciones del seguido
React.Component
3. Para tener un objeto Dinamico utilizamos las funciones constructor, super, this.
    Constructor(props): Cuando creamos una instancia de nuestro 
        componente utilizamos "Constructor" y "props" para definir sus propiedades
        hace variable a nuestro componente.

    super(props): Ejecutar otras funciones provenientes 
        de React para que las propiedades funcionen correctamente

    this.state :  Le damos al componente un estado inicial.
        Ejemplo:  Lo podemos hacer funcionar como un hover.
