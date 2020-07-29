(async function cargar(){
    
    async function obtenerDatos(url){
        const respuesta = await fetch(url);
        const datos = respuesta.json();
        return datos
    }
    const $contenedor = document.querySelector('.container');
    const personajes = await obtenerDatos('https://thesimpsonsquoteapi.glitch.me/quotes?count=6');

     function htmlPersonaje(personaje){
        return (
            `<div class="item-container">
            <img src="${personaje.image}" alt="img">
            <h6>Nombre del personaje:</h6>
            <p>${personaje.character}</p>
            <h6>Frase: </h6>
            <p>"${personaje.quote}"</p>
            </div>`
        )
    }
    function crearHtml(html){
        const documento = document.implementation.createHTMLDocument();
        documento.body.innerHTML = html;
        return documento.body.children[0];
    }
    
    function crearPersonaje(pers, $cont){
        $contenedor.children[0].remove();
        personajes.forEach(personaje => {
            const html = htmlPersonaje(personaje);
            const creado = crearHtml(html);
            $contenedor.append(creado);
        });

    } 
    crearPersonaje(personajes,$contenedor); 
})()


