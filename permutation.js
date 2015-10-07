"use strict";
 

exports.permuteString = function (str) {   
    return permuteString(str);
}

exports.permuteArray = function (sourceArray) {
    
    if (sourceArray == null || typeof sourceArray === 'undefined' || !Array.isArray(sourceArray)) {
        throw new Error('Expect array parameter');
    }
    
    var completeName = '';
    var results = []
    for (var n = 0; n < sourceArray.length; n++) {
        
        if (sourceArray[n] == null || typeof sourceArray[0] === 'undefined' || typeof sourceArray[0] !== 'string') {
            throw new Error('Expect string as array elements');
        }
        
        var r = permuteString(sourceArray[n]);
        for (var i = 0; i < r.length; i++) {
            results.push(r[i]);
        }
    }
    return results;
}


function permuteString(str) {
    if (str == null || typeof str === 'undefined' || typeof str !== 'string') {
        throw new Error('Expect string parameter');
    }
    
    str = str.replace(/\s{2,}/g, ' ').trim();
    
    if (!str || str.length <= 0)
        return [];
    
    var words = str.split(' ');
    var result = permuteWordsArray(words);
    
    if (words.length > 3) {
        for (var i = 2; i <= words.length - 1; i++) {
            result.push(str.replace(' ' + words[i], ''));
        }
    }
    return result
}

function permuteWordsArray (words) {

    var result = [];
    
    if (words.length == 1) {
        result.push(words[0]);
        return result;
    }
    
    for (var curPos = 0; curPos < words.length - 1; curPos++) {
        
        var aux = curPos + 1;
        
        while (aux <= words.length - 1) {
            
            var aux2 = aux;
            var lastNames = '';
            while (aux2 <= words.length - 1) {
                if ((words.length - 1) != aux) {
                    lastNames += words[aux2] + ' ';
                }
                aux2 = aux2 + 1;
            }
            if (lastNames)
                result.push(words[curPos] + ' ' + lastNames.trim());
            
            result.push(words[curPos] + ' ' + words[aux]);
            
            aux = aux + 1;
        }
    }
    return result;
}