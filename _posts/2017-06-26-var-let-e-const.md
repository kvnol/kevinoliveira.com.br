---
layout: post
title: "Qual a diferença entre var, let e const?"
description: "No JavaScript o escopo das variáveis pode se tornar um problema. Então, para evitá-los, saiba a diferença entre declarar variáveis com var, let e const."
categories: ["blog"]
tags: ["javascript"]
comments: true
type: single
visible: true
permalink: /blog/:title/
---

Qualquer variável definida sem a utilização do `var`, `let` ou `const` possui escopo global e pode ser acessada em qualquer parte de seu código JavaScript e isso pode acarretar uma série de problemas, mas qual a diferença entre essas palavras?

### A palavra-chave `var`
Para definirmos escopos locais com a palavra-chave `var` é necessário que ela esteja dentro de uma função, mas repetindo-a, mesmo dentro de outros blocos da mesma função, seu valor é sobreescrito:

{% highlight javascript %}
function varExemplo() {
  var x = 1;
  if (true) {
    var x = 2; // mesma variável
    console.log(x); // 2
  }
  console.log(x); // 2
}

console.log(x); // undefined
{% endhighlight %}

### A palavra-chave `let`
Não sendo possível criar variáveis locais por bloco com a palavra `var`, a palavra-chave `let` foi criada permitindo essa funcionalidade nas novas versões da linguagem, provendo um escopo mais limitado:

{% highlight javascript %}
function letExemplo() {
  let x = 1;
  if (true) {
    let x = 2; // mesma variável
    console.log(x); // 2
  }
  console.log(x); // 1
}

console.log(x); // undefined
{% endhighlight %}

### A palavra-chave `const`
Alguns valores em nosso código precisam tanto terem um escopo reduzido, quanto serem imutáveis. E a palavra `const` foi criada exatamente para isso. Possuindo as mesma funcionalidades da palavra `let`, a `const` traz a imutabilidade para identificadores nas últimas versões da linguagem.

{% highlight javascript %}
function constExemplo() {
  const x = 1;
  if (true) {
    var x = 2; // Identifier 'x' has already been declared
    let x = 2; // Identifier 'x' has already been declared
    const x = 2; // Identifier 'x' has already been declared
    console.log(x); // 1
  }
  console.log(x); // 1
}

console.log(x); // undefined
{% endhighlight %}

Após a implementação das palavras-chaves `let` e `const` no ECMAScript 6, o uso da palavra `var` se tornou "depreciada" entre desenvolvedores JavaScript por conta dos benefícios que o `let` traz em comparação à ela, mas se você quer que sua variável seja global ainda é totalmente válido utilizá-la.