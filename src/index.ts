class Env {
  // TODO
}

// <exp> := <var>        // Var
//       | (<exp> <exp>) // Ap
//       | (lambda (<var>) <exp>) // Fn

abstract class Value {}

abstract class Exp {
  abstract evaluate(env: Env): Value
}

class Var extends Exp {
  constructor(public name: string) {
    super()
  }

  evaluate(env: Env): Value {
    throw new Error("TODO")
  }
}

class Ap extends Exp {
  constructor(public target: Exp, public arg: Exp) {
    super()
  }

  evaluate(env: Env): Value {
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
