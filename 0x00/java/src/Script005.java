/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1
 * to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible (divisible with
 * no remainder) by all of the numbers from 1 to 20?
 * * Checked answer: 232792560 ✅
 */
public class Script005 {
  public static void main(String[] args) {
    getResult(10);
    getResult(20);
  }

  private static void getResult(int limitNumber) {
    boolean found = false;
    int smallestNumber = 1;
    while (!found) {
      int j = 0;
      for (int i = 1; i <= limitNumber; i++)
        if (smallestNumber % i == 0)
          j++;
      if (j == limitNumber)
        found = true;
      else
        smallestNumber++;
    }
    System.out.println(smallestNumber);
  }
}
