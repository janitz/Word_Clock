
for i=1,114 do
	chars[i]=0
end

tim=rtctime.epoch2cal(rtctime.get()+timOffset)
if(esIst)then
	for i=1,2 do chars[i]=1 end --es
	for i=4,6 do chars[i]=1 end --ist
end

if(uhr)then
	for i=108,110 do chars[i]=1 end --uhr
end
if(tim.min%5>0)then
	for i=111,tim.min%5+110 do chars[i]=1 end
end

h=tim.hour+12
m=math.floor(tim.min/5)
if(m==1)then
	for i=8,11 do chars[i]=1 end --fünf
	for i=41,44 do chars[i]=1 end --nach
elseif(m==2)then
	for i=12,15 do chars[i]=1 end --zehn
	for i=41,44 do chars[i]=1 end --nach
elseif(m==3)then
	for i=27,33 do chars[i]=1 end --viertel
	h=h+1
elseif(m==4)then
	for i=16,22 do chars[i]=1 end --zwanzig
	for i=41,44 do chars[i]=1 end --nach
elseif(m==5)then
	for i=8,11 do chars[i]=1 end --fünf
	for i=35,37 do chars[i]=1 end --vor
	for i=45,48 do chars[i]=1 end --halb
	h=h+1
elseif(m==6)then
	for i=45,48 do chars[i]=1 end --halb
	h=h+1
elseif(m==7)then
	for i=8,11 do chars[i]=1 end --fünf
	for i=41,44 do chars[i]=1 end --nach
	for i=45,48 do chars[i]=1 end --halb
	h=h+1
elseif(m==8)then
	for i=12,15 do chars[i]=1 end --zehn
	for i=41,44 do chars[i]=1 end --nach
	for i=45,48 do chars[i]=1 end --halb
	h=h+1
elseif(m==9)then
	for i=23,33 do chars[i]=1 end --dreiviertel
	h=h+1
elseif(m==10)then
	for i=12,15 do chars[i]=1 end --zehn
	for i=35,37 do chars[i]=1 end --vor
	h=h+1
elseif(m==11)then
	for i=8,11 do chars[i]=1 end --fünf
	for i=35,37 do chars[i]=1 end --vor
	h=h+1
end

while h>12 do
	h=h-12
end 

if(h==1)then
	for i=69,71 do chars[i]=1 end --ein
	if(not uhr) then chars[72]=1 end --s
elseif(h==2)then
	for i=67,70 do chars[i]=1 end --zwei
elseif(h==3)then
	for i=89,92 do chars[i]=1 end --drei
elseif(h==4)then
	for i=85,88 do chars[i]=1 end --vier
elseif(h==5)then
	for i=56,59 do chars[i]=1 end --fünf
elseif(h==6)then
	for i=78,82 do chars[i]=1 end --sechs
elseif(h==7)then
	for i=72,77 do chars[i]=1 end --sieben
elseif(h==8)then
	for i=50,53 do chars[i]=1 end --acht
elseif(h==9)then
	for i=103,106 do chars[i]=1 end --neun
elseif(h==10)then
	for i=100,103 do chars[i]=1 end --zehn
elseif(h==11)then
	for i=97,99 do chars[i]=1 end --elf
elseif(h==12)then
	for i=62,66 do chars[i]=1 end --zwölf
end

