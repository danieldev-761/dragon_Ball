const url = 'https://dragonball-api.com/api/characters?limit=12';

// Mapeo de colores por personaje
const coloresPersonajes = {
    'Goku': '#FF6B00',
    'Vegeta': '#4169E1',
    'Gohan': '#3a3670',
    'Bulma': '#e7242b',
    'Trunks': '#FF1493',
    'Freezer': '#5c2280',
    'Zarbon': '#72ae55',
    'Dodoria': '#fd8ac5',
    'Ginyu': '#8167a3',
    'Celula': '#345e07',
    'Majin Buu': '#FF69B4',
    'Krillin': '#da8e86',
    'Piccolo': '#427424',
    'Yamcha': '#FF8C00',
    'Tenshinhan': '#44151c',
};

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
                // Obtener el color del personaje o usar un color por defecto
                const color = coloresPersonajes[personaje.name] || '#d98313';
                
                htmlTemporal += `
                
                    
                        <div class="card" data-color="${color}">

                            <div class="item">

                                <h3 style="color: ${color};">${personaje.name}</h3>
                                <img class="personaje" src="${personaje.image}" alt="${personaje.name}">
                                <p class="descripcion" style="font-size: 0.9em; color: #555;">${personaje.description}</p>
                                <p class="stats" style="font-size: 1rem; color: orangered;">Ki base: ${personaje.ki}</p>
                                <p class="stats" style="font-size: 1rem; color: orangered;">Max Ki: ${personaje.maxKi}</p>
                                
                            </div>

                        </div>


                `;
            });

            contenedor.innerHTML = htmlTemporal;

            const header = document.querySelector('header');
            const cards = document.querySelectorAll('.card');
            const defaultHeaderBackground = header.style.background;

            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    const cardColor = card.dataset.color;
                    header.style.background = cardColor;
                });

                card.addEventListener('mouseleave', () => {
                    header.style.background = defaultHeaderBackground || 'rgb(39 43 51)';
                });
            });
        })
        .catch(error => {
            console.error('Error detallado:', error);
            contenedor.innerHTML = `<p style="color:red">Error al cargar datos. Revisa la consola (F12).</p>`;
        });
});




