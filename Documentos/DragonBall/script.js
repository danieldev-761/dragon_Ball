const url = 'https://dragonball-api.com/api/characters?limit=12';

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('lista');

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Error en la red');
            return response.json();
        })
        .then(data => {
            //API devuelve un objeto, y los personajes están en 'items'
            const personajes = data.items; 

            let htmlTemporal = ""; //variable para mayor velocidad

            personajes.forEach(personaje => {
                
                htmlTemporal += `
                
                    
                        <div class="card">

                            <div class="item">

                                <h3>${personaje.name}</h2>
                                <img class="personaje" src="${personaje.image}" alt="${personaje.name}">
                                <p style="font-size: 0.9em; color: #555;">${personaje.description}</p>
                            </div>

                        </div>


                `;
            });

            contenedor.innerHTML = htmlTemporal;
        })
        .catch(error => {
            console.error('Error detallado:', error);
            contenedor.innerHTML = `<p style="color:red">Error al cargar datos. Revisa la consola (F12).</p>`;
        });
});




