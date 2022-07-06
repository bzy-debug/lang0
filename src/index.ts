class Env {
  constructor(public values: Map<string, Value> = new Map()) {}

  extend(name: string, value: Value): Env {
    const values: Map<string, Value> = new Map()
    for (const [k, v] of this.values) {
      values.set(k, v)
    }

    values.set(name, value)
    return new Env(values)
  }

  findValue(name: string): Value | undefined {
    return this.values.get(name)
  }
}

// <exp> := <var>        // Var
//       | (<exp> <exp>) // Ap
//       | (lambda (<var>) <exp>) // Fn

abstract class Value {
  // TODO
  // apply(arg: Value): Value
}

abstract class Exp {
  abstract evaluate(env: Env): Value
}

class Var extends Exp {
  constructor(public name: string) {
    super()
  }

  evaluate(env: Env): Value {
    const value = env.findValue(this.name)
    if (value === undefined) {
      throw new Error(`Unknown variable: ${this.name}`)
    }

    return value
  }
}

class Ap extends Exp {
  constructor(public target: Exp, public arg: Exp) {
    super()
  }

  evaluate(env: Env): Value {
    const target = this.target.evaluate(env)
    const arg = this.arg.evaluate(env)

    // target.apply(arg)
    // TODO

    throw new Error("TODO")
  }
}

class Fn extends Exp {
  constructor(public name: string, public body: Exp) {
    super()
  }

  evaluate(env: Env): Value {
    throw new Error("TODO")
  }
}
