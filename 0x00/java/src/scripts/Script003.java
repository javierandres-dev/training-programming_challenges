package scripts;

/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 * ✅ Checked answer: 6857
 */
public class Script003 {
  public static void main(String[] args) {
    long number = 600851475143l;
    long largestPrimeFactor = 0;
    long smallestPrimeNumber = 2;
    long result = number;
    while (largestPrimeFactor == 0) {
      boolean isDivisible = result % smallestPrimeNumber == 0;
      if (isDivisible) {
        result = result / smallestPrimeNumber;
        if (result == 1)
          largestPrimeFactor = smallestPrimeNumber;
      } else
        smallestPrimeNumber = getSmallestPrimeNumber(smallestPrimeNumber, number);
    }
    System.out.println("largestPrimeFactor: " + largestPrimeFactor);
  }

  private static long getSmallestPrimeNumber(long from, long to) {
    from++;
    for (long num = from; num < to; num++) {
      boolean isPrime = true;
      for (long n = 2; n < num; n++)
        if (num % n == 0)
          isPrime = false;
      if (isPrime)
        return num;
    }
    return 2;
  }
}
