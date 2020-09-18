
# ReactJS CSGO 9z team matches calendar

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Resumen descriptivo del proyecto:
  Calendario de partidos futuros y pasados utilizando la API gratis de pandascore.co
  En este proyecto se utilizan Styled Components, Fetch, Custom Hooks, hosting en firebase y Realtime database de firebase.
  
¿Que encuentro en la Web?:
- Fecha y horario de todos los partidos.
- Torneo.
- Fase del torneo.
- Nombre del torneo.
- Modalidad (bo1, bo3, bo5)
- Streaming oficial del partido (se habilita cuando el partido comience)
- Tarjeta con información del partido pasado.
- La temática sigue el esquema de colores de 9zteam.
- Estilos de Materialize.
 
## Descripción completa del proyecto 
  El proyecto está enfocado para mostrar información sobre los partidos futuros y pasados de 9z Team CS:GO de manera simple.  
  
  Lo que podemos observar en la parte superior de la Web es un banner simple con el Logotipo de 9z Team superpuesto a una gradiente hecha con CSS.
  
  El fondo de la Web es un patrón hecho con una imagen del mismo logotipo de 9z Team.
  
  Por parte del contenido, siempre se mostrará una tarjeta del último partido jugado, en ella podemos ver los logotipos y el nombre de ambos equipos que jugaron el partido, 
  como es de esperar siempre uno de ellos será 9z Team que se ubicará a la derecha. Del lado izquierdo tendremos el contrincante. 
  En el centro de esta tarjeta se ve el resultado del partido el cual es aplicado manualmente mediante una base de datos en Firebase, 
  esto se debe a que el principal data provider con el que trabaja la página, no ofrece resultado numérico del partido.
  Bajo el resultado tenemos la modalidad en la que se jugó ese partido (Mejor de 1, Mejor de 3, Mejor de 5).
  En la parte inferior de la tarjeta se encuentra una zona la cual si es presionada se desplegará una sección dentro de la misma tarjeta la cual tendrá información más             específica como el Mapa, Torneo, y la fecha en la cual se jugó el partido.
  
  Todos los partidos que se jugarán en el futuro tienen su propia tarjeta. Se organizan de fecha mas cercana (arriba) a mas lejana (abajo). 
  En cada tarjeta tenemos lo siguiente: 
  Al lado izquierdo se ubica el logotipo del contricante, a la derecha tenemos la sección de información la cual comienza con el nombre del torneo y bajo él se muestra ambos       equipos que disputaran dicho partido.
  Como información principal, se muestra la fase del torneo en la que se ubica el partido, fecha y hora en la que se juega y la modalidad (Mejor de 1, Mejor de 3, Mejor de 5).
  El dia que se juegue el partido, a la derecha de la fecha aparecerá un texto llamativo de color rojo indicando a la persona que el partido se juega "Hoy!"
  En la parte inferior de la tarjeta se encuentra una zona la cual si es presionada se abrirá el link al streaming oficial del partido, la zona estará activa cuando el partido     comience.
  
  En Sudamérica existen muchos torneos, algunos de ellos no estan registrados en la base de datos del data provider por lo tanto, la web no será capáz de mostrar ciertos           partidos.
  Si este caso ocurre, se mostrará un mensaje informativo al usuario indicando que no hay partidos registrados y bajo el un recuadro con noticias importantes sobre 9z Team.
  
  En el caso que falle algo de la Web, cargará normalmente con la diferencia que en lugar de mostrar la información mostrará una tarjeta indicando que hubo un error y un gran     banner diseñado por un fan de 9z Team por el concurso de Wallpapers.
  
  En la parte inferior de toda la Web se encuentra un Footer con la seña de los derechos reservados, el data provider con el que trabaja, mi firma y agradecimientos a personas     que aportaron en el proyecto.
  
  La Web tiene un formato vertical responsive el cual se adapta facilmente para cualquier dispositivo. 
  

## WEB LINK: https://zez-f8486.web.app/ 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## -Important!

API keys NOT inclued

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
