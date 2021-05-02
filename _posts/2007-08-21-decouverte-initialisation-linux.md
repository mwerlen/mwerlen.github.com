---
layout: post
title: D&eacute;couverte initialisation Linux
originalName: attention-parle-dinformatique-si-vous.html
date: 2007-08-21
comments: false
categories : [archives]
tags: [informatique, scolarite, linux]
---

Petites découvertes de la journée :

* Sous les dernières versions du kernel Linux, le fichier `inittab` n'est plus utilisé 
vous pouvez faire toutes les modifications que vous voulez, tous les `init q` que vous 
voulez, ça ne changera rien. Tout se configure dans `/etc/default/` c'est pas plus 
compliqué et ça marche bien.
* Ubuntu Feisty a un bug dans les fichier `/etc/default/tty[1-6]`, il faut effacer tout 
le début de la ligne avant `exec /sbin/getty 38400 tty1`

Voilà, c'est tout pour les découvertes informatiques de la journée.

Je me remets au boulot sur mon projet de stage. Au passage je vous montre mon magnifique 
serveur de test : un vieux linux qui traine dans une salle de réunion vide...

![Mon serveur de test]("images/pc_pourri.JPG" "Mon serveur de test")
