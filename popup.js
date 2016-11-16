document.addEventListener('DOMContentLoaded', function() {
  
  var checkPageButton = document.getElementById('color');
  checkPageButton.addEventListener('click', function(tab) {
  	var bground = document.getElementById("bg").value;
  	var fground = document.getElementById("fg").value;
    console.log(bground);
    console.log(fground);

    chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor = "'+bground+'" ;',
    code: 'document.body.style.color = "'+fground+'";'
 	 });
  }, false);

  var resetPageButton = document.getElementById('reset');
  resetPageButton.addEventListener('click', function(tab) {
  	chrome.tabs.executeScript({
    code: 'window.location.reload(true);'
	});
  }, false);

}, false);
