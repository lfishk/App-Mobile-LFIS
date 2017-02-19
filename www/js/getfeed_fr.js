function getlficontent()
{
	var xmlhttp, content;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", "http://www.lfihk.net/lfi-feed/lfi-feed-fr.txt", true);
	xmlhttp.overrideMimeType('text/xml; charset=UTF-8');
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			content = xmlhttp.responseText;
			document.getElementById('xml_content').innerHTML=content;	
		}
	}
	xmlhttp.send();
}
window.onload = getlficontent();