file.open("settings.txt","r")
colOn={
	tonumber(string.sub(file.readline(),1,-2)),
	tonumber(string.sub(file.readline(),1,-2)),
	tonumber(string.sub(file.readline(),1,-2))}
colOff={
	tonumber(string.sub(file.readline(),1,-2)),
	tonumber(string.sub(file.readline(),1,-2)),
	tonumber(string.sub(file.readline(),1,-2))}
esIst=tonumber(string.sub(file.readline(),1,-2))~=0
uhr=tonumber(string.sub(file.readline(),1,-2))~=0
file.close()
