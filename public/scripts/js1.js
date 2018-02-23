var lastID = 0;
var uname = "";
function newNote(){
	window.location.href = "/viewNote?id="+(lastID+1)+"&uName="+uName;
}
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var del = getParameterByName('toDel');
if(del){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if(xmlhttp.readyState === 4 && xmlhttp.status === 200) { location.reload()}}
	xmlhttp.open('DELETE', '/notes/'+del, true);
	xmlhttp.send();
}
var xmlhttp = new XMLHttpRequest(),json;
xmlhttp.onreadystatechange = function() {
	if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
		json = JSON.parse(xmlhttp.responseText);
		uName = document.getElementById('greet').innerHTML;
		uName = uName.substring(6, (uName.length - 1));
		for(var i = 0; i<json.length;i++){
			var note = json[i];
			console.log(note['uName']);
			console.log(uName);
			if(note['uName'] == uName){
			var table = document.getElementById('table');
			table.innerHTML += "<tr><td>"+note['subject']+
			"</td><td><a href=\"/viewNote?id="+note['_id']+"&uName="+uName+
			"\">View</a></td><td><a href=\"index?toDel="+
			note['_id']+"\">Delete</a></td></tr>";
			}
		}
	}
};
xmlhttp.open('GET', '/getNotes', true);
xmlhttp.send();
