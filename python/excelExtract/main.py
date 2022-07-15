import utils.fileHandler as fh

acceptableFiles = { 'xls', 'xlsx', 'csv' }

print(acceptableFiles.issubset('xls'))
# print(acceptableFiles['xls'])

files = fh.listDirFiles('/excelFiles')
print('files: ', files)