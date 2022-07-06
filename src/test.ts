import { Env, Value, Var, Fn, Ap } from "./index"

{
  // ((lambda (t) (lambda (f) t)) (lambda (x) x))
  // =>
  // (lambda (f) (lambda (x) x))

  const env = new Env()
  const exp = new Var("x")
  // console.log(exp.evaluate(env), value === exp.evaluate(env))
}

// ((lambda (t) (lambda (t) t)) (lambda (x) x))
// =>
// (lambda (t) t)

// ((lambda (t) (t (lambda (t) t))) (lambda (x) x))
// =>
// ((lambda (x) x) (lambda (t) t))
// =>
// (lambda (t) t)
