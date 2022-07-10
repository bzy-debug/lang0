import { Env } from "../env"
import { Exp } from "../exp"
import * as Exps from "../exps"
import { Value } from "../value"

export class Fn extends Exp {
  constructor(public name: string, public body: Exp) {
    super()
  }

  evaluate(env: Env): Value {
    return new Exps.FnValue(this.name, this.body, env)
  }

  format(): string {
    return `(lambda (${this.name}) ${this.body.format()})`
  }
}
