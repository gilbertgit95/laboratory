fname = input('Enter your first name: ')
lname = input('Enter your last name: ')

# different ways of string formatting
print('sor your name is ' + fname + ' ' + lname)
print('sor your name is {} {}'.format(fname, lname))
print('sor your name is {1} {0}'.format(fname, lname))
print(f'sor your name is { fname } { lname }')