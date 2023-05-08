export default{
    delete(val){
        let myHeader = new Headers({
            "Content-Type": "application/json"
        })
        let data = {
            nombre: "Santiago",
            apellido: "Bernal",
            edad: 18
        }
        let config = {
            method: "DELETE", 
            headers: myHeader,
            body: JSON.stringify(data)
        }
        let peticion= fetch(`http://localhost:4000/reclutas${val.id}`, config)
        let json =  peticion.json();
        console.log(json);
    }
}