var nodes={
	output:  document.getElementsByClassName('output')[0],
	getDataBtn: document.getElementsByClassName('getDataBtn')[0],
};

var dataURL = './aaaloremIpsum.txt';

function getDataWithAxios(){
	axios.get(dataURL)
		.then(function(response){
			nodes.output.innerHTML = response.data;
		}).catch(function(error){
			console.log(error);
		});
}

function getDataWithFetch(){
	fetch(dataURL)
		.then(function(response){
			return response.text();
		})
		.then(function(responseText){
			nodes.output.innerHTML = responseText;
		})
		.catch(function(error){
			console.log(error);
		});
}


nodes.getDataBtn.addEventListener('click', function(){
	// FetchCallStructures(dataURL);
	// getDataWithAxios(dataURL);
	getDataWithFetch(dataURL);
	// loadJSON('https://api.github.com/users/malyw');// is parsed normally
});