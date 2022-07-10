export abstract class Value {
  abstract apply(arg: Value): Value
  abstract format(): string
  abstract formatWithoutEnv(): string
}
