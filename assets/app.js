// Carga el JSON y genera las tarjetas dinámicamente
fetch('data/projects.json')
  .then(res => res.json())
  .then(proyectos => {
    const contenedor = document.getElementById('lista-proyectos');
    proyectos.forEach(p => {
      // Crea una tarjeta por proyecto, sin tocar HTML manualmente
      const card = document.createElement('div');
      card.className = 'card';
      // Antes: <a href="${p.url}" target="_blank">Ver proyecto →</a>
      // Ahora:
      card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.titulo}" loading="lazy">
      <h3>${p.titulo} <span class="badge">${p.tipo}</span></h3>
      <p>${p.descripcion}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <a href="${p.url}" target="_blank" aria-label="Ver proyecto: ${p.titulo}">
        <span>Ver proyecto</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    `;
    });
  })
  .catch(err => console.error('Error cargando proyectos:', err));
