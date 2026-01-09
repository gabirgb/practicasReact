// si importo archivos q no sean jsx o js necesito escribir la extension
import "./App.css"
import Button from "./components/Button"
// si son jsx o js no hace falta. Además de importarlo tengo que indicar qué parte de mi componente se renderea, y en qué lugar del codigo. Ojo! los nombres de componentes, funciones y archivos son case sensitive para GIT y para el traspilador de jsx, usar como convecion camelCase.
// cuando "export default" se importa así:
import Item from "./components/Item"
// cuando importo las otras f q NO son default, las tengo q encerrar en llaves ("export named"):
// import {ItemButton} from "./components/Item"
import products from "./data/products"

function App() {
  // Al principio, antes del return, tb se declaran las vars, despues puedo llamarlas desde HTML con el nombre de la var entre {}.
  const usuario = "Gabi"
  const templateSaludo = `Hola ${usuario}!!!` //-> backstrings!

  function randomColor() {
    return "yellow"
  }

  function saludarUsuario() {
    alert(templateSaludo())
  }

  const stylesText = { color: randomColor(), textTransform: "uppercase" }
  // recordar que dentro del return SIEMPRE tiene que haber UN SOLO ELEMENTO PADRE, por ej:
  /* MAL:
  return (
    <div> ...contenido... </div>
    <div> ...contenido... </div>
  )
    
  BIEN (1 solo padre):
  return (
    <div> ...contenido... </div>
  )

  BIEN (1 solo padre con otro div anidado):
  return (
    <div>
      <div> ...contenido... </div>
    </div>
  )

  BIEN (un solo padre -> la etiqueta vacía <> , A.K.A "fragment"):
  return (
    <>
      <div> ...contenido... </div>
      <div> ...contenido... </div>
    </>
  )


  */
  return (
    <>
      <div>
        <h1> {templateSaludo} </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          width="200px"
          alt="React logo"
        />
      </div>

      <div>
        <h2>Aprendemos JSX</h2>
        <p style={stylesText}>
          El color favorito de {usuario} es {randomColor()}
        </p>
      </div>

      <div>
        <p style={{ color: randomColor(), textTransform: "capitalize" }}>
          Sintaxis de eventos: <strong>camelCase</strong>
          {/* el 1er par de llaves es para indicarle a JSX q voy a usar js y el 2do
          par es para indicarle a js q voy a pasar un objeto */}
        </p>
        <button onClick={saludarUsuario}>clic aca</button>
        {/* acá la funcion va
        SIN parentesis porque no quiero q js la ejecute cuando pase el cabezal x
        acá, solo quiero INFORMAR a js q al hacer clic tiene que LLAMAR a la f. */}
      </div>
      <hr />
      <div>
        {/* Indico dónde render la f "Item", y le paso las props que se escriben igual q los atributos html, esta es la info dinamica. Acá estoy ejecutando 2 veces la f item con dif props. Todas las props se pasan a la f encapsuladas en un único Object (lo toma el "props" en en componente) respectivamente. */}
        <Item
          title="Xiaomi 6 Redmi Sarasa"
          price="$250"
          handleClic= { ()=> alert("Este cel es Xiaomi")}
          image="https://castillo.vtexassets.com/arquivos/ids/182773/descarga---2025-09-19T144802.604.png?v=638939004504900000"
        />
        <Item
        // en las props puedo pasar cualquier tipo de var, solo tengo q encerrarla entre {}. Los strings no hace falta.
          title="Samsung s25 Plus"
          //paso un Number
          price= {300}
          // paso un array
          categories= {["smartphone", "Xiaomi", "Mobile"]}
          // paso una f
          handleClic= { ()=> alert("Este cel es samsung")}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21ONr3MiwnjHFi00cX-rPSOztg1AYioEv_Q&s"
        />
      </div>
      <hr></hr>
      <div>
        <h2>Gestion de estados</h2>
         <Button 
          label="Cambiar color - estático"
         />
      </div>
    </>
  )
}

export default App
