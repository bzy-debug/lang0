import { Env } from "../env"
import { Exp } from "../exp"
import { Value } from "../value"

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
