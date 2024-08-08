/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 * - Checked answer:
 */
public class Script003 {
  public static void main(String[] args) {
    long largestPrimeFactor = getLargestPrimeFactor(600851475143l);
    System.out.println(largestPrimeFactor);
  }

  private static long getLargestPrimeFactor(long num) {
    long largestPrimeFactor = 0;
    long i = 2;
    while (i < num) {
      if (isPrime(i))
        if (num % i == 0)
          largestPrimeFactor = i;
      i++;
    }
    return largestPrimeFactor;
  }

  private static boolean isPrime(long num) {
    long i = 2;
    while (i < num) {
      if (num % i == 0)
        return false;
      i++;
    }
    return true;
  }
}
