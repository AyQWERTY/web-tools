function make_dat_shit(){
	var urls=document.getElementById("urls").value;
	var urls=urls.split('\n');
	var urlindex=0;
	var fileindex=0;
	var s;

	for(var i=0;i<urls.length;i++){
		s=urls[i];
		s=s.replace(/^\s+|\s+$/g,'');
		if(s){
			if(s.substr(0,7)=='file://'){fileindex++;continue;}
			urlindex++;
			if((s.substr(0,7)!='http://')&&(s.substr(0,8)!='https://')&&(s.substr(0,6)!='ftp://')&&(s.substr(0,7)!='file://')){s='http://'+s;}
			window.open(s);
		}
	}
	if(0==urlindex){
		alert("Found no links to open!");
	}
	if (fileindex>0){alert("N.B. all modern browsers block scripts from openning files! Thus all file:// links were skipped."+" ["+fileindex+"]");}
}