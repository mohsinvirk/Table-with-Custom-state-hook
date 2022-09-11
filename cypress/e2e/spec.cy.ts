describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("should contain link", () => {
    cy.get("a").contains("Sum of Data")
  })

  it("Sum Page have go back link", () => {
    cy.get("a").click().get("a").contains("Go Back")
  })
})
