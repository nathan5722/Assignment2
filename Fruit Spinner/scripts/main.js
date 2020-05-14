const _0x5e41 = [
    'floor',
    '<img\x20src=',
    'spinc',
    'images/grapes.png',
    'addEventListener',
    'images/bar.png',
    'images/banana.png',
    'images/melon.png',
    'spina',
    '+10',
    'disabled',
    'images/apple.png',
    'winnings',
    'innerHTML',
    'collect',
    'spinb',
    'innerText',
    'click',
    'try\x20again',
    'spin',
    'images/orange.png',
    'credit',
    'getElementById',
    'winnings\x20have\x20been\x20collected',
    'images/cherries.png',
    '1\x20credit\x20required',
    'collect\x20winnings',
    'images/lemon.png',
    'random'
];
(function (_0x4a3ac2, _0x5e41bc) {
    const _0x5f0b9f = function (_0x125682) {
        while (--_0x125682) {
            _0x4a3ac2['push'](_0x4a3ac2['shift']());
        }
    };
    _0x5f0b9f(++_0x5e41bc);
}(_0x5e41, 0x19c));
const _0x5f0b = function (_0x4a3ac2, _0x5e41bc) {
    _0x4a3ac2 = _0x4a3ac2 - 0x0;
    let _0x5f0b9f = _0x5e41[_0x4a3ac2];
    return _0x5f0b9f;
};
const creditBox = document[_0x5f0b('0x10')]('totalCredits');
const winningsBox = document[_0x5f0b('0x10')](_0x5f0b('0x6'));
const spina = document[_0x5f0b('0x10')](_0x5f0b('0x2'));
const spinb = document[_0x5f0b('0x10')](_0x5f0b('0x9'));
const spinc = document[_0x5f0b('0x10')](_0x5f0b('0x19'));
const txtMessage = document[_0x5f0b('0x10')]('txtMessage');
const spin = document[_0x5f0b('0x10')](_0x5f0b('0xd'));
const credit = document[_0x5f0b('0x10')](_0x5f0b('0xf'));
const collect = document[_0x5f0b('0x10')](_0x5f0b('0x8'));
let apple = _0x5f0b('0x5');
let banana = _0x5f0b('0x0');
let bar = _0x5f0b('0x1c');
let cherries = _0x5f0b('0x12');
let grapes = _0x5f0b('0x1a');
let lemon = _0x5f0b('0x15');
let melon = _0x5f0b('0x1');
let orange = _0x5f0b('0xe');
credit[_0x5f0b('0x1b')](_0x5f0b('0xb'), addCredit);
spin['addEventListener'](_0x5f0b('0xb'), spinSpin);
collect[_0x5f0b('0x1b')](_0x5f0b('0xb'), collectWinnings);
let images = [
    apple,
    banana,
    bar,
    cherries,
    grapes,
    lemon,
    melon,
    orange
];
let randoma = Math[_0x5f0b('0x17')](Math[_0x5f0b('0x16')]() * 0x8);
let randomb = Math[_0x5f0b('0x17')](Math[_0x5f0b('0x16')]() * 0x8);
let randomc = Math[_0x5f0b('0x17')](Math[_0x5f0b('0x16')]() * 0x8);
spina[_0x5f0b('0x7')] = _0x5f0b('0x18') + images[randoma] + '>';
spinb[_0x5f0b('0x7')] = _0x5f0b('0x18') + images[randomb] + '>';
spinc[_0x5f0b('0x7')] = _0x5f0b('0x18') + images[randomc] + '>';
window['onload'] = function () {
    document[_0x5f0b('0x10')](_0x5f0b('0xd'))[_0x5f0b('0x4')] = !![];
    document[_0x5f0b('0x10')]('collect')[_0x5f0b('0x4')] = !![];
};
function addCredit() {
    creditBox[_0x5f0b('0xa')] -= -0x1;
    txtMessage[_0x5f0b('0xa')] = '+1';
    document[_0x5f0b('0x10')](_0x5f0b('0xd'))[_0x5f0b('0x4')] = ![];
    document[_0x5f0b('0x10')]('collect')[_0x5f0b('0x4')] = ![];

}
function spinSpin() {
    if (creditBox[_0x5f0b('0xa')] < 0x1) {
        txtMessage[_0x5f0b('0xa')] = _0x5f0b('0x13');
    } else {
        creditBox[_0x5f0b('0xa')] -= 0x1;
        let _0x31bf01 = Math[_0x5f0b('0x17')](Math[_0x5f0b('0x16')]() * 0x8);
        let _0x347ca6 = Math[_0x5f0b('0x17')](Math[_0x5f0b('0x16')]() * 0x8);
        let _0x339bd0 = Math[_0x5f0b('0x17')](Math[_0x5f0b('0x16')]() * 0x8);
        spina[_0x5f0b('0x7')] = _0x5f0b('0x18') + images[_0x31bf01] + '>';
        spinb[_0x5f0b('0x7')] = _0x5f0b('0x18') + images[_0x347ca6] + '>';
        spinc[_0x5f0b('0x7')] = _0x5f0b('0x18') + images[_0x339bd0] + '>';
        txtMessage[_0x5f0b('0xa')] = _0x5f0b('0xc');
        if (_0x347ca6 == _0x339bd0) {
            txtMessage[_0x5f0b('0xa')] = '+5';
            winningsBox[_0x5f0b('0xa')] -= -0x5;
        } else if (_0x31bf01 == _0x347ca6 == _0x339bd0) {
            txtMessage['innerText'] = _0x5f0b('0x3');
            winningsBox[_0x5f0b('0xa')] -= -0xa;
        }
    }
}
function collectWinnings() {
    txtMessage[_0x5f0b('0xa')] = _0x5f0b('0x14');
    if (winningsBox[_0x5f0b('0xa')] < 0x1) {
        txtMessage[_0x5f0b('0xa')] = 'spin\x20to\x20earn\x20winnings!';
    } else {
        winningsBox[_0x5f0b('0xa')] = 0x0;
        txtMessage[_0x5f0b('0xa')] = _0x5f0b('0x11');
    }
}