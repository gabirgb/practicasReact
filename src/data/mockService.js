import products from "./products"

const miPromise = new Promise((resolve, reject) => {
    console.log("Iniciando promesa....")
    setTimeout(() => { resolve("Promesa terminada") }, 1000)
    // reject ("Error! pero nunca se va a producir porque es una peticion simulada")
})

function getData() {
    const promiseData = new Promise((resolve, reject) => {
        console.log("Solicitando datos...")
        setTimeout(() => { resolve(products) }, 1000)
    })
    return promiseData
}

export default getData