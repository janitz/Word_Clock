file.remove("settings.txt")
file.open("settings.txt","w+")
file.writeline(colOn[1])
file.writeline(colOn[2])
file.writeline(colOn[3])
file.writeline(colOff[1])
file.writeline(colOff[2])
file.writeline(colOff[3])
file.writeline(esIst and 1 or 0)
file.writeline(uhr and 1 or 0)
file.writeline(timOffset)
file.close()
