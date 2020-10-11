const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const keys = {
        '10': '.',
        '11': '-',
    };

    let res = [];

    for (let i = 0; i < expr.length; i += 10) {
        let item = expr.slice(i, i + 10);

        if (item.startsWith('*')) {
            item = ' ';
        } else {
            item = item.match(/.{1,2}/g).reduce((acc, char) => {
                if (char !== '00') {
                    acc.push(keys[char]);
                }
                return acc;
            }, []);
            item = item.join('');
        }
        res.push(item);
    }

    res = res.map((code) => {
        return code == ' ' ? ' ' : MORSE_TABLE[code];
    });

    return res.join('');
}

module.exports = {
    decode
}