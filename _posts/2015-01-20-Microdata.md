---
layout: post
title: Microdata
comments: true    
date: 2015-01-20
categories : [Tech]
tags: [Google, Microdata]
---

En faisant un tour sur le service [Webmaster Tools] de Google je me suis rendu compte qu'ils avaient ajouté une section sur les [Microdata].
Cette norme permet d'ajouter dans une page HTML des informations standardisées permettant un traitement automatisé de l'information.

Je l'utilise par exemple sur ce site pour indiquer sur chaque page qu'elle fait partie d'un blog personnel s'intitulant "It-Signal" dont je suis l'auteur et que le post de blog est publié sous licence CC-BY-NC-SA.
Ce type d'informations évidentes pour les utilisateurs humains sont plus complexes à obtenir pour un web-crawler.
L'insertion de ces balises Microdata favorisent la compréhension de son site par les moteurs de recherche et permettent la création de résultats de recherche mieux présentés.

Ce n'est malheureusement pas encore bien au point chez Google puisque seuls certains types d'informations sont pris en compte (comme les revues d'objets ou les recettes par exemple): 


![Exemple de résultats](/images/microdata.png)

Pour tester la bonne mise en place de vos balises vous pouvez vous aider de l'[outil de test][Testing tool] de Google (encore).

[Microdata]: //en.wikipedia.org/wiki/Microdata_(HTML) "Microdata sur wikipedia"
[Webmaster Tools]: //www.google.com/intl/en/webmasters/ "Webmaster Tools par Google"
[Testing tool]: //developers.google.com/structured-data/testing-tool/ "Outil de test de Google"
