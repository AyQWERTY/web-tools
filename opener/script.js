function openBatch() {
	const textarea = document.getElementById("urls");
	const lines = textarea.value.split("\n");
	const batchSize = parseInt(document.getElementById("batchSize").value, 10);
	let opened = 0;
	let skippedFiles = 0;
	const remaining = [];
  
	lines.forEach(line => {
	  const text = line.trim();
	  if (!text) {
		remaining.push(line);
		return;
	  }
	  if (text.startsWith("file://")) {
		skippedFiles++;
		remaining.push(line);
		return;
	  }
	  if (batchSize === 0 || opened < batchSize) {
		let url = text;
		if (!/^https?:\/\//i.test(url) && !/^ftp:\/\//i.test(url)) {
		  url = "http://" + url;
		}
		window.open(url);
		opened++;
	  } else {
		remaining.push(line);
	  }
	});
  
	if (opened === 0) {
	  alert("No URLs opened.");
	}
	if (skippedFiles > 0) {
	  alert(skippedFiles + " file:// links were skipped.");
	}
  
	textarea.value = remaining.join("\n");
  }
  
  function clearAll() {
	document.getElementById("urls").value = "";
  }
  