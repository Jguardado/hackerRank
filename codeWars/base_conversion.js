const Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

/*
  In this kata you have to implement a base converter, which converts between arbitrary bases / alphabets.

  The function convert() should take an input (string), the source alphabet (string) and the
  target alphabet (string). You can assume that the input value always consists of characters
  from the source alphabet. You don't need to validate it.

  - The maximum input value can always be encoded in a number without loss of precision in
    JavaScript.In Haskell, intermediate results will probably be to large for Int.
  - The function must work for any arbitrary alphabets, not only the pre-defined ones
  - You don't have to consider negative numbers
*/

function convert(input, source, target) {
  // TODO
}

// const bin = Alphabet.BINARY;
// const oct = Alphabet.OCTAL;
const dec = Alphabet.DECIMAL;
// const hex = Alphabet.HEXA_DECIMAL;
// const allow = Alphabet.ALPHA_LOWER;
// const alup = Alphabet.ALPHA_UPPER;
const alpha = Alphabet.ALPHA;
// const alnum = Alphabet.ALPHA_NUMERIC;


convert('0', dec, alpha);
// 'a', '"0" dec -> alpha');
// convert('27', dec, allow);
// 'bb', '"27" dec -> alpha_lower');
// convert('hello', allow, hex);
// '320048', '"hello" alpha_lower -> hex')
// convert('SAME', alup, alup);
// 'SAME', '"SAME" alpha_upper -> alpha_upper');

// describe('example tests', () => {
//   let bin = Alphabet.BINARY,
//     oct = Alphabet.OCTAL,
//     dec = Alphabet.DECIMAL,
//     hex = Alphabet.HEXA_DECIMAL,
//     allow = Alphabet.ALPHA_LOWER,
//     alup = Alphabet.ALPHA_UPPER,
//     alpha = Alphabet.ALPHA,
//     alnum = Alphabet.ALPHA_NUMERIC;
//
//   it('should convert between numeral systems', () => {
//     Test.assertEquals(convert('15', dec, bin), '1111', '"15" dec -> bin');
//     Test.assertEquals(convert('15', dec, oct), '17', '"15" dec -> oct');
//     Test.assertEquals(convert('1010', bin, dec), '10', '"1010" bin -> dec');
//     Test.assertEquals(convert('1010', bin, hex), 'a', '"1010" bin -> hex');
//   });
//
//   it('should convert between other bases', () => {
//     Test.assertEquals(convert('0', dec, alpha), 'a', '"0" dec -> alpha');
//     Test.assertEquals(convert('27', dec, allow), 'bb', '"27" dec -> alpha_lower');
//     Test.assertEquals(convert('hello', allow, hex), '320048', '"hello" alpha_lower -> hex');
//     Test.assertEquals(convert('SAME', alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
//   });
// });
