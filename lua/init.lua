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
	dofile("get_settings.lc")

	ws2812.init()
	ledBuffer = ws2812.newBuffer(114, 3)
	ledBuffer:fill(10,5,20)
	ledBuffer:set(44,255,0,0)
	ledBuffer:set(46,255,0,0)
	ledBuffer:set(64,255,0,0)
	ledBuffer:set(70,255,0,0)
	ledBuffer:set(84,255,0,0)
	for i=89,97 do ledBuffer:set(i,20,255,0) end
	ws2812.write(ledBuffer)
	
	sntp.sync(nil, nil, nil, 1) --get the time every 1000 sec
	
	dofile("webserver.lc")
	
	tim={min=0,hour=0}
	tmr.alarm(1, 5000, 1, function()
		dofile("wordclock.lc")
		dofile("char2led.lc")
	end)
end)
