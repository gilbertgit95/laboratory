from array import array

# lists
people = ['gilbert', 'rachel', 'patrick', 'lexie', 'adrian', 'francis']
people.append('rechie')
people.insert(0, 'andrew')
print(f' {people[0:6]} total of { len(people[0:6]) } person.')
print()

# arrays
nums = array('d', [1, 2, 3])
nums.append(4)
nums.insert(2, 6)
print(f'{ nums } {nums[0:2]}')
print()

# dictionary
dict = {}
dict['name'] = 'gilbert'
dict['age'] = 24
dict['gender'] = 'male'
print(dict)