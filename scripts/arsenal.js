(() => {
  const GRID = document.getElementById("arsenalGrid");
  if (!GRID) return;

  const API_URL = "https://valorant-api.com/v1/weapons?language=pt-BR";

  const normalizeCategory = (w) => {
    const raw = w?.shopData?.categoryText || w?.category || "";
    return raw.replace("EEquippableCategory::", "");
  };

  GRID.innerHTML = `<p class="arsenal__status">Carregando armas…</p>`;

  fetch(API_URL)
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((json) => {
      const weapons = (json?.data || []).filter((w) => w?.displayName);
      GRID.innerHTML = "";

      if (!weapons.length) {
        GRID.innerHTML = `<p class="arsenal__status">Nenhuma arma retornada.</p>`;
        return;
      }

      const frag = document.createDocumentFragment();

      weapons.forEach((w) => {
        const name = w.displayName;
        const category = normalizeCategory(w);
        const cost = w.shopData?.cost;
        let imgSrc = w.displayIcon || "";

        if (!imgSrc) {
          const skinWithIcon = (w.skins || []).find((s) => s.displayIcon);
          imgSrc = skinWithIcon?.displayIcon || "";
        }

        const card = document.createElement("article");
        card.className = "weapon-card";
        card.dataset.uuid = w.uuid;

        card.innerHTML = `
          <figure class="weapon-figure">
            <img src="${imgSrc}" alt="${name}" loading="lazy" />
            <figcaption class="weapon-name">${name}</figcaption>
            <span class="weapon-meta">${category}${
          typeof cost === "number" ? ` • ${cost} créditos` : ""
        }</span>
          </figure>
        `;

        card.addEventListener("click", () => openWeaponModal(w));
        frag.appendChild(card);
      });

      GRID.appendChild(frag);
    })
    .catch((err) => {
      console.error(err);
      GRID.innerHTML = `
        <div class="arsenal__error">
          <p>Não foi possível carregar as armas agora.</p>
          <button class="arsenal__retry" type="button">Tentar novamente</button>
        </div>
      `;
      GRID.querySelector(".arsenal__retry")?.addEventListener("click", () =>
        location.reload()
      );
    });

  let currentWeapon = null;
  let currentSkinIndex = 0;

  function validSkins(weapon) {
    const list = (weapon.skins || []).filter(
      (s) => s?.displayName && !/random/i.test(s.displayName)
    );
    if (list.length) return list;
    const fallbackName = weapon.displayName || "Skin";
    const fallbackIcon = weapon.displayIcon || "";
    return [{ displayName: fallbackName, displayIcon: fallbackIcon }];
  }

  function openWeaponModal(weapon) {
    currentWeapon = weapon;
    currentWeapon._validSkins = validSkins(weapon);
    currentSkinIndex = 0;
    showSkin(currentSkinIndex);
    document.getElementById("weaponModal").hidden = false;
  }

  function showSkin(index) {
    if (!currentWeapon || !currentWeapon._validSkins.length) return;
    const skin = currentWeapon._validSkins[index];
    const img = document.getElementById("weaponImage");
    const name = document.getElementById("weaponName");
    img.src = skin.displayIcon || "";
    img.alt = skin.displayName;
    name.textContent = skin.displayName;
  }

  document.getElementById("prevSkin")?.addEventListener("click", () => {
    if (!currentWeapon) return;
    currentSkinIndex =
      (currentSkinIndex - 1 + currentWeapon._validSkins.length) %
      currentWeapon._validSkins.length;
    showSkin(currentSkinIndex);
  });

  document.getElementById("nextSkin")?.addEventListener("click", () => {
    if (!currentWeapon) return;
    currentSkinIndex =
      (currentSkinIndex + 1) % currentWeapon._validSkins.length;
    showSkin(currentSkinIndex);
  });

  document
    .querySelector("#weaponModal .modal__close")
    ?.addEventListener("click", () => {
      document.getElementById("weaponModal").hidden = true;
    });

  document
    .querySelector("#weaponModal .modal__overlay")
    ?.addEventListener("click", () => {
      document.getElementById("weaponModal").hidden = true;
    });

  window.addEventListener("keydown", (e) => {
    const modalOpen = !document.getElementById("weaponModal").hidden;
    if (!modalOpen) return;
    if (e.key === "Escape")
      document.getElementById("weaponModal").hidden = true;
    if (e.key === "ArrowRight") document.getElementById("nextSkin")?.click();
    if (e.key === "ArrowLeft") document.getElementById("prevSkin")?.click();
  });
})();
