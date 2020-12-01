#include <stdio.h>
/**
 * main - Entry point.
 * Return: 0 if successful.
 *
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is $3025 - 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
*/
int main(void)
{
	int limit = 100, number = 1, square, sumSquare = 0;
	int sum = 0, squareSum, difference;

	while (number <= limit)
	{
		square = number * number;
		sumSquare += square;
		number++;
	}
	number = 1;
	while (number <= limit)
	{
		sum += number;
		number++;
	}
	squareSum = sum * sum;
	difference = squareSum - sumSquare;
	printf("The difference between the sum of the squares of the first one ");
	printf("hundred (%d) natural numbers and the square of the sum is: ", limit);
	printf("%d - %d = %d\n", squareSum, sumSquare, difference);
	return (0);
}
