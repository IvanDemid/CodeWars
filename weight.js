function orderWeight(strng) {
    const sumDigits = (num) => num.split('').reduce((sum, digit) => sum + Number(digit), 0);

    return strng
        .trim()
        .split(/\s+/)
        .sort((a, b) => {
            const weightA = sumDigits(a);
            const weightB = sumDigits(b);
            if (weightA === weightB) {
                return a.localeCompare(b);
            }
            return weightA - weightB;
        })
        .join(' ');
}