#include <stdio.h>
/**
 * main - Entry point.
 * Return: 0 if successful.
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.  What is the 10 001st prime number?
 */
int main(void)
{
	int divisor = 2, dividend, count, position = 0;

	while (position < 10001)
	{
		count = 0;
		for (dividend = 2; dividend <= divisor; dividend++)
		{
			if (divisor % dividend == 0)
				count++;
		}
		if (count == 1)
		{
			position++;
		}
		divisor++;
	}
	printf("The %dst prime number is: %d.\n", position, divisor - 1);
	return (0);
}
