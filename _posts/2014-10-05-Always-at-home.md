---
layout: post
title: "Always @ Home"
comments: true    
date: 2014-10-05
tags: [Linux, VPN, SSH, HTTPS, Tunnel]
---

J'ai depuis quelques années un petit serveur chez moi que j'utilise pour plein de choses différentes (hébergement d'un serveur de streaming audio/vidéo, média-player, hébergement de photo, serveur de fichier). J'ai régulièrement besoin de m'y connecter, généralement en SSH, mais ce n'est pas toujours aussi simple.

SSLH
----

J'ai découvert [SSLH](http://www.rutschle.net/tech/sslh.shtml "Page officielle de SSLH") lorsqu'un firewall a bloqué mon accès SSH à mon serveur perso. Pour contourner cette limitation, j'ai installé SSLH qui est multiplexer SSL/SSH. Les deux protocoles peuvent ainsi utiliser le port 443 qui n'est presque jamais fermé. Selon la séquence de handshake, le multiplexer redirige le flux vers le serveur Apache qui prendra en charge le SSL ou vers le serveur SSHD qui prendra en charge la session SSH.
Le service est très simple à installer et très efficace.


VPN
---

J'utilise depuis quelques mois un serveur VPN ([openvpn](https://help.ubuntu.com/community/OpenVPN)) hébergé sur mon serveur perso.
Il me sert principalement à accéder à des services que je ne souhaite pas ouvrir sur internet (backoffice douteux de certains logiciels...).
Toutes les connexions VPN arrivent par sécurité dans une zone IP séparée. Le firewall de mon serveur n'autorise ainsi que quelques services à être accédés depuis cette zone.
J'ai généré les clés nécessaires à partir de ma petite PKI personnelle (avec ma clé root autosignée). 
Les configurations sont installées sur tous mes devices : ordinateurs perso et pro et téléphone portable.


Tous ces petits outils sont bien utiles pour administrer à distance mon petit serveur perso. Je vous recommande de jeter un oeil à ces outils avant d'être bloqué derrière un firewall trop strict :)