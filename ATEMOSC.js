function sendCommand(command)
{
	local.send("/atem/", command);
}

function selectionCallback(type, source)

{
	local.send("/atem/"+type+"/"+source);
}

function transitionCallback(type, tbar, typeauto, rate, preview)

{
	if (type=="bar") local.send("/atem/"+type+" "+tbar);
	if (type=="auto") 
		{
			local.send("/atem/transition/type "+typeauto);
			local.send("/atem/transition/rate "+rate);
		}

	if (type=="preview")
		{
			local.send("/atem/preview "+preview);
			//if (preview==0) local.send("/atem/preview false");
			//if (preview==1) local.send("/atem/preview true");
		}

	else local.send("/atem/"+type);
}

function auxiliarysourceselectionCallback(aux, source)

{
	local.send("/atem/aux/"+aux+" "+source);
}

