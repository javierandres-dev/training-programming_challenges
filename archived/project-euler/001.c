#include <stdio.h>
/**
 * main - Entry point.
 * Return: 0 if successful.
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
int main(void)
{
	int limit;
	int i = 0;
	int sum = 0;

	printf("Enter limit number: ");
	scanf("%d", &limit);
	while (i < limit)
	{
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
		i++;
	}
	printf("%d\n", sum);
	return (0);
}
