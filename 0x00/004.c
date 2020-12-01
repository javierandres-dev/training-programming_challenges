#include <stdio.h>
/**
  * main - Entry point.
  * Return: 0 if successful.
  *
  * A palindromic number reads the same both ways.  The largest palindrome
  * made from the product of two 2-digit numbers is 9009 = 91 × 99.
  * Find the largest palindrome made from the product of two 3-digit numbers.
  */
int main(void)
{
	int a = 100, b, c;
	int reverse, remainder, palindromic, largest = 0, aa, bb;

	while (a < 1000)
	{
		b = 100;
		while (b < 1000)
		{
			c = a * b;
			reverse = 0;
			while (c != 0)
			{
				remainder = c % 10;
				reverse = (reverse * 10) + remainder;
				c /= 10;
			}
			c = a * b;
			if (c == reverse)
			{
				palindromic = c;
				if (palindromic > largest)
				{
					largest = palindromic;
					aa = a;
					bb = b;
				}
			}
			b++;
		}
		a++;
	}
	printf("The largest palindrome made from the product of two ");
	printf("3-digit numbers is %d = %d × %d\n.", largest, aa, bb);
	return (0);
}
