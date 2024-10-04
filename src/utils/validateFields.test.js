import { hasValidInputLength } from "./validateFields";

describe('hasValidInputLength', () => {
    const tests = [
        { fieldValues: ["John", "Doe"], output: true },
        { fieldValues: ["thisisatest@runningatest.com"], output: true },
        { fieldValues: ["S", "T"], output: true },
        { fieldValues: ["", ""], output: false },
    ]
    it.each(tests)('should return $output with $fieldValues as input to hasValidInputLength', ({fieldValues, output}) => {
        expect(hasValidInputLength(fieldValues)).toBe(output);
    })
})