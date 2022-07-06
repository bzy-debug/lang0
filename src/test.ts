import { Env, Value, Var, Fn, Ap } from "./index"

{
  // ((lambda (t) (lambda (f) t)) (lambda (x) x))
  // =>
  // (lambda (f) (lambda (x) x))

  const env = new Env()
  const exp = new Ap(
    // (lambda (t) (lambda (f) t))
    new Fn("t", new Fn("f", new Var("t"))),
    // (lambda (x) x)
    new Fn("x", new Var("x"))
  )
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}

// ((lambda (t) (lambda (t) t)) (lambda (x) x))
// =>
// (lambda (t) t)

// ((lambda (t) (t (lambda (t) t))) (lambda (x) x))
// =>
// ((lambda (x) x) (lambda (t) t))
// =>
// (lambda (t) t)
