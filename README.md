# frontend-resources package
Este paquete contiene los elementos visuales que utilizamos en los proyectos de motivus

## Instalar paquete
Para instalar el paquete se requiere que cree un archivo .npmrc en la raíz del proyecto y el contenido del archivo debe contener lo siguiente.

```
@m0tivus:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

Para crear tu token debes ir a las opciones de tu usuario y seleccionar Settings -> Developer Settings -> Personal Access Tokens y generar un nuevo token que permita leer paquetes.

Al reemplazar el token generado en YOUR_TOKEN del archivo .npmrc, podrás instalar el paquete con el siguiente comando.

```
npm install @m0tivus/frontend-resources
```
## Requisitos para usar el paquete

Para llamar a asPage es necesario que esté envuelto en un ThemeProvider. Y para llamar a ResourcesAsTable es necesario que esté envuelto en un SnackBarProvider. 

```jsx
<ThemeProvider theme={theme}>
    <SnackbarProvider>
        ...
    </SnackbarProvider>
</ThemeProvider>
```
## Componentes

### ResourcesAsTable

Renderiza una tabla, con opciones para editar y eliminar. Ejemplo:

```jsx
import { ResourcesAsTable } from '@m0tivus/frontend-resources'

//Model fields y funciones agregar, editar, eliminar
const model= {
    fields: [
      { name: 'Nombre', field: 'name' },
      { name: 'Precio unitario', field: 'unit_price', type: 'currency' },
    ],
    //Funciones añadir, editar, eliminar
    create: //recibe data, crea un elemento
    edit: //recibe id y data, edita un elemento
    remove: //recibe id, elimina un elemento 
    all: //obtiene todos los datos del modelo
  }

//Cada resource debe tener id asociado, los campos deben corresponder a los fields del modelo 
const resources =[
    { id: 1, name: 'Elemento 1', unit_price: 2121 },
    { id: 2, name: 'Elemento 2', unit_price: 121 },
  ]
const title = "title"
const parentSelections = [] 
  
...

return(
    <ResourcesAsTable  model={model} resources={resources} title={title} parentSelections={parentSelections} allowCreation={false} refreshData={/* Función que obtiene a resources */} s
    />
)

```

### asPage

Envuelve un componente en un contenedor.

```jsx
import { asPage } from '@m0tivus/frontend-resources'

const Page = asPage({ title: 'Title' })(Component)
//Las props son las que usa Component
<Page props />
```

## Publicar una nueva version

Si eres de motivus y necesitas modificar este paquete, debes loguearte en el registro

```
npm login --registry=https://npm.pkg.github.com/
```
Donde usuario es tu usuario de github y password es el token generado

Para publicar una nueva versión del paquete se deben seguir los pasos:

- Modificar la version de package.json en el archivo package.json de la raiz del proyecto a una más reciente
- Ejecutar <code>npm run build</code> en la raiz del proyecto 
- Ejecutar <code> cd dist </code>
- Ejecutar <code>npm publish</code> 
- Realizar un push al repositorio (desde la raiz!)