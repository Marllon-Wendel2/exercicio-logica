package atividades.src;

import java.util.Scanner;

public class AtividadeHackRank1 {
    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

        int s = scanner.nextInt();
        int t = scanner.nextInt();

        int a = scanner.nextInt();
        int b = scanner.nextInt();

        int m = scanner.nextInt();
        int n = scanner.nextInt();

        int[] apples = new int[m];
        for (int i = 0; i < m; i++) {
            apples[i] = scanner.nextInt();
        }

        int[] oranges = new int[n];
        for (int i = 0; i < n; i++) {
            oranges[i] = scanner.nextInt();
        }
        
        countApplesAndOrange(s, t, a, b, apples, oranges);

        scanner.close();
    }

    public static void countApplesAndOrange(int s, int t, int a, int b, int[] apples, int[] oranges) {
        int appleCount = 0;
        int orangeCount = 0;

        for(int apple: apples) {
            int position = a + apple;
            if (position >= s && position <= t) {
                appleCount++;
            }
        }

        for (int orange : oranges) {
            int position = b + orange;
            if (position >= s && position <= t) {
                orangeCount++;
            }
        }

        System.out.println(appleCount);
        System.out.println(orangeCount);
    }
}