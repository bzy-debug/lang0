export class Env {
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

export abstract class Value {
  abstract apply(arg: Value): Value
}

export abstract class Exp {
  abstract evaluate(env: Env): Value
}

export class Var extends Exp {
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

export class Ap extends Exp {
  constructor(public target: Exp, public arg: Exp) {
    super()
  }

  evaluate(env: Env): Value {
    const target = this.target.evaluate(env)
    const arg = this.arg.evaluate(env)
    return target.apply(arg)
  }
}

export class Fn extends Exp {
  constructor(public name: string, public body: Exp) {
    super()
  }

  evaluate(env: Env): Value {
    return new FnValue(this.name, this.body, env)
  }
}

export class FnValue extends Value {
  constructor(public name: string, public body: Exp, public env: Env) {
    super()
  }

  apply(arg: Value): Value {
    const newEnv = this.env.extend(this.name, arg)
    return this.body.evaluate(newEnv)
  }
}
