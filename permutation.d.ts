declare module "permutation" {

    /**
    * Permutes words present on a string
    *
    * @param completeName string containing name to be permuted
    * @return {Array<string>} Array that contains permuted names
    */
    function permuteName(completeName: string): Array<string>;

    /**
    * Permutes words present on an Array
    *
    * @param sourceArray Array containing names to be permuted
    * @return {Array<string>} Array that contains permuted names
    */
    function permuteArray(sourceArray: Array<string>): Array<string>;
}