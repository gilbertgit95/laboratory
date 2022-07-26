gender = input('Your gender (male|female):')
gender = gender.lower()

if gender == 'male' or gender == 'female':
    color = input('Enter favorite Color: ')
    color = color.lower()
    you = 'sir'

    if gender == 'female':
        you = 'maam'

    if color in ('blue', 'green', 'violet'):
        print(f'{ you }, you are so cool.')

    elif color in ('red', 'yellow', 'orange', 'pink'):
        print(f'{ you }, you are so hot.')

    elif color in ('white', 'black', 'gray'):
        print(f'{ you }, you are a neutrl person.')


    else:
        print('I dont know what to say :)')


    # special
    if (gender == 'female' and color == 'red'):
        print('and I think you are amazing :)')
else:
    print('Just choose male or female!')

