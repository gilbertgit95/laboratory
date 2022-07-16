import utils.fileHandler as fh
import xlrd

acceptableFiles = { 'xls', 'xlsx', 'csv' }

print(acceptableFiles.issubset('xls'))
# print(acceptableFiles['xls'])

files = fh.listDirFiles('/excelFiles')
print('files: ', files)

# Give the location of the file
loc = files[1]
 
# To open Workbook
wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)
 
# For row 0 and column 0
print(sheet.cell_value(0, 0))