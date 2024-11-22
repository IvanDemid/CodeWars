var CaesarCipher = function (shift) {
    this.shift = shift;

    this.encode = function (str) {
        return str
            .toUpperCase()
            .split('')
            .map((char) => {
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(
                        ((char.charCodeAt(0) - 65 + this.shift) % 26) + 65
                    );
                }
                return char;
            })
            .join('');
    };

    this.decode = function (str) {
        return str
            .toUpperCase()
            .split('')
            .map((char) => {
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(
                        ((char.charCodeAt(0) - 65 - this.shift + 26) % 26) + 65
                    );
                }
                return char;
            })
            .join('');
    };
};
