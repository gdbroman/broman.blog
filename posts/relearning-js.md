---
title: 'Poor JS. They call you weird.'
date: '2021-07-14'
isPinned: true
---

> I'm a single-threaded, non-blocking asynchronous concurrent language
>
> I have a call stack, an event loop, a callback queue, and some other apis
>
> <cite>[- JavaScript](https://www.youtube.com/watch?v=8aGhZQkoFbQ)</cite>

So you can make your app fetch an api. Your button consumes a global state. But whenever there's red in the console you go crying to Stack Overflow.

Building stuff with frameworks is great. Get started. Learn by doing and all that jazz. But, lacking under-the-hood understanding, you'll inevitably plateau (I did).

So I took a Udemy course.

## How Your Computer Understands JavaScript

**Problem:** You speak JavaScript, computer no comprendo.

**Solution:** We dumb it down:

- A _syntax parser_ turns...
  - high level code -> a data structure (tree or graph)
- A _compiler_ then translates...
  - the data structure -> lower level language (machine code)

This is not to be confused with _transpiling,_ which is the syntax-conversion of one high-level programming language to another (e.g. TypeScript -> JS).

## WTH's an Execution Context?

Before we can understand how JS runs, we need to understand what an execution context is.

The execution context is whatever environment in which a piece of code is executed. Type `this`, and you'll find out. Its content will depend on whether you're inside a function or not, but generally it contains...

- Local code (variables, objects, functions)
- Global object (accessed by `window` in the browser)
- Lexical environment (a reference to its outer environment)

## How Is Javascript Run?

An execution context is executed in two phases:

- **1\. A creation phase:** setup _memory space_ for variables and functions (a.k.a. _hoisting_)
- **2\. A code execution phase:** run through the code line by line (explained how below)

During the creation phase, all variables are initially set to `undefined`, whereas functions are sat in memory in their entirity. Note, however, that `undefined` is not the same as _'ReferenceError: my_var is not defined'_, which is when a variable hasn't been allocated memory space.

### Event Loop and Execution Stack

So, when running a program, the global execution context is created, and then, whenever a function is invoked, its execution context is put on top of the _execution stack_.

Keep in mind that JavaScript is single threaded, which means that it has _one_ call stack. It is also synchronous—meaning each command is executed in order.

> Tip: [latentflip.com/loupe](http://latentflip.com/loupe) is an interactive visualization tool for understanding the JavaScript event loop.

Each function creates its own execution context, which runs through a create and execution phase. And when a function at the top of the stack finishes, it is popped off.

## Understanding the Scope Chain

Consider the following piece of code—what will it log?

```js
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;

a();
```

The correct answer is `1`. Why not `undefined`?

Because if a variable is not defined within _the current execution context_, it will go to its _outer environment_ and look for it there (in this case, it's the global execution context). The _scope chain_ is simply this chain of outer environment references.

## JS Typing: It's Basically Untyped

JavaScript is _dynamically typed_; i.e. there are no keywords for the kind of data you intend pointing a variable to. This is obviously the main difference in TypeScript, which is _statically typed_.

### What are Primitive Types?

> A primitive type is a type of data that represents a single value (i.e. not a name-value pair or an object)

There are six primitive types in JavaScript:

- `undefined` = "lack of existence"
- `null` = also "lack of existence", but it's an assignment value
- `boolean` = can be either `true` or `false`
- `number` = floating point number, i.e always some decimals (the only numeric type in JS)
- `string` = just text
- `symbol` = used in ES6

### What \*Are\* Operators?

An operator is a syntactically different _function_. Operators generally take two parameters and return one result.

Unlike regular functions, they use _infix notation_, i.e. `3+4`, instead of _prefix notation_ `+(3,4)`, or _postfix notation_ `(3, 4)+`.

- _Operator precedence_ = which function gets called first
- _Operator associativity_ = in what order functions get called (left to right, or right to left)

### What Is Coercion?

_Coercion_ means to convert a value from one type to another, e.g:

```js
var a = 1 + '2';
```

Sometimes coercion behaves weirdly:

```js
console.log(3 < 2 < 1); // true
console.log(Number(undefined)); // Nan
console.log(Number(null)); // 0
```

Equality (`==`) coerces, strict equality (`===`) doesn't:

```js
console.log(Number('3' == 3)); // truthy
console.log(Number('3' === 3)); // falsy
```

In other words, use strict equality when you can. Otherwise code becomes hard to anticipate.

Lastly, we can use coercion to check if a var has been defined (but mind zero!)

```js
if (a || a === 0) {
  console.log("There's a there there.");
}
```

### JSONs vs. Object Literals

JSON requires quotes for keys, objects do not. All JSON's can thus be used as objects, not vice versa.

But since they're so similar, JavaScript has a lot of inbuilt functionality for JSON's:

- `JSON.stringify()` takes an object & spits out JSON as a string
- `JSON.parse()` takes a string & spits out an object

### Object Literals vs. Constructors

`{}` is essentially the same as `new Object()`, but objects created using literals are global. And constructors allow us to create instances of objects.

### Functions Are Objects!

JavaScript has _first-class_ functions, i.e. they can be treated as any other object/type (create them, pass them around, etc.) This is why JS is great for _functional programming_.

Although, functions differ from objects in two ways:

1. anonimty—name is optional
2. invocable() code

When a function is attached in an object, `this` within the function refers to the object, whereas anonymous functions' `this` refers to its creator.

### Passing by Value vs. by Reference

Lastly, all primitives are passed _by value_, and all objects (including functions) are passed _by reference._

A primitive value variable `a` points to a place in memory (e.g. 0x001). If we pass a new var `b` to that var `a`, it will create a copy of the primitive value located _somewhere else in memory_ (e.g. 0x002). This is called _by value_ (i.e. copying value into two separate spots in memory). It means we can change `a`, after the fact, _without affecting_ `b`.

When we copy an object variable however, that new variable will point to the _same location in memory_ (aka _by reference_):

```js
a = new Object(); // 0x001
b = a; // 0x001
```

## To `pop()` things off...

Poor JS. They call you weird.

Isn't fair. Shouldn't be feared.

Those who learn your quirks—

We shall hear them cheer.

See, you're effective,

Not defective, dear.
