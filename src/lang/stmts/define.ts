import { Env } from "../env"
import { Exp } from "../exp"
import { Stmt } from "../stmt"

export class Define extends Stmt {
  constructor(public name: string, public exp: Exp) {
    super()
  }

  execute(env: Env): Env {
    const value = this.exp.evaluate(env)
    return env.extend(this.name, value)
  }
}
