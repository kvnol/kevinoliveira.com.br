---
layout: post
title: Como organizar os diretórios do seu projeto front-end?
description: Organize os diretórios front-end e tenha um projeto escalável.
permalink: /blog/:title/
comments: true
---

No início de nossas carreiras como front-end, começar um novo projeto é sempre um saco (pelo menos foi pra mim). Ter que estruturar pastas, criar e renomear arquivos, instalar dependências, configurar automatizadores e blá, blá, blá.

E, utilizando o amigo [Willian Justen](https://willianjusten.com.br/) como inspiração, escrevi esse post ouvindo o álbum "[With The Beatles](https://play.spotify.com/album/3nkEsxmIX0zRNXGAexaHAn?play=true&utm_source=open.spotify.com&utm_medium=open)" dos Beatles, de 1963, que conta com diversos clássicos como "Please Mister Postman" e maravilhosa "All My Loving". Mas chega de enrolação e vamos para o post.

E antes mesmo de saber tudo o que precisamos (e até o que existe no universo front-end) criar, instalar e configurar; quem nunca começou um projeto dessa forma:

<script src="https://gist.github.com/kvnol/9b6d611d241a02e3a6ae13ec341a96ab.js"></script>

Eu, pelo menos, durante os primeiros anos de estudo, todos meus projetos eram iniciados desta forma. “Mas Kevin, qual o real problema de uma estrutura dessa?” — E a resposta é: **_manutenibilidade_** e **_escalabilidade_** do seu código.

Seu código precisa estar legível e organizado para ajustes e criações de features, por isso a maior dica que posso lhe dar é: crie componentes para seu projeto.

E para melhor desempenho com os componentes, use *[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)*, onde você pode separar os componentes desde os: **átomos** (elementos mínimos, como labels, botões e inputs); **moléculas** (junção destes átomos, como a barra de pesquisa); e **organismos** (que é a junção dessas moléculas, como o cabeçalho do site).

![atomic design instagram](/assets/img/posts/2017/02/05/atomic-design.png)

Com esse método de desenvolvimento em mente, vamos ter uma manutenção de código muito mais satisfatória pois, além de organizado, você terá diversos arquivos curtos em seu projeto — esqueça aqueles arquivos *.css* com mais de mil linhas.

E, utilizando o pré-processador (eu utilizo o [SASS](http://sass-lang.com/)) do seu gosto, já podemos dar um up na nossa estrutura de diretórios, de uma forma bem básica, assim:

<script src="https://gist.github.com/kvnol/f075553e7a1034138b97af4c41a8aaf9.js"></script>

Essa estrutura pode ser personalizada ao seu gosto e ao que mais se encaixa no seu workflow, o que realmente importa é aumentar sua produtividade no **_coding time_**.

Para finalizar esse post bem básico (há muito não escrevo nada), quero deixar algumas referências que me influenciaram a escrever esse post e que servem como referência e consulta diária para mim:

- "[Como começar um projeto web corretamente?](https://github.com/frontendbr/forum/issues/214)" — Fórum Front-end Brasil no GitHub
- "[Estrutura de diretórios](https://github.com/frontendbr/forum/issues/89)" — Fórum Front-end Brasil no GitHub
- "[Um conto sobre componentização e quebra de paradigmas](http://www.felipefialho.com/blog/2013/um-conto-sobre-componentizacao-e-quebra-de-paradigmas)" — Blog do Felipe Fialho
- "[Atomic Design](http://atomicdesign.bradfrost.com/)" — Livro do Brad Frost