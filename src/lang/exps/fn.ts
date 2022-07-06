import { Env } from "../env"
import { Exp } from "../exp"
import { Value } from "../value"
import * as Exps from "../exps"

export class Fn extends Exp {
  constructor(public name: string, public body: Exp) {
    super()
  }

  evaluate(env: Env): Value {
    return new Exps.FnValue(this.name, this.body, env)
  }
}
