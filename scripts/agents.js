(() => {
  const GRID = document.getElementById("agentsGrid");
  if (!GRID) return;

  const API_URL =
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR";

  GRID.innerHTML = `<p class="agents__status">Carregando agentes…</p>`;

  fetch(API_URL)
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((json) => {
      const agents = (json?.data || [])
        .filter((a) => a && a.isPlayableCharacter)
        .sort((a, b) => a.displayName.localeCompare(b.displayName, "pt-BR"));

      GRID.innerHTML = "";

      if (!agents.length) {
        GRID.innerHTML = `<p class="agents__status">Nenhum agente retornado.</p>`;
        return;
      }

      const frag = document.createDocumentFragment();

      agents.forEach((agent) => {
        const imgSrc = agent.displayIcon || agent.fullPortrait || "";
        const name = agent.displayName || "Agente";
        const role = agent.role?.displayName || "";

        const card = document.createElement("article");
        card.className = "agent-card";
        card.dataset.uuid = agent.uuid;

        card.innerHTML = `
          <figure class="agent-figure">
            <img src="${imgSrc}" alt="${name}" loading="lazy" />
            <figcaption class="agent-name">${name}${
          role ? ` • ${role}` : ""
        }</figcaption>
          </figure>
        `;

        card.addEventListener("click", () => openAgentModal(agent));

        frag.appendChild(card);
      });

      GRID.appendChild(frag);
    })
    .catch((err) => {
      console.error(err);
      GRID.innerHTML = `
        <div class="agents__error">
          <p>Não foi possível carregar os agentes agora.</p>
          <button class="agents__retry" type="button">Tentar novamente</button>
        </div>
      `;
      GRID.querySelector(".agents__retry")?.addEventListener("click", () =>
        location.reload()
      );
    });

  function openAgentModal(agent) {
    const modal = document.getElementById("agentModal");
    const img = document.getElementById("agentImage");
    const name = document.getElementById("agentName");
    const desc = document.getElementById("agentDescription");
    const abilitiesList = document.getElementById("agentAbilities");

    img.src = agent.fullPortrait || agent.displayIcon;
    img.alt = agent.displayName;
    name.textContent = agent.displayName;
    desc.textContent = agent.description || "Sem descrição disponível.";

    abilitiesList.innerHTML = "";
    (agent.abilities || []).forEach((ab) => {
      if (!ab.displayName) return;
      const li = document.createElement("li");
      li.innerHTML = `
        ${
          ab.displayIcon
            ? `<img src="${ab.displayIcon}" alt="${ab.displayName}">`
            : ""
        }
        <span><strong>${ab.displayName}:</strong> ${ab.description || ""}</span>
      `;
      abilitiesList.appendChild(li);
    });

    modal.hidden = false;
  }

  document.querySelector(".modal__close")?.addEventListener("click", () => {
    document.getElementById("agentModal").hidden = true;
  });

  document.querySelector(".modal__overlay")?.addEventListener("click", () => {
    document.getElementById("agentModal").hidden = true;
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("agentModal").hidden = true;
    }
  });
})();
