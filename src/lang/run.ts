import { Env } from "./env"
import { Parser } from "./parser"

const parser = new Parser()

export function run(code: string): void {
  let env = new Env()

  const stmts = parser.parseStmts(code)
  for (const stmt of stmts) {
    env = stmt.execute(env)
  }
}
