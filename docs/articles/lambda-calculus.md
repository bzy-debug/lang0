---
title: Lambda 演算
---

[ [WIKIPEDIA](https://en.wikipedia.org/wiki/Lambda_calculus) ]

# 表达式

起源 -- 如何无歧义地描述函数？

```
a*x^2 + c
```

解释方式：

1. 是 一个常数。
2. 是 `x` 的函数。
3. 是 `a, x` 的函数。
4. 是 `a, x, c` 的函数。
5. ...

数学的解决方式是做一些隐式的约定，
比如 `x, y, z` 代表函数的变元。

Church 发明了 lambda 表达式，
可以更好地解决「如何无歧义地描述函数？」这个问题。

三个表达式：

```
<exp> := <var>
      | (<exp> <exp>)
      | (lambda (<var>) <exp>)
```

例子：

```
x
f
(f x)
(lambda (x) x)
((lambda (x) x) f)
```

两种缩写：

```
(lambda (x) (lambda (y) ...))
(lambda (x y) ...)
```

```
((f a) b)
(f a b)
```

解决「起源」中所提到的问题：

```
TODO
```

# 计算

一个计算规则 -- 代入（substitution）：

```
((lambda (x) M) N) => M [N/x]
```

上面的步骤也叫作 beta-reduction step。

```
((lambda (t) (lambda (f) t)) (lambda (x) x))
=>
(lambda (f) (lambda (x) x))

((lambda (t) (lambda (t) t)) (lambda (x) x))
=>
(lambda (t) (lambda (t) t))

((lambda (t) (t (lambda (t) t))) (lambda (x) x))
=>
((lambda (x) x) (lambda (t) t))
=>
(lambda (t) t)
```

约束变元与自由变元。
形成抽象，是对自由变元而言的。

以一致的方式更换约束变元的名字，
是不会影响表达式的意义的，表达式还是和原来相等的。

这种等价关系叫 alpha-equivalent。

# 编码

假设我们可以用 `(define)` 这个命令来做定义，并且有如下的缩写。

```
(define f (lambda (x) ...))
(define (f x) ...)
```

编码 boolean：

```
(define (true t f) t)
(define (false t f) f)

(define true (lambda (t f) t))
(define false (lambda (t f) f))

(define (if p t f) (p t f))

(define (and x y) (if x y false))
(define (or x y) (if x true y))
(define (not x) (if x false true))
```

可以验证：

```
(and true false) => false
(or true false) => true
(not true) => false
(not (not true)) => true
```

编码对子（从而编码链表）：

```
TODO
```

编码自然数：

```
TODO
```

# 结论

也就是说，有了 lambda 就有了一切数据类型与计算。
就像图灵机一样，所有的计算都可以用 lambda 来表达。

并且 lambda 很简单，只有三个表达式，和一个计算规则，
所以它成为了很多人研究程序语言的基础。
