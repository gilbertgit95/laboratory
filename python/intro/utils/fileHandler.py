import os
import glob


def list_files(dir):
    currDir = os.getcwd()
    files = glob.glob(currDir + '\*')
    print(files)
    return []

def createFile():
    print('create a file here')

def deleteFile():
    print('delete file')

def writeIntoFile():
    print('write into file')