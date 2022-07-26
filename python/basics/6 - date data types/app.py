from datetime import datetime, timedelta

dateNow = datetime.now()
inDate = input('Enter date (yyyy/mm/dd): ')

daySubtract = timedelta(days = 1)
weekSubtract = timedelta(weeks = 1)

print(f'date now is : { str(dateNow) }')
print(f'date now is : { str(dateNow.month) }-{ str(dateNow.day) }-{ str(dateNow.year) }')

print(f'date yesterday is : { str(dateNow - daySubtract) }')
print(f'date last week is : { str(dateNow - weekSubtract) }')

print(f"input date is : { str(datetime.strptime(inDate, '%Y/%m/%d')) }")
