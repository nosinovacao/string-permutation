declare module "permutation" {

    /**
    * Permutes words present on a string
    *
    * @param str string to be permuted
    * @return {Array<string>} Array that contains permuted names
    */
    function permuteString(str: string): Array<string>;

    /**
    * Permutes words present on an Array
    *
    * @param sourceArray Array containing names to be permuted
    * @return {Array<string>} Array that contains results of permuted names
    */
    function permuteArray(sourceArray: Array<string>): Array<string>;
}