export abstract class Value {
  abstract apply(arg: Value): Value
}
