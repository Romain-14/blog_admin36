# Création d'un Back-Office (panneau d'administration)

La BDD est fourni:
- Elle contient 2 tables : `story` et `comment`
- Avec 2 données `story` et 3 commentaires en tout pour les 2 `story`

Mettre en place un `CRUD` complet pour les `stories`, et un `RUD` pour les `comment`.
- C -> Create -> formulaire pour ajouter une donnée
- R -> Read   -> affichage des données
- U -> Update -> formulaire pour modifier une donnée
- D -> Delete -> action qui va supprimer une donnée


## Préparation
1. Création du dossier du projet et se rendre à son emplacement
```bash
mkdir blog_admin && cd blog_admin
```

2. Initialiser le projet(création du fichier package.json)
```bash
npm init -y
```

3. Installation des modules de l'application
```bash
npm install express ejs mysql2 dotenv
```

4. Installation de module pour l'aide lors du développement
```bash
npm install nodemon -D
```

5. Mise en place de l'architecture
```bash
mkdir -p public/{css,images} src/{controllers,views,database,router}
touch .env .gitignore public/css/main.css src/{database/config.js,router/index.routes.js,views/index.js,controllers/views.js, app.js}
```

6. configurer les fichiers :
- .env
- .gitignore
- package.json
- app.js
- config.js (database)
- index.routes.js (router)
- views.js (controller)
- index.js (views)

## BONUS 
Mettre en place la gestion pour envoyer une image sur le serveur !
Installer le module multer, voir cours en fichier `md` sur discord -> formulaire(images).md