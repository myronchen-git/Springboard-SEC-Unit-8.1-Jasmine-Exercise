describe("calculateMonthlyPayment", () => {
  it("should calculate the monthly rate correctly", () => {
    expect(
      calculateMonthlyPayment({ amount: 100, years: 1, rate: 0.1 })
    ).toEqual("8.79");

    expect(
      calculateMonthlyPayment({ amount: 45000, years: 12, rate: 0.09 })
    ).toEqual("512.11");

    expect(
      calculateMonthlyPayment({ amount: 0, years: 1, rate: 0.1 })
    ).toEqual("0.00");

    expect(
      calculateMonthlyPayment({ amount: 900, years: 2, rate: 0.15 })
    ).toEqual("43.64");

    expect(
      calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0.1 })
    ).toEqual("1321.51");
  });

  it("should return a result with 2 decimal places", () => {
    expect(
      calculateMonthlyPayment({ amount: 100, years: 1, rate: 0.1 })
    ).toEqual("8.79");
  });

  it("should return a String", () => {
    expect(
      calculateMonthlyPayment({ amount: 100, years: 1, rate: 0.1 })
    ).toBeInstanceOf(String);
  });
});
