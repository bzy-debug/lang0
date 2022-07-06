import { Env } from "../env"
import { Exp } from "../exp"
import { Value } from "../value"

export class FnValue extends Value {
  constructor(public name: string, public body: Exp, public env: Env) {
    super()
  }

  apply(arg: Value): Value {
    return this.body.evaluate(this.env.extend(this.name, arg))
  }
}
