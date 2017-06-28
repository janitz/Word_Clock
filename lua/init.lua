timOffset=7200
colOn={80,255,0}
colOff={15,15,15}
esIst=false
uhr=false

ledBuffer=nil
chars={}
aps={}
setAps=function(t) 
	aps=t 
end
print("-------------")
print("waiting 1s...")
print("use tmr.stop(0) to stop the init.lua")
tmr.alarm(0,1000,0,function()
	print("starting...")
	dofile("AP_setup.lc")
	
	file.open("settings.txt","r")
	colOn={
		tonumber(string.sub(file.readline(),1,-2)),
		tonumber(string.sub(file.readline(),1,-2)),
		tonumber(string.sub(file.readline(),1,-2))}
	colOff={
		tonumber(string.sub(file.readline(),1,-2)),
		tonumber(string.sub(file.readline(),1,-2)),
		tonumber(string.sub(file.readline(),1,-2))}
	file.close()

	ws2812.init()
	ledBuffer = ws2812.newBuffer(114, 3)
	ledBuffer:fill(15,15,15)
	ledBuffer:set(44,255,0,0)
	ledBuffer:set(46,255,0,0)
	ledBuffer:set(64,255,0,0)
	ledBuffer:set(70,255,0,0)
	ledBuffer:set(84,255,0,0)
	for i=89,97 do ledBuffer:set(i,80,255,0) end
	ws2812.write(ledBuffer)
	
	sntp.sync(nil, nil, nil, 1) --get the time every 1000 sec
	
	dofile("webserver.lc")
	
	tim={min=0,hour=0}
	tmr.alarm(1, 5000, 1, function()
		dofile("wordclock.lua")
		dofile("char2led.lua")
	end)
end)
