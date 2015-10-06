"use strict";
 

exports.permuteString = function (str) {
    
    str = str.replace(/\s{2,}/g, ' ').trim();
    
    if (!str || str.length <= 0)
        return;

    var words = completeName.split(' ');
    var result = permuteWordsArray(words);

    if (words.length > 3) {
        for (var i = 2; i <= words.length - 1; i++) {
            result.push(str.replace(' ' + words[i], ''));
        }
    }
    return result
}

exports.permuteArray = function (sourceArray) {
    
    var completeName = '';
    for (var n = 0; n < sourceArray.length; n++) {
        completeName += sourceArray[n] + ' ';
    }
    completeName = completeName.replace(/\s{2,}/g, ' ').trim();
    
    var words = completeName.split(' ');
    var result = permuteWordsArray(words)

    if (words.length > 3) {
        for (var i = 2; i <= words.length - 1; i++) {
            result.push(completeName.replace(' ' + words[i], ''));
        }
    }
    return result
}


function permuteWordsArray (words) {

    var result = [];
    
    if (words.length == 1) {
        result.push(completeName);
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