---
layout: post
title: Sécurisation des mails
comments: true    
date: 2015-02-22
categories : [Tech]
tags: [Linux, Postfix, SMTP, DKIM, DMARC, SPF, IMAP, DNS, Dnssec, mail, gpg, dovecot]
---

Ces derniers temps je me suis intéressé à la configuration et à la sécurisation d'un serveur de mail.
Mon but initial était de pouvoir m'envoyer des mails de mon adresse Gmail sur une adresse locale et inversement.
Cette première étape a été rapidement franchie grâce à l'installation d'un [postfix] et d'un [dovecot], mais Gmail mettait systématiquement mes mails en spam.

Les normes d'authentification
------------------------

En creusant j'ai découvert tout un ensemble de systèmes d'authentification des mails : [SPF], [DKIM] et [DMARC].
Ces normes permettent d'améliorer l'authentification du premier [MTA]  (le premier relais mail qui a reçu le mail de l'émetteur).
En mettant en place toutes ces normes (principalement des enregistrements DNS et des configurations de [postfix]) Gmail a accepté mes mails : mission réussie.
Il me restait néanmoins un arrière-gout d'inachevé, pourquoi s'arrêter au premier [MTA], pourquoi ne pas authentifier l'émetteur directement ?

[GPG] et la cryptographie
-------------------------

J'ai toujours été intéressé par la cryptographie et ses domaines annexes comme la gestion de certificat (j'ai ma petite PKI personnelle), la signature électronique (je signe les PDF que je produis) et l'archivage probant (non, ma folie a des limites, je n'ai pas de coffre-fort électronique).
En me renseignant sur l'authentification de l'émetteur je me suis rendu compte que toutes les technologies étaient basées sur de la signature électronique, soit en [X.509] avec par exemple Outlook ou [Thunderbird] soit avec [GPG].
[X.509] souffrant de trop nombreux problèmes pour que j'y fasse réellement confiance, j'ai décidé d'explorer GPG que je n'avais fait que survoler jusque-là.

J'ai suivi quelques tutoriels pour créer et publier [ma clé GPG](https://pgp.mit.edu/pks/lookup?op=vindex&search=0x49E573FA0D70DDA6) (vous la trouverez sur ma page [contact](/contact.html)).
J'ai configuré mes clients mail pour signer mes messages sortants.
Tout cela fonctionne parfaitement.

Un BBL
------

Pour ne pas garder le fruit de toutes ces recherches uniquement pour moi (j'ai bien essayé de partager avec ma femme, mais ça ne l'intéresse pas), j'ai décidé d'en faire une présentation dans mon [entreprise](//www.sogelink.fr).
En effet, tous les mois j'organise un [BBL]  (pour **B**rown **B**ag **L**unch), il s'agit d'un repas où chacun amène son repas (d'où les sacs bruns) et où l'un des participants présente une technologie ou sujet qui l'a intéressé.
Ce mois-ci c'était moi avec [ma présentation sur la sécurisation des mails](/presentations/securite-mails.html).
J'ai beaucoup appris en réalisant cette présentation devant un public exigeant de développeurs et d'administrateurs systèmes et j'espère qu'eux aussi ont appris quelque chose.

[postfix]: //en.wikipedia.org/wiki/Postfix_(software) "Postfix MTA"
[dovecot]: //en.wikipedia.org/wiki/Dovecot_(software) "Open-Source IMAP and POP server"
[SPF]: //en.wikipedia.org/wiki/Sender_Policy_Framework "Sender Policy Framework"
[DKIM]: //en.wikipedia.org/wiki/DomainKeys_Identified_Mail "DomainKeys Identified Mail"
[DMARC]: //en.wikipedia.org/wiki/DMARC "Domain-based Message Authentication, Reporting and Conformance"
[GPG]: //www.gnupg.org "Gnu Privacy Guard, implémentation libre de openPGP"
[X.509]: //en.wikipedia.org/wiki/X.509 "Standard X.509 de l'ITU"
[Thunderbird]: //www.mozilla.org/fr/thunderbird/ "Open-Source MUA"
[MTA]: //en.wikipedia.org/wiki/Message_transfer_agent "Message Transfert Agent"
[BBL]: //www.brownbaglunch.fr/ "Brown Bag Lunch"
