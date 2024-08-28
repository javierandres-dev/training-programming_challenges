/*
 * Recorrer un array de forma recursiva.
 */
package Challenges;

public class Script002 {
  public static void main(String[] args) {
    int[] arr = { 30, 50, 10, 90, 40, 70, 20, 80, 60 };
    run(arr, 0);
    System.out.println("Total de elementos: " + arr.length);
  }

  private static void run(int[] arr, int i) {
    if (i + 1 == arr.length)
      System.out.println("Posición: " + i + ", Elemento: " + arr[i]);
    else {
      System.out.println("Posición: " + i + ", Elemento: " + arr[i]);
      run(arr, i + 1);
    }
  }
}
