# Valorant Agents Explorer

Aplicação web para **explorar agentes, armas e mapas do Valorant**.  
Projeto em evolução contínua, sempre mantendo uma versão utilizável a cada etapa.

- **Site (em andamento):** [GitHub Pages](https://pedrojuanofc.github.io/valorant-agents-explorer/)  
- **API:** [Valorant-API (não oficial)](https://valorant-api.com/)

---

## Screenshots

### Páginas Web
- **Home**  
  ![Homepage do Valorant Agents Explorer](assets/screenshots/homepage.png)

- **Agents**  
  ![AgentsPage do Valorant Agents Explorer](assets/screenshots/agentspage.png)

- **Arsenal**  
  ![ArsenalPage do Valorant Agents Explorer](assets/screenshots/arsenalpage.png)

- **Maps**  
  ![MapsPage do Valorant Agents Explorer](assets/screenshots/mapspage.png)

### Páginas Mobile
<p align="center">
  <img src="assets/screenshots/homemobilepage.jpg" alt="Home (mobile)" width="240">
  <img src="assets/screenshots/agentsmobilepage.jpg" alt="Agents (mobile)" width="240">
  <img src="assets/screenshots/arsenalmobilepage.jpg" alt="Arsenal (mobile)" width="240">
  <img src="assets/screenshots/mapsmobilepage.jpg" alt="Maps (mobile)" width="240">
</p>

---

## Visão geral
- **Layout-first:** primeiro interface (HTML/CSS/JS), depois a integração de dados.  
- **Integração em tempo real** com a Valorant-API (fetch + imagens lazy loading).  
- **UI responsiva:** suporte desktop e mobile.  
- **Interatividade:** cards clicáveis abrindo modais com detalhes.

---

## Status atual
- Estrutura inicial do projeto e navegação entre páginas.  
- Listagens funcionais consumindo a API: **agentes, armas e mapas**.  
- **Agentes:** modal com imagem, descrição e habilidades.  
- **Arsenal:** modal para visualizar skins com navegação lateral.  
- **Interface:** modais responsivos, adaptados à tela com scroll.  

---

## Stack
- **Front-end:** HTML, CSS, JavaScript  
- **API:** Valorant-API (não oficial)  
- **Futuro:** migração gradual para React (rotas + estado)

---

## Endpoints principais
- Agentes jogáveis: `GET https://valorant-api.com/v1/agents?isPlayableCharacter=true`  
- Detalhe do agente: `GET https://valorant-api.com/v1/agents/{uuid}`  
- Armas: `GET https://valorant-api.com/v1/weapons`  
- Mapas: `GET https://valorant-api.com/v1/maps`

---

## Próximos passos
- [ ] Favoritar agentes e armas.  
- [ ] Criar seção interativa de mapas (planner de estratégias).  
- [ ] Filtros e busca (função, ordem alfabética, tipo de arma, etc.).  
- [ ] Animações e estados de carregamento mais elaborados.  
- [ ] Internacionalização (pt/en).  
- [ ] Migração para React.  

---

## Autor
**Pedro Juan** — [LinkedIn](https://www.linkedin.com/in/pedro-juan-ferreira-saraiva/) • [GitHub](https://github.com/PedroJuanOfc)
