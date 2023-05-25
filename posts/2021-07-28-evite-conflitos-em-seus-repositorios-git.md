---
layout: post
title: Evite conflitos em seus repositórios GIT
description: Você trabalha com mais de duas branchs nos repositórios GIT e sempre acaba com conflitos quando vai fazer merge de uma nova funcionalidade/ajuste?
categories: ["blog"]
comments: true
tags: ["git"]
type: single
permalink: /blog/:title/
---

Em projetos que possuem branchs para produção (geralmente "master" ou "prod) e homologação ("dev" ou "staging"), alguns cuidados devem ser tomados para criar uma funcionalidade, ou fazer um ajuste no código.

### Crie sua nova branch a partir de master

A primeira dica é criar a sua nova branch (por exemplo "fix-button") sempre a partir da branch de produção, que é sua branch aprovada, que está no ar e atualizada:

```sh
$ git checkout master
$ git checkout -b fix-button
```

Agora sua nova branch foi criada a partir de master.

A partir disso, na sua branch "fix-button" faça os ajustes necessários e comite.

### Suba sua nova branch para homologação

Estando tudo ok, é hora de subir esse ajuste na branch de homologação para aprovação do cliente:

```sh
$ git checkout dev
$ git merge fix-button
```

Agora seus novos ajustes estão na branch dev.

### Dica de ouro para evitar conflitos

E é agora que vem a dica:

Uma vez que seus ajustes foram aprovados e podem ir para o ar, iremos fazer o merge da nossa branch "fix-button" diretamente para nossa branch "master".

### Mas por quê?

Imagine que antes dos ajustes da branch "fix-button" tivemos outros ajustes ("fix-header", "fix-footer", etc) e todos estes ajustes estão no ambiente de homologação MAS: NÃO FORAM APROVADOS.

Não podemos fazer merge de "dev" diretamente para "master".

Se "dev" for para "master" diversos outros ajustes, que ainda podem estar sendo desenvolvidos ou que ainda não fora aprovados, podem acabar quebrando nosso ambiente de produção.

Por isso é perigosíssimo fazer merge da branch "dev" para "master".

### Um breve resumo

Resumindo, prefira seguir o fluxo:

1. master <- fix-button
2. Faça os ajustes necessários em "fix-button"
3. fix-button -> dev
4. Aprove os ajustes em homologação
5. fix-button -> master
6. Delete a branch "fix-button"

Assim seu repositório ficará limpo e livre de conflitos.

### Conclusão

Claro que esse fluxo de branch não vai te livrar definitivamente de todos os conflitos que podem acontecer em seus projetos.

Mas ter um fluxo claro de branchs em seu repositório deixa o desenvolvimento mais organizado e consequentemente teremos um processo com menos conflitos.
