from dotenv import load_dotenv

import utils.encryptionHandler as ncryH
import utils.fileHandler as fileH

load_dotenv()

# console input and output
# name = input('enter you name: ')
# print('Hello ' + name + '!')

# data type conversion
# int()
# float()
# bool()
# str()
# age = input('enter you age: ')
# print('So you are born on the year ' + str(2022 - int(age)))
ncryH.btoa('test I')
ncryH.atob('test II')

fileH.list_files('list')

