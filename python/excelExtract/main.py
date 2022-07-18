import utils.fileHandler as fh
import xlrd

acceptableFiles = { 'xls', 'xlsx', 'csv' }

print(acceptableFiles.issubset('xls'))
# print(acceptableFiles['xls'])

files = fh.listDirFiles('/excelFiles')
print('files: ', files)

# Give the location of the file
loc1 = files[1]
# loc2 = files[2]
 
# To open Workbook
wb1 = xlrd.open_workbook(loc1)
# wb2 = xlrd.open_workbook(loc2)

sheet1 = wb1.sheet_by_index(0)
# sheet2 = wb2.sheet_by_index(0)
 
# For row 0 and column 0
print(sheet1.cell_value(0, 0))
# print(sheet2.cell_value(0, 0))