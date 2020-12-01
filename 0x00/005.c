#include <stdio.h>
#include <stdbool.h>
/**
 * main - Entry point.
 * Return: 0 if successful.
 *
 * 2520 is the smallest number that can be divided by each of the numbers
 * from 1 to 10 without any remainder.  What is the smallest positive number
 * that is evenly divisible by all of the numbers from 1 to 20?
 */
int main(void)
{
	bool loop = true;
	int number = 0, smallest, amount, count, i;

	while (loop)
	{
		number++;
		smallest = 0;
		amount = 20;
		count = 0;
		for (i = 1; i <= amount; i++)
		{
			if (number % i == 0)
				count++;
			else
				break;
		}
		if (amount == count)
		{
			smallest = number;
			loop = false;
		}
	}
	printf("The smallest positive number that is evenly divisible by ");
	printf("all of the numbers from 1 to %d is: %d\n", amount, smallest);
	return (0);
}

