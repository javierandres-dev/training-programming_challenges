"""
3. Write a Python program to display the current date and time.
Sample Output :
Current date and time :
2014-07-05 14:34:14
"""
import datetime
current_date = datetime.datetime.now()
formated_date = current_date.strftime("%Y-%m-%d %H:%M:%S")
print(f"Current date and time :\n{formated_date}")
