# Bookmark Manager App

Application de gestion de favoris. Seuls les liens depuis Vimeo et Flickr sont supportés.

## Stack

- **FRONTEND** : React / Vite / Tailwind CSS
- **BACKEND** : Node.js / Fastify / MongoDB

## Instructions

*Pré-requis : docker + docker-compose à jour*

1. Cloner le repo
2. Déployer la stack

```sh
docker-compose up
```
- Construit l'image Docker de l'application
- Seed la base de données
- Démarre le serveur Node.js et le service MongoDB

3. Accéder à l'application : [http://localhost:3000/](http://localhost:3000/)

## Développement

*pré-requis*

- Node 14+
- npm 7+

1. Installer les dépendances npm du `client` et du `server`
2. Décommenter la section *volumes* du service *app* (cf docker-compose.yml) pour monter le répetoire local *server/* sur le container
3. (backend) Lancer le service MongoDB + le serveur avec `docker-compose up`
4. (frontend) Lancer le serveur de developpment vite avec `npm run dev` (depuis le répertoire `client/`)

---

Loann Neveu <neveu.loann@gmail.com>
