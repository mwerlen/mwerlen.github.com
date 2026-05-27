# mwerlen.github.com

[Page personnelle de Maxime Werlen](http://maxime.werlen.fr)

Ce projet est un site statique généré par **Jekyll**.

## Utilisation

Le projet utilise un `Makefile` pour simplifier les commandes courantes.

### Installation

Assurez-vous d'avoir Ruby installé, puis lancez :

```bash
make install
```

### Développement

Pour lancer le serveur de développement avec rechargement automatique (LiveReload) et inclusion des brouillons (drafts) :

```bash
make serve
```

Pour lancer le serveur sans les brouillons (mode "production" local) :

```bash
make serve-prod
```

Le site sera accessible sur `http://localhost:4000`.

### Build

Pour générer le site statique dans le dossier `_site/` :

```bash
make build
```

## À propos des avertissements Sass (Warnings)

Lors du build ou du serve, vous verrez probablement des messages de type :
`Deprecation Warning [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.`

**Pourquoi ?**
Sass migre vers un système de modules (`@use`). Cependant, Jekyll (via `jekyll-sass-converter`) utilise encore principalement `@import` pour gérer les fichiers partiels (ceux commençant par un underscore). 

Bien que le code soit valide, le compilateur Dart Sass signale que cette syntaxe sera obsolète dans le futur. Ces avertissements n'empêchent pas la génération correcte du site.
