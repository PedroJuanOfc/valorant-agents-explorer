# Valorant Agents Explorer

Projeto em desenvolvimento.
Aplicação web focada em **explorar agentes do Valorant** — começando por nome, imagens, função/role e habilidades. 
A ideia é evoluir o app continuamente, mantendo-o utilizável a cada etapa.

- Acesse a página (em andamento): [Valorant Agents Exlporer](https://pedrojuanofc.github.io/valorant-agents-explorer/)

## Páginas Web
### HomePage
![Homepage do Valorant Agents Explorer](assets/screenshots/homepage.png) 

### Agents
![AgentsPage do Valorant Agents Explorer](assets/screenshots/agentspage.png)

### Arsenal
![ArsenalPage do Valorant Agents Explorer](assets/screenshots/arsenalpage.png)

### Maps
![MapsPage do Valorant Agents Explorer](assets/screenshots/mapspage.png)

## Páginas Mobile
<p align="center">
  <img src="assets/screenshots/homemobilepage.jpg" alt="Home (mobile)" width="240">
  <img src="assets/screenshots/agentsmobilepage.jpg" alt="Agents (mobile)" width="240">
  <img src="assets/screenshots/arsenalmobilepage.jpg" alt="Arsenal (mobile)" width="240">
  <img src="assets/screenshots/mapsmobilepage.jpg" alt="Maps (mobile)" width="240">
</p>



## Visão geral
- **Layout-first**: primeiro a interface (HTML/CSS/JS), depois a integração de dados.
- **Dados públicos** via [Valorant-API](https://valorant-api.com/).
- Futuro próximo: filtros por função, página detalhada do agente, animações de transição e suporte a múltiplos idiomas (pt/en).

## Status atual
- Estrutura inicial do projeto e páginas.
- Protótipo de listagem de agentes (UI).
- Integração com a API será adicionada na sequência.

## Stack
- **Front-end**: HTML, CSS, JavaScript (planejo portar para React depois).
- **API**: Valorant-API.

## Endpoints de referência (API)
- Listar agentes jogáveis: `GET https://valorant-api.com/v1/agents?isPlayableCharacter=true`
- Detalhes de um agente: `GET https://valorant-api.com/v1/agents/{uuid}`

> Observação: Os dados e assets são propriedade da Riot Games. A Valorant-API é um projeto da comunidade (não oficial).


## Próximos passos
- [x] Conectar listagem de agentes à API (nome, retrato, role).
- [ ] Página de detalhes com habilidades e descrições.
- [ ] Filtros (role/alfabético) e busca.
- [ ] Animações e estados de carregamento.
- [ ] Internacionalização (pt/en).
- [ ] Expandir para armas, mapas e cosméticos.

## Licença
MIT — sinta-se à vontade para usar como referência.

## Autor
**Pedro Juan** — [LinkedIn](https://www.linkedin.com/in/pedro-juan-ferreira-saraiva/) | [GitHub](https://github.com/PedroJuanOfc)
