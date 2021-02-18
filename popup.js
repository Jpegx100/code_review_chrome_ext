function getPeriod(){
	if (new Date().getHours() < 12) return "Bom dia";
	return "Boa tarde";
} 

chrome.tabs.executeScript(null, {
    code: 'title = document.getElementsByClassName("pull-request-title")[0].innerText; [title, window.location.toString()]',
    runAt: 'document_start',
}, function(results) {
    
    document.getElementById('period').innerHTML = getPeriod();
    document.getElementById('title').innerHTML = results[0][0];
    document.getElementById('url').innerHTML = results[0][1];

	var copyBtn = document.querySelector('.button');
	copyBtn.addEventListener('click', function(event) {
		var range = document.createRange();
		range.selectNode(document.getElementById('content'));
		window.getSelection().addRange(range);
		document.execCommand('copy');

		window.getSelection().removeAllRanges();
	});
});
