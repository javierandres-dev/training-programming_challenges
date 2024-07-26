import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class P011 {
  public static void main(String[] args) {
    try {
      File txt = new File("011.txt");
      Scanner sc = new Scanner(txt);
      while (sc.hasNextLine()) {
        String line = sc.nextLine();
        System.out.println(line);
      }
      sc.close();
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}
