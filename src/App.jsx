// si importo archivos q no sean jsx o js NECESITO escribir la extension
import "./App.css"
import Button from "./components/Button"
import Item from "./components/Item"
import products from "./data/products"

function App() {
  // AP - Al principio del componente, antes del return, tb se declaran las vars, despues puedo llamarlas desde HTML con el nombre de la var entre {}.

  return (
    <>
          
      <div>
        //AP - Props: Indico dónde renderear la f "Item", y le paso las props que se escriben igual q los atributos html, esta es la info dinamica. Acá estoy ejecutando 2 veces la f item con dif props. Todas las props se pasan a la f encapsuladas en un único Object (lo toma el "props" en en componente) respectivamente.
        <Item
          title="Xiaomi 6 Redmi Sarasa"
          price="$250"
          handleClic= { ()=> alert("Este cel es Xiaomi")}
          image="https://castillo.vtexassets.com/arquivos/ids/182773/descarga---2025-09-19T144802.604.png?v=638939004504900000"
        />
        <Item
        // AP en las props puedo pasar cualquier tipo de var (num, array, func, texto, etc), solo tengo q encerrarla entre {}. En los strings no hace falta.
          title="Samsung s25 Plus"
          price= {300}
          categories= {["smartphone", "Xiaomi", "Mobile"]}
          handleClic= { ()=> alert("Este cel es samsung")}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21ONr3MiwnjHFi00cX-rPSOztg1AYioEv_Q&s"
        />
      </div>
    </>
  )
}

export default App
