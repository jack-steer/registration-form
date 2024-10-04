
/*
* Given an array containing values from input fields of any length
* determine that each field has a value
*/
export const hasValidInputLength = (fields) => {
    for (let field of fields) {
        if (field.length < 1) {
            return false
        }
    }
    return true
}