// si importo archivos q no sean jsx o js NECESITO escribir la extension
import "./App.css"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  // Al principio del componente, antes del return, tb se declaran las vars, despues puedo llamarlas desde HTML con el nombre de la var entre {}.

  return (
    <>
          
      <div>
        <ItemCount />
        <ItemListContainer />
      </div>
    </>
  )
}

export default App
