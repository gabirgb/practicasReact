import products from "../data/products"
import Item from "./Item"
import getData from "../data/mockService"

export default function ItemListContainer(props) {

    //* PETICION DE DATOS, ASINCRONIA */
    console.log("Promesa: ", getData())

    /* then()
    recupero la data, el response es el "resolve(products)" que realizamos en mockService.
    La función dentro del then se ejecuta al finalizar la petiucion */
    getData().then( (response) => {
        console.log("Promesa terminada")
        console.log(response)
    }).catch( (err)=>{
        alert(err)
    })

    return (
        <section>
            <h2>Hola, bienvenidos a mi tienda {props.greetings}</h2>
            {
            //** recordar q siempre q estoy en la parte HTML y quiero mostrar un metodo o f tengo q abrir llaves
                //** Array.map()
                /* Itero el array de obj q tengo en products.js
                podría hacerlo con un forEach por ej:
                products.forEach( (itemjs)=>{} )
                Acá lo que estoy diciendo es q por cada item del array (itemjs) ejecute una f (la f flecha y lo q sea q yo le ponga adentro.
                pero el problema es q forEach y similares no tienen "return", no retornan ningun val q yo pueda usar.
                para eso me sirve el map() que funciona igual:
                products.map( (itemjs)=>{} )
                el obj del map es iterar y armar un nuevo array (se la llama "f transformadora")
                y convierto al array de objetos en un nuevo array con las props de los items ya formateados en JSX.
                Por ej:
                {
                    id: 1,
                    title: "Xiaomi Redmi Note 13",
                    price: 299.9,
                    category: "xiaomi",
                    stock: 15,
                    img: "https://i01.appmifile.com/webfile/globalimg/products/redmi-note-13-pro-plus.png",
                    description: "Smartphone Xiaomi Redmi Note 13."
                }
                lo convierto a:
                <Item
                    id= "1"
                    title= "Xiaomi Redmi Note 13"
                    price= "299.9"
                    category= "xiaomi"
                    stock= "15"
                    img = "https://i01.appmifile.com/webfile/globalimg/products/redmi-note-13-pro-plus.png"
                    description= "Smartphone Xiaomi Redmi Note 13."
                />

                El formato completo es:
                products.map( (itemjs) => {
                    return
                        <h3> itemjs.id </h3>
                        <h3> itemjs.title </h3>
                        <h3> itemjs.price </h3>
                        <h3> itemjs.category </h3>
                } )

                PEEERO si es una f sencilla q solo tiene 1 retorno puedo simplificarla:
                products.map( (itemjs) =>
                    <h3> itemjs.title </h3>
                )
                * * Es una de las caracteristicas de la f flecha: no estamos obligados a ponerle las llaves y el return cuando es una f chiquita.

                En este caso solo voy a renderear el componente >Item>, asi que puedo usar el formato reducido:
                products.map( (itemjs) => 
                    <Item
                        id={itemjs.id}
                        title={itemjs.title}
                        price={itemjs.price}
                        category={itemjs.category}
                        stock={itemjs.stock}
                        img={itemjs.img}
                        description={itemjs.description}
                    />
                )

                PEEEEEEEEEEEERO incluso hay un formato mas reducido para no tener q escribir todas las props, el operador spread: "{...}"

                 */
                products.map( (itemjs) => 
                    <Item
                    //** diferencia entre id y Key en React
                    /* - key: atributo interno de React, obligatorio en listas. No se pasa como prop al componente.
                    - id: es una prop mia.
                    Puedo matchear key y id para que sea más intuitivo (como está hecho abajo) o puedo inicializarlo creando una variable... 
                    Si ya tengo un id dentro del array, no hace falta pasarlo dos veces. Con {...itemjs} ya se incluye.*/
                        key={itemjs.id} // creo la key y la pareo con el id de cada item
                        {...itemjs} // mapeo todas las props de cada itemjs
                    />
                )
            }
        </section>
    )

}