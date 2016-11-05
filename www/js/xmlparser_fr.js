// XML PARSER
function xmlparser()
{
	var xmlhttp, xml_data, items, content, article, grid;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", "feed.xml", true);
	/*xmlhttp.open("GET", "http://www.lfihk.net/lfi-feed/lfi-feed-fr.xml", true);*/
	xmlhttp.overrideMimeType('text/xml; charset=UTF-8');
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			xml_data = xmlhttp.responseXML;
			items = xml_data.getElementsByTagName("item"); 
						
			xml_content = '';
									
			for (i=0;i<items.length;i++)
			{
				//xml_content += '<a href="#a_' + i + '" id="close_' + i + '" onclick="read('+ i +')" class="close_button"><i class="grey-text small mdi-navigation-close"></i></a>';
				//xml_content += '<a href="#a_' + i + '" id="close_' + i + '" onclick="read('+ i +')" class="btn-floating waves-effect waves-light blue-grey darken-3 close_button"><i class="tiny mdi-navigation-close"></i></a>';
				//xml_content += '<a href="#a_' + i + '" id="close_' + i + '" onclick="read('+ i +')" class="btn-floating waves-effect waves-light blue-grey darken-3 close_button"><i class="tiny mdi-navigation-arrow-back"></i></a>';
				xml_content += '<a name="a_' + i + '" class="anchor"></a>';
				xml_content += '<div id="date_' + i + '" class="col s2 center" style="clear:both;padding-top:5px;"><i class="material-icons grey-text text-darken-1 small">event</i><div class="grey-text" style="margin-top:-5px;font-size:70%;">' + items[i].getElementsByTagName("pubDate")[0].textContent.substring(5,11) + '</div></div>';
				xml_content += '<div id="title_' + i + '" class="col s10 item_title"><h5 style="padding-top:5px;font-size:110%"><a href="#a_' + i + '" onclick="read('+ i +')" style="color:#212121;">' + items[i].getElementsByTagName("title")[0].textContent + '</a></h5><br /></div>';
				xml_content += '<div id="' + i + '" class="col s12 item_description">';
				xml_content += items[i].getElementsByTagName("description")[0].textContent
				xml_content += '<a href="'+ items[i].getElementsByTagName("link")[0].textContent + '" class="waves-effect waves-light btn blue darken-3">suite...</a></div>';
				xml_content += '</div>';
			}
			
			document.getElementById('xml_content').innerHTML=xml_content;
										
		}
	}
	xmlhttp.send();
}
window.onload = xmlparser();