module.exports = function reverse(n) {
    const reversed = n.toString().split('').reverse().join('');
    let s = parseInt(reversed);
    return Math.abs(s);
}