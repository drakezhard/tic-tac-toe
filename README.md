# tic-tac-toe

This is an example [Om Next](https://github.com/omcljs/om/wiki/Quick-Start-(om.next)) Tic Tac Toe game. 
You can find it live at [tic-tac-toe.drakezhard.org](http://tic-tac-toe.drakezhard.org). 
It was built using the following tools and libraries: 

* Martin Klepsch's [Boot](https://github.com/boot-clj/boot) template [Tenzing](https://github.com/martinklepsch/tenzing).
* Bozhidar Batsov's Emacs plugin for clojure development [Cider](https://github.com/clojure-emacs/cider).
* [Om-Tools](https://github.com/plumatic/om-tools): A ClojureScript library of general-purpose tools for building applications with Om and Facebook's React.
* [Om-Bootstrap](https://github.com/racehub/om-bootstrap): A ClojureScript library of Bootstrap 3 components built on top of Om.
* [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) and [CSS](https://en.wikipedia.org/wiki/CSS)

## Build Instructions

#### Install Om Next (it's currently alpha software, so it's not available on clojars):

1. Clone [Om](https://github.com/omcljs/om) from GitHub.
2. Enter the om directory.
3. Issue the command `$ lein install`.

#### Install [Boot](https://github.com/boot-clj/boot):

Execute the following command:

    $ sudo bash -c "cd /usr/local/bin && curl -fsSLo boot https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh && chmod 755 boot"

#### Run it:

1. Clone this repository into your computer.
2. Issue the command `$ boot dev`.
3. Wait for it to compile.
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## License

Copyright © 2016 Ricardo J. Acuna

Distributed under the [Eclipse Public License](https://www.eclipse.org/legal/epl-v10.html), the same as Clojure.

