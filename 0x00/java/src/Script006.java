/*
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385.
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025.
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 - 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 * * Checked answer: 25164150 ✅
 */
public class Script006 {
  public static void main(String[] args) {
    final int sumSquares = getSumSquares(100);
    final int squareSum = getSquareSum(100);
    System.out.println(squareSum + " - " + sumSquares + " = " + (squareSum - sumSquares));
  }

  private static int getSumSquares(int number) {
    int sum = 0;
    for (int i = 1; i <= number; i++)
      sum += Math.pow(i, 2);
    return sum;
  }

  private static int getSquareSum(int number) {
    int sum = 0;
    for (int i = 1; i <= number; i++)
      sum += i;
    sum = (int) Math.pow(sum, 2);
    return sum;
  }
}
