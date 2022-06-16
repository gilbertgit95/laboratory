import os
import glob


def listDirFiles(dir):
    currDir = os.getcwd()
    files = glob.glob(currDir + dir + '\*')
    # print(files)
    return files

def listFiles(dir):
    files = []
    completeDir = os.getcwd() + dir

    for file in os.listdir(completeDir):
        if os.path.isfile(os.path.join(completeDir, file)):
            files.append(file)

    # print(files)
    return files

def createFile():
    print('create a file here')

def deleteFile():
    print('delete file')

def writeIntoFile():
    print('write into file')