import { Env } from "../env"
import { Parser } from "../parser"

const parser = new Parser()

{
  // ((lambda (t) (lambda (f) t)) (lambda (x) x))
  // =>
  // (lambda (f) (lambda (x) x))

  const env = new Env()
  const exp = parser.parseExp("((lambda (t f) t) (lambda (x) x))")
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}

{
  // ((lambda (t) (lambda (f) t)) (lambda (x) x))
  // =>
  // (lambda (f) (lambda (x) x))

  const env = new Env()
  const exp = parser.parseExp("((lambda (t) (lambda (f) t)) (lambda (x) x))")
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}

{
  // ((lambda (t) (lambda (t) t)) (lambda (x) x))
  // =>
  // (lambda (t) t)

  const env = new Env()
  const exp = parser.parseExp(`
    (((lambda (t) (lambda (t) t)) (lambda (x) x)) (lambda (z) t))
  `)
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}

{
  // ((lambda (t) (t (lambda (t) t))) (lambda (x) x))
  // =>
  // ((lambda (x) x) (lambda (t) t))
  // =>
  // (lambda (t) t)

  const env = new Env()
  const exp = parser.parseExp(
    "((lambda (t) (t (lambda (t) t))) (lambda (x) x))"
  )
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}
