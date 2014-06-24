---
layout: post
title: Scala et la programmation fonctionnelle
comments: true
categories : [news]
tags: [Scala, formation, FP]
---

J'ai suivi il y a quelques mois [une formation à la programmation fonctionnelle avec Scala sur coursera][progfun].
La formation est assurée par [Martin Odersky] de l'[Ecole Polytechnique Fédérale de Lausanne][EPFL], créateur du langage [Scala].
J'ai adoré la formation et j'ai même rempilé pour une seconde série de [cours sur la programmation réactive][reactive-001].

![Le logo de la formation FP - Scala sur Coursera](/images/scala.png "Le logo de la formation FP - Scala sur Coursera")

Avant de me lancer dans ces cours, j'avais entendu parler de programmation fonctionnelle et 
je connaissais vaguement les grands principes  de ce type de languages,
mais je n'avais jamais réellement codé avec un language fonctionnel.
J'avais envie de découvrir de nouveaux languages sur la JVM, Scala me semblait un bon choix,
malgré les critiques que j'ai pu entendre par-ci par-là (les [Cast Codeurs] ?).

L'histoire des languages informatiques
--------------------------------------

Les premières vidéo ont abordé l'histoire des languages informatiques et quelque grands concepts de programmation : 
les notions de [stratégies d'évaluation](http://en.wikipedia.org/wiki/Evaluation_strategy) (par valeur ou par référence), 
la récursion, les opérateurs fonctionnels, le [currying](http://en.wikipedia.org/wiki/Currying)...

Il  m'a semblé intéressant de sortir du carcan de la programmation objet Java pour aller explorer les concepts des languages de programmation.
Dans mon travail de tous les jours, Java "classique" est omniprésent, à tel point que j'en oublie qu'il existe d'autres façon de 
modéliser un programme ([programmation évènementielle](http://fr.wikipedia.org/wiki/Programmation_%C3%A9v%C3%A9nementielle),
[programmation logique](http://fr.wikipedia.org/wiki/Programmation_logique)...). 
Toutes ces notions sont importantes pour élargir notre vision de l'informatique 
et nous permettre de choisir au quotidien la solution la plus adaptée au problème.
Avec Java on a tendance à [avoir un marteau et à voir tous les problèmes comme des clous](http://en.wiktionary.org/wiki/if_all_you_have_is_a_hammer,_everything_looks_like_a_nail).

La programmation fonctionnelle
------------------------------

Elégance et simplicité du code.
Simplicité de certains algorithmes
Expressivité du language

(Le cours permettait de comprendre les mécanisme sous-jacent aux concepts enseignés)

La programmation réactive
-------------------------

Les principes de la programmation réactive
Gestion évènementielle
Les Monades
Promises, futures... (réutilisation dans JS)
Streams
Programmations par acteurs Akka


Conclusion
----------

Adoré

Deux certificats + liens


[EPFL]: http://www.epfl.ch/ "Le site de l'EPFL"
[Martin Odersky]: https://www.coursera.org/instructor/~275 "Profil de MArtin Odersky sur Coursera"
[Scala]: http://www.scala-lang.org/ "Site officiel de Scala"
[progfun]: https://www.coursera.org/course/progfun "Formation Coursera à la programmation fonctionnelle"
[reactive-001]: https://www.coursera.org/course/reactive "Formation Coursera à la programmation réactive"
[Cast Codeurs]: http://lescastcodeurs.com/ "Le podcast Java en Français"