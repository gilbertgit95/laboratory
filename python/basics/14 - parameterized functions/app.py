import math

def calcMomentum(speed, mass):
    return mass * speed

def calcFallSpeed(distance):
    # v = squaroot of 2 * g * d
    g = 9.8
    return math.sqrt(2 * g * distance)

dist = input('Enter distance from the ground: ')
mass = input('Enter the mass of the falling body: ')
v = calcFallSpeed(float(dist))

print(f'the momentum would be around: { calcMomentum(mass=float(mass), speed=v) }')
