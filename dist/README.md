# frontend-resources package
Este paquete contiene los...

## Instalar paquete
Para instalar el paquete se requiere que cree un archivo .npmrc en la raíz del proyecto y el contenido del archivo debe debe contener lo siguiente.

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
