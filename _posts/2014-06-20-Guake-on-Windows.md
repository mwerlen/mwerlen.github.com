---
layout: post
title: Un shell correct et toujours disponible sous windows
comments: true
categories : [Tech]
tags: [Linux, Shell, Bash, Babun, Guake, Mintty, Clink]
---

Sur mon PC personnel (sous Linux Mint) j'utilise beaucoup l'application [Guake] qui permet d'avoir un shell toujours disponible.
Un raccourci clavier (CTRL + ² pour moi) permet de faire apparaitre un shell sur 60% de l'écran au-dessus des autres applications.
Le même raccourci permet de masquer le shell et de le faire réapparaitre.
C'est particulièrement utile lorsque l'on n'a qu'un seul écran et que l'on veut suivre un tutoriel, 
on bascule en permanence entre un navigateur et un shell.
On va voir comment avoir un équivalent sous Windows.
   
![Exemple d'utilisation de Guake](http://www.pztrick.com/uploads/2013-05-18-guake-tabs-indicator.png "Exemple d'utilisation de Guake")

Un shell sous windows
---------------------

Sous windows, il existe plusieurs solutions pour avoir un bash presque utilisable : 

* [Clink] qui ajoute toutes les bonnes choses de Bash dans le shell Windows (cmd)
* [Babun] qui installe automatiquement [cygwin] et quelques extensions (dont un gestionnaire de paquets cygwin) 
ainsi qu'un émulateur de terminal [mintty]

J'utilise les deux : Clink me permet d'avoir un shell windows amélioré et Babun me permet d'avoir un bash correct.
 
Un Guake like sous windows
--------------------------

J'ai découvert récemment [Mintty-Quake-console] qui ajoute la possibilité de lancer un Mintty (celui de [Babun]) 
docké en haut de l'écran grâce à un raccourci clavier. La taille et le raccourci sont bien évidemment configurables.
Ça fonctionne très bien. Voici le résultat :

![Mon écran avec un shell d'ouvert](/images/mintty-quake-console.png "Mon écran avec un shell d'ouvert") 


La gestion des onglets
----------------------

[Mintty] ne gère pas d'onglets, donc pas possible pour [Mintty-Quake-console] d'en avoir.
Comment pallier à cette faiblesse évidente : [Gnu Screen].
[Screen][Gnu Screen] est une console virtuelle qui permet de manipuler dans le même écran plusieurs consoles.
Quelques configurations pour lancer automatiquement un screen au démarrage et quelques configurations de screen plus tard 
on se retrouve avec une console cygwin totalement opérationnelle.
 
Pour lancer automatiquement un screen au lancement de bash :

<pre><code class="language-bash">
# Auto-screen invocation. see: http://taint.org/wk/RemoteLoginAutoScreen
# if we're coming from a remote SSH connection, in an interactive session
# then automatically put us into a screen(1) session.   Only try once
# -- if $STARTED_SCREEN is set, don't try it again, to avoid looping
# if screen fails for some reason.
if [ "$PS1" != "" -a "${STARTED_SCREEN:-x}" = x ]
then
  STARTED_SCREEN=1
  export STARTED_SCREEN
  [ -d $HOME/lib/screen-logs ] || mkdir -p $HOME/lib/screen-logs
  sleep 1
  screen -RR && exit 0
  # normally, execution of this rc script ends here...
  echo "Screen failed! continuing with normal bash startup"
fi
# [end of auto-screen snippet]
</code></pre>

Ma configuration de screen pour gérer correctement le scroll, l'initialisation et quelques raccourcis :

<pre><code class="language-bash">
#Three main screens
screen -t music 0 /usr/bin/bash
screen -t GIT 1 /usr/bin/bash
screen -t main 2 /usr/bin/bash


# This status is the same as the above, except it puts "<username>@" in front of the hostname
hardstatus alwayslastline "%{=b}%{G}Screen @ %0`@%H: %{C}%w %=%{G}%D, %m/%d"

#Key bindings
# Scroll
termcapinfo xterm* ti@:te@
#F1-F12
bindkey "^[OP" select 1
bindkey "^[OQ" select 2
bindkey "^[OR" select 3
bindkey "^[OS" select 4
bindkey "^[[15~" select 5
bindkey "^[[17~" select 6
bindkey "^[[18~" select 7
bindkey "^[[19~" select 8
bindkey "^[[20~" select 9
bindkey "^[[21~" select 0
bindkey "^[[23~" prev
bindkey "^[[24~" next
bindkey "^[^[[C" forward-word      # Meta-RightArrow
bindkey "^[^[[D" backward-word     # Meta-LeftArrow

#Disable screen welcome message
startup_message off

#Scroll buffer
defscrollback 100000
</code></pre>

Finalement on se retrouve donc avec une machine windows qui lance un cygwin, qui lance un mintty qui lance un bash qui lance un screen qui lance plusieurs bash.
Bienvenue notre votre nouveau remake d'Inception version shell.  



[Guake]: http://en.wikipedia.org/wiki/Guake "Page wikipedia de Guake"
[Clink]: http://mridgers.github.io/clink/ "La page officielle de Clink"
[Babun]: http://babun.github.io/ "Le site officiel de Babun" 
[Cygwin]: https://www.cygwin.com/ "La page officielle de Cygwin"
[mintty]: https://code.google.com/p/mintty/ "La page officielle de Mintty" 
[Mintty-Quake-console]: https://github.com/lonepie/mintty-quake-console "Page github de Mintty-quake-console
[Gnu Screen]: http://en.wikipedia.org/wiki/GNU_Screen "La page wikipedia de Screen"