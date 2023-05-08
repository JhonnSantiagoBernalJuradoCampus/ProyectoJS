let pathname = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js", "");
export default class myForm extends HTMLElement {
    static async component(){
        return await (await fetch(pathname.replace(".js", ".html"))).text();
    }
    handleEvent(e){
        e.preventDefault();
        this.myWorker(e)
        this.form.reset()
    }
    changeView(){
        window.location.href = "#"
    }
    myWorker(e){
        e.preventDefault();
        let ws = new Worker("js/ws/wsPost.js", {type: "module"})
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        ws.postMessage(data)
        ws.addEventListener("message", (e)=>{
            console.log(e.data)
            ws.terminate();
        })
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(myForm.component()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.form = this.shadowRoot.querySelector("form")
            this.form.addEventListener("submit", this.handleEvent.bind(this))
            /* this.btn = this.shadowRoot.querySelector(".recluta")
            this.btn.addEventListener("click", this.changeView.bind(this)) */
            this.date = this.shadowRoot.querySelectorAll(`[class="fecha"]`)
            this.date.forEach((val,id)=>{
                val.addEventListener("focus", (e)=>{
                    val.type = "date";
                })
            })
            
        })
    }
}
customElements.define(name, myForm)