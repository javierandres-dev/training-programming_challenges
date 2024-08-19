/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9.  The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * * Checked answer: 233168
 */
public class Script001 {
  public static void main(String[] args) {
    final int sum = getSum(1000);
    System.out.println("sum: " + sum);
  }

  private static int getSum(int num) {
    int sum = 0;
    for (int i = 1; i < num; i++)
      if (i % 3 == 0 || i % 5 == 0)
        sum += i;
    return sum;
  }
}
