import myNav2 from "./modules/myNav2.js";
import _delete from "./modules/reclutas/delete.js";
myNav2.showNav()
let res = await fetch("http://localhost:4000/reclutas")
let json = await res.json();
let plantilla = ""
json.forEach((val,id) => {
    plantilla+= `
            <tr class="p-1">
            <td>${val.nombre}</td>
            <td>${val.edad}</td>
            <td>${val.telefono}</td>
            <td><button type="button" class="delete  btn btn-light w-100" id=${val.id}>Delete</button></td>
            <td><button type="button" class="edit ${val.id} btn w-100">Edit</button></td>
          </tr>
          `
});
document.querySelector(".tablebody").insertAdjacentHTML("afterbegin",plantilla);

document.querySelectorAll(".delete").forEach((val,id)=>{
    val.addEventListener("click", (e)=>{
        _delete.delete(val)
    })
})
