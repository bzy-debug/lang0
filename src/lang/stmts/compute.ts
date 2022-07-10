import { Env } from "../env"
import { Exp } from "../exp"
import { Stmt } from "../stmt"

export class Compute extends Stmt {
  constructor(public exp: Exp) {
    super()
  }

  execute(env: Env): Env {
    const value = this.exp.evaluate(env)
    console.log(value.format())
    return env
  }
}
