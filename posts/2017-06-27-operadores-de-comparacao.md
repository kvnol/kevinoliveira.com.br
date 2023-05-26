---
layout: post
title: "Como funcionam os operadores de comparação?"
description: "Você sabe o que são e como funcionam os operadores de comparação no JavaScript?"
categories: ["blog"]
tags: ["javascript"]
comments: true
type: single
visible: true
permalink: /blog/:title/
---

Utilizados para fazer testes e verificações no seu código, os operadores de comparação fazem parte da matemática básica dentro do JavaScript e retornam `true` (verdadeiro) ou `false` (falso) dependendo dos valores que estão sendo comparados.

Os operadores de comparação são: `==` (igualdade), `===` (igualdade estrita ou identidade), `!==` (não-igualdade estrita), `<` (menor que), `>` (maior que), `<=` (menor ou igual que), `>=` (maior ou igual que).

### O operador `==`
O operador de igualdade, composto por dois sinais de igual, converte o operando se ele **não for do mesmo tipo** e então aplica a comparação de igualdade estrita. No caso dos operandos serem objetos, o JavaScript procura se eles estão no mesmo espaço da memória (se são o mesmo objeto).

{% highlight javascript %}
1 == 1 // true
1 == '1' // true
1 == 2 // false
0 == false // true
0 == null // false
0 == undefined // false
null == undefined // true

var objeto1 = { 'id': 1 }, objeto2 = { 'id': 1 };
objeto1 == objeto2 // false
{% endhighlight %}

### O operador `===`
O operador de igualdade estrita, composto por três sinais de igual, compara dois valores levando em consideração o valor e o tipo não havendo **nenhuma conversão de tipo**.

{% highlight javascript %}
1 === 1 // true
1 === '1' // false
1 === 2 // false
0 === false // false
0 === null // false
0 === undefined // false
null === undefined // false

var objeto1 = { 'id': 1 }, objeto2 = { 'id': 1 };
objeto1 === objeto2 // false
{% endhighlight %}

### O operador `!==`
O operador de não-igualdade estrita, composto por uma exclamação e dois sinais de igual, compara dois operandos e retorna `true` se eles **não tiverem o mesmo valor e não forem do mesmo tipo**.

{% highlight javascript %}
1 !== 1 // false
1 !== '1' // true
1 !== 2 // true
0 !== false // true
0 !== null // true
0 !== undefined // true
null !== undefined // true

var objeto1 = { 'id': 1 }, objeto2 = { 'id': 1 };
objeto1 !== objeto2 // true
{% endhighlight %}

### O operador `<`
O operador menor que, representado pelo `<`, retorna `true` se o operando da esquerda for menor que o da direita. Comumente utilizado para testar objetos `number`, este operador também pode testar objetos do tipo `string`.

{% highlight javascript %}
1 < 2 // true
1 < 1 // false
0 < false // false
'a' < 'a' // false 
'a' < 'b' // true 
{% endhighlight %}

### O operador `>`
O operador maior que, representado pelo `>`, retorna `true` se o operando da esquerda for maior que o da direita. E, da mesma forma que o operado `<`, este operador também pode testar objetos do tipo `string`.

{% highlight javascript %}
2 > 1 // true
1 > 1 // false
0 < false // false
'a' > 'a' // false 
'a' > 'b' // false 
{% endhighlight %}

### O operador `<=`
O operador menor ou igual que, representado pelo `<=`, retorna `true` se o operando da esquerda for menor ou igual que o da direita. Funcionando da mesma forma que os operadores de teste simples (`<` e `>`), também testam objetos do tipo `string`.

{% highlight javascript %}
1 <= 2 // true
1 <= 1 // true
0 <= false // true
'a' <= 'a' // true 
'a' <= 'b' // true 
{% endhighlight %}

### O operador `>=`
O operador maior ou igual que, representado pelo `>=`, retorna `true` se o operando da esquerda for maior ou igual que o da direita. Este operador também pode testar objetos do tipo `string`.

{% highlight javascript %}
2 >= 1 // true
1 >= 1 // true
0 >= false // true
'a' >= 'a' // true 
'a' >= 'b' // false
{% endhighlight %}

Os operadores são peças fundamentais na programação de sua aplicação e é importantíssimo saber qual e quando utilizá-los nos seus testes diários.