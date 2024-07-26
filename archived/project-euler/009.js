/*
 * A Pythagorean triplet is a set of three natural numbers, a < b < c,
 * for which, a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */
let flag = true, a, b, c = 3, product = 0;
while(flag) {
  for (b = 2; b < c; b++) {
    for (a = 1; a < b; a++) {
      if (((a*a) + (b*b)) === (c*c) && (a + b + c === 1000)) {
        console.log(a * b * c);
        flag = false;
      }
    }
  }
  c++;
}
