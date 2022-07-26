def calcCubeVolume(width=100):
    volume = width ** 3
    return volume

def getUserValue():
    val = input('Enter value: ')
    return float(val)

for count in range(0, 3):
    print(f'For the { count + 1 } cube.')
    width = getUserValue()
    area = calcCubeVolume(width)
    print(f'so the area of the cube is: { area }')
