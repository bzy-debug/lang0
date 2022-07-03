import { Env } from "./env"

export abstract class Exp {
  // TODO
  // abstract evaluate(env: Env): Value
}

export abstract class Value {
  // TODO
}

export class Var extends Exp {
  constructor(public name: string) {
    super()
  }
}

export class Ap extends Exp {
  constructor(public target: Exp, arg: Exp) {
    super()
  }
}

export class Fn extends Exp {
  constructor(public name: string, public ret: Exp) {
    super()
  }
}
