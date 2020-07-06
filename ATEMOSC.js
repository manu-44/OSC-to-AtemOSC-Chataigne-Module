function sendCommand(command)
{
	local.send("/atem/", command);
}

function selectionCallback(type, source)

{
	local.send("/atem/"+type+"/"+source);
}

function transitionCallback(type, tbar)

{
	if (type=="tbar") return {local.send("/atem/"+type+" "+tbar);}
	else local.send("/atem/"+type);
}

