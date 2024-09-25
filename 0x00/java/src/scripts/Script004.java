package scripts;

/*
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 x 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * * Checked answer: 906609 ✅
 */
public class Script004 {
  public static void main(String[] args) {
    getResult(2);
    getResult(3);
  }

  private static void getResult(int digits) {
    int largest = 0, n1 = 0, n2 = 0, min = 0, max = 0;
    if (digits == 2) {
      min = 10;
      max = 99;
    }
    if (digits == 3) {
      min = 100;
      max = 999;
    }
    for (int i = max; i >= min; i--) {
      for (int j = max; j >= min; j--) {
        int product = i * j;
        int reversed = getReversed(product);
        if (reversed == product && reversed > largest) {
          n1 = i;
          n2 = j;
          largest = product;
        }
      }
    }
    System.out.println(n1 + " x " + n2 + " = " + largest);
  }

  private static int getReversed(int num) {
    int reversed = 0;
    while (num != 0) {
      int digit = num % 10;
      reversed = reversed * 10 + digit;
      num /= 10;
    }
    return reversed;
  }
}
