---
layout: base
title: Progfun-plan
---

Plan de la présentation programmation fonctionnelle
===================================================

**Objectif de la présentation :** 

* Savoir qu'il existe plusieurs paradigmes de programmation
* Savoir les différentier
* Savoir reconnaitre et utiliser les principaux pattern de la programmation fonctionnelle
* Passer un moment sympa et manger des pizza

Histoire des languages
----------------------

- Architecture Von Neumann : machine à calculer simple
- Assembleur : language au dessus du compilateur
- Fortran : abstractions
- Algol : données typées
- Apparition des language de programmation évolués


Différence entre les principaux paradigmes
------------------------------------------

### Programmation procédurale
* Gestion d'un état et instructions de modification de l'état
* Effet secondaires (effet de bord)
* GOTO (modification du pointeur du programme)

### Programmation orientée objet
* Modification de l'état du programme à travers des objets métier

### Programmation logique
* Complètement déclaratif
* Ne sert à rien pour de vrai :)

### Programmation fonctionnelle

#### Programmation purement fonctionnelle
* Pas d'affectation
* Répétabilité : même paramètres en entrée = même résultat en sortie

→ Facilite grandement les tests et la réutilisabilité <br/>
→ Language plus proche des spécifications : on explique ce que ça doit faire, pas comment le faire <br/>
→ Paralélisation plus simple                                                                             <br/>

#### Programmation fonctionnelle impure
* Affectation possible
* Possibilité de travailler en orienté objet
* Utilisation des patterns fonctionnels et impératifs dans le même language
* Limiter les effets de bord

→ Présentation Scala

Les principaux pattern de la programmation fonctionnelle
-----------------------------------------------------------

### Fonctions ?

### Transparence référentielle et méthodes de substitutions
" A functional program is not a sequence of instructions. It is a single referentially transparent expression.
Computation proceeds by substitution."
#### Lazy Evaluation
#### Streams


### Fonctions 
#### Les fonctions d'ordres supérieurs
p25 de https://speakerdeck.com/elise_huard/functional-programming-is-the-new-black
→ Monades

#### Currying

#### La récurcivité

### Les structures immutables (listes...)


 
### La gestion des erreurs, de la nullité...
Options, Try


----

Sources
=======

### FP
- ["Programmation Fonctionnelle en HOPE"](http://www.labri.fr/perso/billaud/travaux/hope.pdf) par Michel Billaud
- ["The Guerilla Guide to Functional Programming"](https://docs.google.com/file/d/0B6Pvyu_QqshwYmU1OTg0OGEtMTMwMC00YmQ3LWIxY2MtYzdiMDNiM2QzNjZh/edit?hl=en) par Runar Oli Bjarnason
- ["Functional Programming is the new black"](https://speakerdeck.com/elise_huard/functional-programming-is-the-new-black)  par Elise Huard
- [La page wikipedia sur la programmtion fonctionnelle](http://fr.wikipedia.org/wiki/Programmation_fonctionnelle)

### Scala
- ["Scala introduction"](http://scalacamp.pl/intro/#/start)

### Reactive
- ["Typesafe blog post on Reactive 2.0"](http://typesafe.com/blog/reactive-manifesto-20)