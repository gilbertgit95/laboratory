from dotenv import load_dotenv

import utils.encryptionHandler as cryptH
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


# hash = cryptH.btoa('test I')
# print(f'decrypt: { cryptH.atob(hash) }')

# hashedP = cryptH.hash_password('passtest')
# print(f'{ hashedP }: { cryptH.compare_text_to_hash("passtest", hashedP) }')



fileH.list_files('list')


# dictDataA = {'a': 1,'b': 3}
# dictDataB = {'b': 4,'c': 2}
# dictDataA['e'] = 5
# dictDataA.update(dictDataB)
# print(dictDataA)
