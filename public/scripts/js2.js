function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var toView = getParameterByName('id');
var uName = getParameterByName('uName');
var xmlhttp = new XMLHttpRequest(),json;
xmlhttp.onreadystatechange = function() {
	if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
		json = JSON.parse(xmlhttp.responseText);
		var sub = document.getElementById('subject');
		var note = document.getElementById('note');
		if(toView){
			for(var i = 0; i<json.length;i++){
				if(json[i]['_id']==toView){
					sub.value = json[i]['subject'];
					note.value = json[i]['note'];
				}
			}
		}
	}
};
xmlhttp.open('GET', '/getNotes', true);
xmlhttp.send();

function saveNote() {
	var subj = document.getElementById('subject').value;
	var noteInfo = document.getElementById('note').value;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('POST', '/createNote', true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send("{\"subject\": \""+subj+"\", \"note\": \""+noteInfo+"\", \uName\": \""+uName+"\"}");
}