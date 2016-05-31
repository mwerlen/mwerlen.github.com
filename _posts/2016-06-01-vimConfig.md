---
layout: post
title: Ma config VIM
comments: true    
date: 2016-05-31
categories : [Tech]
tags: [Vim, vi, git, github, dotfiles]
---

J'utilise beaucoup [VIM] pour rédiger de la documentation et pour l'édition de configurations sur les serveurs.
Avoir une configuration personnalisée est vraiment très agréable, 
mais il est complexe de maintenir la configuration identique sur toutes les machines.
J'avais tenté de stocker mon `.vimrc` avec mes autres dotfiles sur git, 
mais à l'usage ce type de script (`.bashrc`...) est difficile à maintenir sur plusieurs plateformes Ubuntu, Centos, Windows avec Git Bash...

Suite à la lecture d'un [article][1] sur la configuration de [VIM] "from scratch" 
j'ai décidé de reprendre ma configuration et de ne versionner que mon dossier `.vim`.
Le fichier `.vimrc` est un lien symbolique vers un fichier du répertoire `.vim`.
L'article est très intéressant et propose des extensions pratiques.
Voici le résultat maintenant que mon [VIM] est correctement configuré :

![Ma configuration VIM](/images/vimconfig.png)

[VIM]: https://fr.wikipedia.org/wiki/Vim "Page wikipedia de VIM"
[1]: http://marcgg.com/blog/2016/03/01/vimrc-example/ "Vim Configuration From Scratch in 2016"
