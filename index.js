const reverseNumber = (num) => {
    let number = num.toString().split('').reverse().join('')
    console.log(number)
}
reverseNumber(32243)



const isPalindrome = (str) => {
    let word = str.toLowerCase().split('').reverse().join('')

    if (word == str.toLowerCase()) {
        console.log('Is palindrome')
    } else console.log('Not a Palindrome')
}
isPalindrome('Madam')



const allCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let m = i + 1; m < str.length + 1; m++) {
            combinations.push(str.slice(i, m));
        }
    }
    console.log(combinations)
}
allCombinations('dog')



const alphabeticalOrder = (str) => {
    console.log(str.split('').sort().join(''))
}
alphabeticalOrder('webmaster')



const capitilzeSent = (str) => {
    let words = str.split(' ')
    for (i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    console.log(words.join(' '))
}

capitilzeSent('the quick brown fox')



const findLongestWord = (str) => {
    let words = str.split(' ')
    let longestWord = ''
    for (let word of words) {
        if (word.length > longestWord.length) longestWord = word
    }
    console.log(longestWord)
}

findLongestWord('Web Development Tutorial')



const countVowels = (str) => {
    let words = str.split('')
    let count = 0
    for (i = 0; i < words.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
            || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            count = count + 1
        }
    }
    console.log(count)
}

countVowels('The quick brown fox')



const isPrime = (num) => {
    if (num < 2)
        return `${num} is not a prime number`

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}

console.log(isPrime(19))



const detectType = (value) => {

    let types = [Function, RegExp, Number, String, Boolean, Object], x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }

    return typeof value;
}

console.log(detectType(12));
console.log(detectType(''));
console.log(detectType(false));
console.log(detectType());



const matrix = (n) => {

    let i;
    let j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {

                console.log(' 1 ');
            }

            else {
                console.log(' 0 ');
            }
        }
        console.log('----------');
    }
}
matrix(4);



const Second_Greatest_Lowest = (arr) => {
    arr.sort(function (x, y) {
        return x - y;
    });
    let a = [arr[0]];
    let result = [];

    for (var j = 1; j < arr.length; j++) {
        if (arr[j - 1] !== arr[j]) {
            a.push(arr[j]);
        }
    }
    result.push(a[1], a[a.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));



const isPerfect = (number) => {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
isPerfect(28);



const factors = (n) => {
    let factors = [], i;
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            factors.push(i);
            if (n / i !== i)
                factors.push(n / i);
        }

    factors.sort(function (x, y) {
        return x - y;
    });
    return factors;
}
console.log(factors(15));




function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));



const exponent = (b, n) => {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = b * ans;
    }
    return ans;
}
console.log(exponent(2, 3));













function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];

        }
    }
    return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));


function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));




function array_binarySearch(narray, delement) {
    var mposition = Math.floor(narray.length / 2);

    if (narray[mposition] === delement) {
        return mposition;
    }
    else if (narray.length === 1) {
        return null;
    }
    else if (narray[mposition] < delement) {
        var arr = narray.slice(mposition + 1);
        var res = array_binarySearch(arr, delement);
        if (res === null) {
            return null;
        }
        else {
            return mposition + 1 + res;
        }
    }
    else {
        var arr1 = narray.slice(0, mposition);
        return array_binarySearch(arr1, delement);
    }
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 6));






function BiggerElements(val) {
    return function (evalue, index, array) {
        return (evalue >= val);
    };
}
var result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));
console.log(result);



function makeid(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < l; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log(makeid(8));



function subset(arra, arra_size) {
    var result_set = [],
        result;


    for (var x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        i = arra.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
            }
        } while (i--);

        if (result.length >= arra_size) {
            result_set.push(result);
        }
    }

    return result_set;
}

console.log(subset([1, 2, 3], 2));



function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));



function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    return result;
}
console.log(find_FirstNotRepeatedChar('abacddbec'));



function bubble_Sort(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));






function Longest_Country_Name(country_name) {
    return country_name.reduce(function (lname, country) {
        return lname.length > country.length ? lname : country;
    },
        "");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));






function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) {
            str += curr_char;
            hash[chars[i]] = { index: i };
        }
        else {
            if (longest_string.length <= str.length) {
                longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = { index: j };
            }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com"));

console.log(longest_substring_without_repeating_characters("example.com"));




function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longest_palindrome(str1) {

    var max_length = 0,
        maxp = '';

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));






function addStudent(id, refreshCallback) {
    refreshCallback();
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);




function myName() {
    console.log(arguments.callee.name);
}
myName();




















