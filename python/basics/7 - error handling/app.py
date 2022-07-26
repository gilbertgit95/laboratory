from datetime import datetime

birth = input('Enter your Birthday (YYYY-MM-DD): ')
output = 'Your birthday is: '

try:
    output += str(datetime.strptime(birth, '%Y/%m/%d'))
except ValueError as e:
    # run if error occur
    output = 'date format should be YYYY-MM-DD'
else:
    # run if no error
    pass
finally:
    pass

print(output)