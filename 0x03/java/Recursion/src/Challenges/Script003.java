/*
 * Buscar un elemento de un array de forma recursiva.
 */
package Challenges;

public class Script003 {
  public static void main(String[] args) {
    int[] arr = { 30, 50, 10, 90, 40, 70, 20, 80, 60 };
    int idx = search(arr, 0, 80);
    if (idx < 0)
      System.out.println("El elemento no se encuentró");
    else
      System.out.println("El elemento se encuentra en la posición: " + idx);
  }

  private static int search(int[] arr, int i, int el) {
    if (i == arr.length)
      return -1;
    else if (arr[i] == el)
      return i;
    else
      return search(arr, i + 1, el);
  }
}
