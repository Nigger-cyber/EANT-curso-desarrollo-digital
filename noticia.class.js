class Noticia {

    constructor (Titulo, Autor, CuerpoNota, Imagen){
        this.Titulo = Titulo
        this.Autor = Autor
        this.CuerpoNota = CuerpoNota
        this.Imagen = Imagen
    }

    Mostrar(){
        const nota = document.createElement("article")

        nota.classList.add("row", "noticia", "mt-2", "mt-md-4")

        nota.innerHTML = `<div class="col-12 col-md-4 noticia-img">
                            <img src=${this.Imagen} alt="sorteo libertadores" class="img-fluid">
                        </div>
                        <div class="col-12 col-md-8 noticia-txt">
                            <h3>${this.Titulo}</h3>
                            <p>por ${this.Autor}</p>
                            <p>${this.CuerpoNota}</p>
                        </div>`  
    
        document.querySelector(".container").appendChild(nota)
    }
}