# Documentation pour les Agents (AI / Dev)

Ce document récapitule les choix techniques et les spécificités du projet pour faciliter les futures interventions.

## Stack Technique
- **Générateur** : Jekyll 4.x
- **Styles** : Sass (SCSS) via le convertisseur natif de Jekyll.
- **Gestion des tâches** : Makefile.
    - `make install` : Installation des dépendances.
    - `make serve` : Développement local avec drafts et LiveReload.
    - `make serve-prod` : Serveur local sans drafts.
    - `make build` : Génération du site final (sans drafts).
- **Zéro Node.js** : Les dépendances Grunt/Bower/Yarn ont été supprimées.

## Structure des Styles
Les fichiers SCSS sont situés dans `stylesheets/`.
- Les fichiers d'entrée (`styles.scss`, `presentation.scss`, `mgmt.scss`) contiennent un front matter Jekyll (`---`) pour être compilés.
- Les autres fichiers sont des "partials" (`_*.scss`).

## Gestion des Warnings Sass (Deprecation)
Le projet utilise la version moderne de Sass (Dart Sass). Lors de la compilation, des avertissements concernant `@import` apparaissent.

### Pourquoi ne pas passer à `@use` ?
1. **Compatibilité Jekyll** : Le convertisseur Sass de Jekyll gère mieux les `@import` pour les fichiers partiels injectés globalement.
2. **Scopes des variables** : Passer à `@use` nécessiterait de préfixer chaque utilisation de variable par le nom du module (ex: `header.$green`), ce qui rendrait le code beaucoup plus verbeux sans gain immédiat, compte tenu de la taille du projet.
3. **Inutilité des "Quiet Options"** : Les options `quiet_deps` dans `_config.yml` ne masquent pas les warnings des fichiers du projet lui-même, seulement ceux des gems.

### Recommandation
Ignorer les `Deprecation Warning` lors du build. Ils sont informatifs et n'affectent pas l'intégrité du CSS généré. Ne pas tenter de filtrer la sortie via des scripts (grep) pour garder un `Makefile` propre.

## Points d'attention pour les modifications
- Toujours vérifier que le front matter Jekyll est présent en tout début de fichier SCSS (ligne 1 et 2).
- Utiliser `make build` pour vérifier qu'aucune erreur réelle (Syntax Error) n'est masquée par les warnings.
