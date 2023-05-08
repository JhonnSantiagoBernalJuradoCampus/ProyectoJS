export default{
    title: "Tower zenith",
    secciones: [
        {
            title: "inicio"
        },
        {
            title: "reclutas"
        },
        {
            title: "team"
        },
        {
            title: "skill"
        },
        {
            title: "modulo"
        },
    ],
    showNav(){
        let plantilla = "";
        this.secciones.forEach((val,id)=>{
            plantilla += `
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="${(val.title!="inicio")?`sections/${val.title}.html`:"#"}">${val.title}</a>
                    </li>
                </ul>
            </div>`
        })
        document.querySelector("body").insertAdjacentHTML("afterbegin", `<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand text-light me-5 pe-5" href="#">${this.title}</a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            ${plantilla}
        </div>
    </nav>`)
    }
}