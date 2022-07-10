import { Env } from "./env"

export abstract class Stmt {
  abstract execute(env: Env): Env
}
