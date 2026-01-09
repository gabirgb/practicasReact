// NODE.JS -> Entorno de ejecución de js que permite ejecutar código fuera del navegador. Esto permite que js también funcione del lado de servidor, interactualdo directamente con el sist operativo y extendiendo su potencial.

// NPM -> "Node package manager": es la herramienta que acompaña a Node.js para la gestión de paquetes y módulos. NPM permite buscar, descargar, e instalar módulos de terceros
- simplificando la integración de librerías
- no es necesario reinventar la rueda, el modelo se basa en reutilizacion desde pequeñas utilidades hasta frameworks completos.
- gestion de dependencias centralizada.
- crear y ejecutar scripts personalizados, lo cual facilita la automatización de tareas comunes como el inicio del servidor, la compilación de código, y la ejecución de pruebas.

// Polyfills: son parches de código que permiten que aplicaciones modernas creadas con frameworks como React puedan ser ejecutadas sin errores en dispositivos más viejos que no disponen de la tecnología necesaria. Se reemplaza el código moderno por una version más rústica.
// Transpiling: es el proceso de convertir código de un lenguaje a otro lenguaje. En Vite usamos Babel como transpilador para convertir JavaScript moderno (ES6+) a una versión más antigua del lenguaje para asegurar su compatibilidad con navegadores que aún no soportan las últimas funcionalidades y crear los polyfills de forma automática.

// Vite: es un empaquetador más moderno que Webpack.

// COMPONENTES
// Beneficios:
● Reutilización del código
● Separación de responsabilidades: Cada pieza del código tiene una tarea clara, lo que mejora la comprensión y facilita su prueba.
● Mejor rendimiento: React solo actualiza los componentes que cambian, sin recargar toda la página.
● Facilita el testing: Su aislamiento permite probarlos individualmente con mayor facilidad.

// Dos tipos de componentes (separación de Presentación y Lógica)
- Stateless Components/ Componentes de presentación: se encargan exclusivamente de cómo se ve algo. No manejan datos ni lógica compleja: solo muestran lo que reciben por props. No dependen de fuentes de datos externas. Tienen poco o ningún estado.
- Statefull Components/ Componentes contenedores: gestionan el estado y la lógica del negocio. Se encargan de obtener datos, procesarlos y pasarlos a los componentes de presentación. Manejan estados y eventos. Controlan la comunicacion con los otros componentes.

**# Clase 01 - Instalacion y configuracion**



Para crear el 1er proyecto:



\- npm create vite@latest

&nbsp; el @ es para indicar la version, tambien podia ser @1.2, etc...

&nbsp; Con esto Vite CREA un nuevo proyecto y carpeta.

\- Por ahora vamos a crear: react/ javascript/ no/ no

\- Al terminar entrega estos 3 comandos para ejecutar:

&nbsp; -- cd react-proyecto01 -> nos pide q abramos el directorio donde creamos nuestro proyecto

&nbsp; -- npm install

&nbsp; -- npm run dev



1\. eslint.config.js - ESLint es una herramienta para detectar errores en js que x lo gral viene integrada en los IDE. Para usarlo hay q iniciarlo: https://eslint.org/

2\. .gitignore - para avisar qué archivos queremos q git ignore, van a ser varios porque hay carpetas de modulos y cosas pesadas q no se suben a git.

3\. package.json - el archivo q nos interesa, es el mapa del proyecto de NodeJs. Es toda la informacion q necesita Node para crear el proyecto, por ej dependencias, librerias, etc.. Esto directamente las vincula, entonces no hace falta q yo vaya al "index.html" xej y vincular con una etiqueta script> todos los archivos js q vaya a usar.

&nbsp;  Todo proyecto de Node tiene dependencias. Si nosotros vamos a trabajar con React, vamos a ver que en este archivo aparecen las dependencias necesarias para poder usar React.

&nbsp;  Node - librería de js

&nbsp;  React Js -> framework frontend para web

&nbsp;  React Native -> framework para mobile



4\. Para instalar todas estas dependencias se hace con un comando q se llama: npm install

&nbsp;  Esto va a instalar las dependencias, y las dependencias de esas mismas dependencias...

&nbsp;  ESTE COMANDO HAY Q EJECUTARLO CON LA CONSOLA EN LA MISMA RUTA DONDE ESTÁ EL ARCHIVO PACKAGE.JSON, si no la consola no sabe que dependencias instalar xq no tiene acceso a "dependencies" dentro de la info del proyecto



El package-lock.json es similar a package.json, solo que tiene la info de todos los módulos. Este archivo no se toca!



5\. npm run dev - este comando le da la orden a Vite para q levante el servidor local para poder ver los cambios de React en tiempo real. Tambien es importante q el comando lo ejecutemos en la misma ruta donde se encuentra package.json porque va a buscar en "scripts" la info para correrlo. El comando nos devuelve la siguiente info:



➜ Local: http://localhost:5173/

➜ Network: use --host to expose

➜ press h + enter to show help



Lo vamos a ejecutar todas las clases para levantar el proyecto y ver los cambios.

Es más completo q la extensión LiveServer (que solo sirve para html y vanilla js), vite corre servicios extra para poder usar react. Para salir del server de vite hago CTRL+C, para volver a iniciarlo npm run dev. Si cierro la consola igual queda corriendo en 2do plano.



6\. En el index.html no hay cantenido, todo lo q se muestra en el main viene de React.

<body>

&nbsp;   <div id="root"> <!-- todo lo que está acá dentro viene de react y desde javascriot--></div>

&nbsp;   <script type="module" src="/src/main.jsx"></script> <!-- sobre todo de este archivo, main.jsx-->

&nbsp; </body>



7\. /src/main.jsx - este archivo no se edita



\- JSX (JavaScript XML): es una extensión de sintaxis para JavaScript que permite escribir estructuras HTML directamente dentro del código JavaScript, principalmente usada en React para construir interfaces de usuario de forma más clara y declarativa.

\- Conversión: Los navegadores no entienden JSX directamente; herramientas como Babel lo transforman en JavaScript estándar.

\- Archivos: Se suelen usar extensiones .jsx o .tsx (cuando se combina con TypeScript).

&nbsp; Ventajas de JSX

\- Código más legible: Combina lógica y estructura en un mismo archivo.

\- Declarativo: Describe cómo debería verse la UI sin manipular el DOM manualmente.

\- Reutilización: Facilita la creación de componentes reutilizables.

\- Integración con React: Se convierte en llamadas a React.createElement() (cuando lo traspila Babel), lo que simplifica el desarrollo



\## En js, cuando trabajamos dentro de node, todo el tiempo vakos a necesitar importar archivos/ librerías/ componentes desde distintos lugares, x ej:



import { StrictMode } from 'react' -> no es indispensable.

import { createRoot } from 'react-dom/client' -> indispensable xq indica en el html dónde poner el contenido

import './index.css' -> estilos, no indispensable

import App from './App.jsx' -> acá está el js q va a crear mi aplicacion (jsx es extension de js)



createRoot(document.getElementById('root')).render( // este metodo le indica a react donde crear el root.

<StrictMode>

<App />

</StrictMode>,

)

--



Estos imports no vienen de la carpeta "react" (de hecho ni existe), sino que son módulos a los que react le indica que envíe las funciones q precisamos (sctrictMode y createRoot en el ejemplo).



Esas lineas de main.jsx, en javascript mas sencillito es lo mismo q esto:



---



import { createRoot } from 'react-dom/client' // importo la f para crear el root de react

import App from './App.jsx' importo el contenido de mi aplicacion desde aca

import './index.css'

const rootDiv = document.getElementById('root'); // vinculo con html la const

createRoot(rootDiv).render( //con el metodo render le digo a react qué componente debe mostrar. render != compilar

<App />, // SIEMPRE hay q cerrar los tags en react, si no tiene tag de cierre se hace autocierre.

)

--



La traspilacion (compilacion entre lenguajes, JSX a React en este caso) la hace Babel



8\. /src/app.jsx - mi componente



---



import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'



function App() {



<!-- Al principio, antes del return, tb se declaran las vars, despues puedo llamarlas desde HTML con el nombre de la var entre {}. -->



const usuario = "Roque";

const templateSaludo = `Hola {usuario}!!!}`; -> backstrings!

function randomColor() {

return "pink";

}

function saludarUsuario() {

alert (templateSaludo())

}



return (

<>



<!-- <div>

&nbsp;     <h1>Hola {usuario}</h1>

&nbsp;       <a href="https://react.dev" target="\_blank">

&nbsp;         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200px" alt="React logo" />

&nbsp;       </a>

&nbsp;     </div>

&nbsp;     <h1>{templateSaludo}</h1>

&nbsp;     <div className="card">

&nbsp;       <button onClick={saludarUsuario}> // clic aca</button> acá la funcion va SIN parentesis porque no quiero q js la ejecute cuando pase el cabezal x acá, solo quiero INFORMAR a js q al hacer clic tiene que LLAMAR a la f.

&nbsp;       <p style={ {color: randomColor(); textTransform: uppercase; } } > // el 1er par de llaves es para indicarle a JSX q voy a usar js y el 2do par es para indicarle a js q voy a pasar un objeto

&nbsp;     </div>

&nbsp;     <p style={ {color: "red"} } > // idem ej p anterior, notar q la sintaxis es igual a la de los objetos

&nbsp;       El color favorito de {usuario} es {randomColor()} // acá la funcion va CON parentesis porque quiero q js LA EJECUTE

&nbsp;     </p>

&nbsp;   </>

&nbsp; )

} -->



export default App



<!-- import y export es la forma en q se comunican entre si los archivos en Node -->



---



Los componentes en react mezclan js, html y css dentro del mismo archivo, esto lo permite el formato jsx que integra los 3 lenguajes (sin tener q poner las etiquetas </html>, </script> o </style>)

El html y css está DENTRO del js, por lo q podemos poner f directamente en las etiquetas.

La f pricipal se llama igual q el archivo (mi componente, "App" en este caso).

Esta funcion retorna HTML. Antes se usaban clases en React para organizar todo, pero hoy en dia se usan funciones directamente, es una aproximacion más moderna.

Toda f de react recibe scripts, css, componentes etc y retorna una parte de la interfaz: un boton, una tab, un panel, etc..



cuando trabajamos en JSX los eventHandlers hay q ponerlos inline en el componente, esto resulta en elementos como:

<button onClick="funcionHandleEvento()">clic aca</button>

que esta sintaxis en html está prohibidiiiisima, pero como desde jsx traspilo a react lo podemos hacer, ya q el codigo no queda expuesto.

El problema de usar métodos como "addEventListener" o "getElementById" por ejemplo es que debería ejecutar los listeners antes del "return" del componente, y como el boton html se renderea despues q el metodo, nunca podría capturarlo. Por eso se usan las llamadas directamente inline (con formato camelCase para q funcione).



las llaves se pueden usar para poner cualquier expresion en js dentro del html a renderear: una var, una f, una operacion.. lo q no se pueden poner son condicionales porque no generan un return. es algo similar al uso de las plantillas literales.



textTransform: uppercase; - En css sería text-transform, pero en js no puedo usar guiones, se usa siempre camelCase y JSK despues lo transpila a lo q sea necesario.



Se puede usar bootstrap, sass, tailwind etc etc, dentro de react, solo hay q checkear como instalarlo con NPM.



