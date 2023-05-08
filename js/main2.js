import myNav2 from "./modules/myNav2.js";
import _delete from "./modules/reclutas/delete.js";
myNav2.showNav()
let res = await fetch("http://localhost:4000/reclutas")
let json = await res.json();

let plantilla = ""
let menores = ""
let team = ""
let team2 = ""
let team3 = ""
json.forEach((val,id) => {
    console.log(val);
    val.edad = parseInt(val.edad)
    if (val.edad < 18){
        menores += `<tr class="p-1">
        <td>${val.nombre}</td>
        <td>${val.edad}</td>
        </tr>`
    }
    if (val.id_team == 1){
        team+= `<tr class="p-1">${val.nombre}
        </tr>`
    }else if(val.id_team == 2){
        team2 += `<tr class="p-1">${val.nombre}
        </tr>`
    } else {
        team3 += `<tr class="p-1">${val.nombre}
        </tr>`
    }
    plantilla+= `
            <tr class="p-1">
            <td>${val.nombre}</td>
            <td>${val.edad}</td>
            <td>${val.telefono}</td>
            <td>${val.email}</td>
            <td>${val.direccion}</td>
            <td>${val.fecha_nacimiento}</td>
            <td>${val.numero_documento}</td>
            <td>${val.fecha_ingreso_programa}</td>
            <td><button type="button" class="delete  btn btn-light w-100" id=${val.id}>Delete</button></td>
            <td><button type="button" class="edit ${val.id} btn w-100">Edit</button></td>
          </tr>
          `
    
});
document.querySelector(".tablebody").insertAdjacentHTML("afterbegin",plantilla);
document.querySelector(".sputnik").insertAdjacentHTML("afterbegin", team);
document.querySelector(".artemis").insertAdjacentHTML("afterbegin", team2);
document.querySelector(".apolo").insertAdjacentHTML("afterbegin", team3);
document.querySelector(".tablebody2").insertAdjacentHTML("afterbegin", menores)
document.querySelectorAll(".delete").forEach((val,id)=>{
    val.addEventListener("click", (e)=>{
        _delete.delete(val)
    })
})
