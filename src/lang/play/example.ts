import { Env } from "../env"
import { Ap, Fn, Var } from "../exps"

{
  // ((lambda (t) (lambda (f) t)) (lambda (x) x))
  // =>
  // (lambda (f) (lambda (x) x))

  const env = new Env()
  const exp = new Ap(
    new Fn("t", new Fn("f", new Var("t"))),
    new Fn("x", new Var("x"))
  )
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}

{
  // ((lambda (t) (lambda (t) t)) (lambda (x) x))
  // =>
  // (lambda (t) t)

  const env = new Env()
  const exp = new Ap(
    new Ap(new Fn("t", new Fn("t", new Var("t"))), new Fn("x", new Var("x"))),
    new Fn("z", new Var("t"))
  )
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
  const exp = new Ap(
    new Fn("t", new Ap(new Var("t"), new Fn("t", new Var("t")))),
    new Fn("x", new Var("x"))
  )
  const value = exp.evaluate(env)

  console.dir(value, { depth: null })
}
