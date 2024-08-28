/*
 * Factorial de un número de forma recursiva.
 */

package Challenges;

import java.util.Scanner;

public class Script001 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Ingrese un número entero: ");
    final int number = sc.nextInt();
    sc.close();
    final int result = getFactorial(number);
    System.out.println("El factorial de " + number + " es: " + result);
  }

  private static int getFactorial(int n) {
    int factorial = 0;
    if (n == 1)
      return 1;
    else
      factorial = n * getFactorial(n - 1);
    return factorial;
  }
}
