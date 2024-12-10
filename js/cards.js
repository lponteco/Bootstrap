function loadCards() {

    fetch('./cards.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        const container = document.querySelector('.container .row');
        const cards = data.section.cards;
  
        cards.forEach(card => {
          const cardHTML = `
            <div class="col d-flex justify-content-center">
              <div class="card" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="${card.alt}">
                <div class="card-body">
                  <p class="card-text">${card.text}</p>
                </div>
              </div>
            </div>
          `;
          container.innerHTML += cardHTML; 
        });
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud Fetch:', error);
      });
  }
  

  document.addEventListener('DOMContentLoaded', loadCards);