const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const searchTen = '10';
    const replaceWithTen = '.';
    const searchEleven = '11';
    const replaceWithEleven = '-'; 
    let arr = expr.match(/.{1,10}/g);
    arr.forEach(function(arg, i){
        if(arg !== '**********'){
            arr[i] = String(parseInt(arr[i], 10));
            arr[i] = arr[i].split(searchTen).join(replaceWithTen);
            arr[i] = arr[i].split(searchEleven).join(replaceWithEleven);
            arr[i] = MORSE_TABLE[`${arr[i]}`];
        }
        else{
            arr[i] = ' ';
        }
    }
    )
    return arr.join('');
}

module.exports = {
    decode
}