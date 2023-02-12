const mathOperations = require('./src/calculator');

describe("Calculator Tests", () => {
    test("Addition of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.add(1, 2)

        // expectation
        expect(result).toBe(3);
    });

    test("Subtraction of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.subtract(10, 2)

        // expectation
        expect(result).toBe(8);
    });

    test("Multiplication of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.multiply(2, 8)

        // expectation
        expect(result).toBe(16);
    });

    test("Division of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.divide(24, 8)

        // expectation
        expect(result).toBe(3);
    });
})