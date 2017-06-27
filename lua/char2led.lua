ledBuffer:fill(colOff[1],colOff[2],colOff[3])
for j=0,4 do
	for i=1,11 do
		if(chars[j*22+i]>0)then ledBuffer:set(j*22+i,colOn)end
		if(chars[j*22+11+i]>0)then ledBuffer:set(j*22+23-i,colOn)end
	end
end
for i=111,114 do
	if(chars[i]>0)then ledBuffer:set(i,colOn)end
end
ws2812.write(ledBuffer)