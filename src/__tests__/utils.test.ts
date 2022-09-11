import { getSumTotal } from "../utils/table"

const dummyData = {
  Sam: 143805,
  George: 126066,
  Matt: 121139,
  Jennifer: 148592,
  Ann: 128080,
}

describe("get some total", () => {
  it("should show correct sum value", () => {
    expect(getSumTotal(dummyData)).toBe(667682)
  })
})
