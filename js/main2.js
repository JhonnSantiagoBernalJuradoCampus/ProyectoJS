import myNav2 from "./modules/myNav2.js";
myNav2.showNav()
let res = await fetch("http://localhost:4000/reclutas")
let json = await res.json();
console.log(json);
let plantilla = ""
json.forEach((val,id) => {
    plantilla+= `
            <tr class="p-1">
            <td>${val.nombre}</td>
            <td>${val.edad}</td>
            <td>${val.telefono}</td>
            <td><button type="button" class="delete ${val.id} btn btn-light w-100">Delete</button></td>
            <td><button type="button" class="edit ${val.id} btn w-100">Edit</button></td>
          </tr>
          `
});
console.log(plantilla);
document.querySelector(".tablebody").insertAdjacentHTML("afterbegin",plantilla)