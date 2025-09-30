(() => {
  const GRID = document.getElementById('mapsGrid');
  if (!GRID) return;

  const API_URL = 'https://valorant-api.com/v1/maps?language=pt-BR';

  GRID.innerHTML = `<p class="maps__status">Carregando mapas…</p>`;

  fetch(API_URL)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(json => {
      const maps = (json?.data || [])
        .filter(m => m?.displayName)
        .sort((a, b) => a.displayName.localeCompare(b.displayName, 'pt-BR'));

      GRID.innerHTML = '';

      if (!maps.length) {
        GRID.innerHTML = `<p class="maps__status">Nenhum mapa retornado.</p>`;
        return;
      }

      const frag = document.createDocumentFragment();

      maps.forEach(m => {
        const name = m.displayName;
        const coords = m.coordinates || '';
        const imgSrc = m.splash || m.displayIcon || m.listViewIcon || '';

        const card = document.createElement('article');
        card.className = 'map-card';
        card.dataset.uuid = m.uuid;

        card.innerHTML = `
          <figure class="map-figure">
            <img src="${imgSrc}" alt="${name}" loading="lazy" />
            <figcaption class="map-name">${name}</figcaption>
            ${coords ? `<span class="map-meta">${coords}</span>` : ``}
          </figure>
        `;

        frag.appendChild(card);
      });

      GRID.appendChild(frag);
    })
    .catch(err => {
      console.error(err);
      GRID.innerHTML = `
        <div class="maps__error">
          <p>Não foi possível carregar os mapas agora.</p>
          <button class="maps__retry" type="button">Tentar novamente</button>
        </div>
      `;
      GRID.querySelector('.maps__retry')?.addEventListener('click', () => location.reload());
    });
})();
