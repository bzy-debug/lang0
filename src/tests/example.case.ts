import { TestCase } from "@xieyuheng/test-case"

export default class extends TestCase {
  async "Example test."() {
    this.assertEquals(1 + 1, 2)
    this.assertNotEquals(1 + 1, 3)
  }
}
