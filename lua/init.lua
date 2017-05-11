timOffset=7200
colOn={80,255,0}
colOff={15,15,15}
ledBuffer=nil
chars={}
aps={}
setAps=function(t) 
	aps=t 
end

print("waiting 1s...")
print("use tmr.stop(0) to stop the init.lua")
tmr.alarm(0,1000,0,function()
	print("starting...")
	ws2812.init()
	ledBuffer = ws2812.newBuffer(114, 3)

	dofile("AP_setup.lc")
	sntp.sync(nil, nil, nil, 1) --get the time every 1000 sec
	--dofile("webserver.lc")
	tim={min=0,hour=0}
	tmr.alarm(1, 5000, 1, function()
		dofile("wordclock.lua")
		dofile("char2led.lua")
	end)
end)
