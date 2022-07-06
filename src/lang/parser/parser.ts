import { Parser as SexpParser } from "@cicada-lang/sexp/lib/parser"
import { match, matchList, matchSymbol } from "@cicada-lang/sexp/lib/match"
import { v, cons } from "@cicada-lang/sexp/lib/pattern-exp"
import { Sexp } from "@cicada-lang/sexp/lib/sexp"
import * as Exps from "../exps"
import { Exp } from "../exp"

export class Parser extends SexpParser {
  constructor() {
    super({
      quotes: [],
      parentheses: [{ start: "(", end: ")" }],
      comments: [";"],
    })
  }

  parseExp(text: string): Exp {
    const sexp = this.parseSexp(text)
    return matchExp(sexp)
  }
}

export function matchExp(sexp: Sexp): Exp {
  return match<Exp>(sexp, [
    [
      ["lambda", [v("name")], v("exp")],
      ({ name, exp }) => new Exps.Fn(matchSymbol(name), matchExp(exp)),
    ],

    // NOTE The keywords must be matched before `ap` and `var`.

    [
      [v("target"), v("arg")],
      ({ target, arg }) => new Exps.Ap(matchExp(target), matchExp(arg)),
    ],

    [v("name"), ({ name }) => new Exps.Var(matchSymbol(name))],
  ])
}

// [
//   ["lambda", v("names"), v("exp")],
//   ({ names, exp }) => {
//     let fn = matchExp(exp)
//     for (const name of [...matchList(names, matchSymbol)].reverse()) {
//       fn = new Exps.Fn(name, fn)
//     }

//     return fn
//   },
// ],

// [
//   cons(v("target"), v("args")),
//   ({ target, args }) => {
//     let result = matchExp(target)
//     for (const arg of matchList(args, matchExp)) {
//       result = new Exps.Ap(result, arg)
//     }

//     return result
//   },
// ],
