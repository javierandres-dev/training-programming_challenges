package scripts;

/*
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 * a^2 + b^2 = c^2.
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 * 🔜 soon
 */
public class Script009 {
  public static void main(String[] args) {
    final int x = 1000;

    boolean search = true;
    int a = 1, b = 2, c = 3;
    while (search) {
      if ((a + b + c) > x) {
        System.out.println("break");
        break;
      }

      if ((a + b + c) == x) {
        System.out.println("search");
        System.out.println("a:" + a);
        System.out.println("b:" + b);
        System.out.println("c:" + c);
        final int aa = (int) Math.pow(a, 2);
        final int bb = (int) Math.pow(b, 2);
        final int cc = (int) Math.pow(c, 2);
        System.out.println("----");
        System.out.println("a²:" + aa);
        System.out.println("b²:" + bb);
        System.out.println("c²:" + cc);
        search = false;
      }

      a++;
      b++;
      c++;
    }
  }
}
