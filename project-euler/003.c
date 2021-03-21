#include <stdio.h>
/**
 * main - Entry point.
 * Return: 0 if successful.
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
int main(void)
{
	long long int number, handled;
	int dividend, factor, primeFactor, largestPf;

	printf("Enter a number: ");
	scanf("%lld", &number);
	handled = number;
	dividend = 2;
	printf("The prime factors of %lld are: ", number);
	while (handled > 1)
	{
		if (handled % dividend == 0)
		{
			factor = dividend;
			while (handled % factor == 0)
			{
				primeFactor = factor;
				printf("%d ", primeFactor);
				handled /= primeFactor;
			}
			largestPf = primeFactor;
		}
		dividend++;
	}
	printf("\nThe largest prime factor of the %lld ", number);
	printf("is: %d.\n", largestPf);
	return (0);
}
/*
#include <stdint.h>
#include <limits.h>
int main(void)
{
	long long int number = 0;
	int prime = 0, factorPrime = 0, largest = 0;
	int divisor = 0, dividend = 0, remainder = 0, times = 0;

	printf( "int64_t   %20lld  %20lld\n" , LLONG_MIN , LLONG_MAX  );
	printf("Enter a number: ");
	scanf("%lld", &number);
	printf("\nNumber: %lld\nSize: %ld\n", number, sizeof(number));
	largest = 0;
	for (divisor = 2; divisor <= number; divisor++)
	{
		times = 0;
		for (dividend = 2; dividend <= divisor; dividend++)
		{
			remainder = divisor % dividend;
			if (remainder == 0)
				times++;
		}
		if (times == 1)
		{
			prime = divisor;
			if (number % prime == 0)
				factorPrime = prime;
			if (factorPrime > largest)
				largest = factorPrime;
		}
	}
	printf("The largest prime factor of the %lld is: %d\n", number, largest);
	return (0);
}
*/
