---
layout: post
title: XBMC on Headless Server
comments: true
categories : [Tech]
tags: [Linux, XBMC, Xorg, X11]
---

Un court article pour expliquer comment lancer un serveur X dédié à un processus sur un serveur headless.
Il suffit d'utiliser la commande [xinit] disponible dans le package du serveur X : [xorg].
J'utilise par exemple cette commande pour lancer un service [XBMC] (un super media-center) sur mon serveur Ubuntu qui ne dispose pas d'interface graphique.

Voici, pour l'exemple, le script de lancement du service :
<pre><code class="language-bash">#! /bin/sh

### BEGIN INIT INFO
# Provides:          xbmc
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: starts instance of XBMC
# Description:       starts instance of XBMC using start-stop-daemon and xinit
### END INIT INFO

############### EDIT ME ##################


# path to xinit exec
DAEMON=/usr/bin/xinit

# startup args
#DAEMON_OPTS=" /usr/bin/xbmc --standalone -- :0"
DAEMON_OPTS=" /usr/bin/xbmc"

# script name
NAME=xbmc

# app name
DESC=XBMC

# user
RUN_AS=xbmc

# Path of the PID file
PID_FILE=/var/run/xbmc.pid

############### END EDIT ME ##################

test -x $DAEMON || exit 0

set -e

case "$1" in
  start)
     echo "Starting $DESC"
     start-stop-daemon --start -c $RUN_AS --background --pidfile $PID_FILE  --make-pidfile --exec $DAEMON -- $DAEMON_OPTS
     ;;

  stop)
     echo "Stopping $DESC"
     start-stop-daemon --stop --pidfile $PID_FILE
     ;;

  restart|force-reload)
     echo "Restarting $DESC"
     start-stop-daemon --stop --pidfile $PID_FILE
     sleep 5
     start-stop-daemon --start -c $RUN_AS --background --pidfile $PID_FILE  --make-pidfile --exec $DAEMON -- $DAEMON_OPTS
     ;;

  *)
     N=/etc/init.d/$NAME
     echo "Usage: $N {start|stop|restart|force-reload}" >&2
     exit 1
     ;;
esac

exit 0</code></pre>


Une commande utile et simple à utilser qu'il ne faut pas oublier.

[xinit]: http://manpages.ubuntu.com/manpages/hardy/man1/xinit.1.html      "xinit - X Window System initializer"
[xorg]: http://fr.wikipedia.org/wiki/Xorg "Page wikipedia de Xorg"
[XBMC]: http://xbmc.org/ "XBMC mediacenter"