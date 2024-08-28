/*
 * Sumar los números números naturales hasta N (se lo damos nosotros) de forma
 * recursiva.
 */
package Challenges;

import java.util.Scanner;

public class Script000 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Ingrese un número entero: ");
    final int number = sc.nextInt();
    sc.close();
    final int result = getSum(number);
    System.out.println("La suma de los números naturales hasta " + number + " es: " + result);
  }

  private static int getSum(int n) {
    int sum = 0;
    if (n == 1)
      return 1;
    else
      sum = n + getSum(n - 1);
    return sum;
  }
}
