document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var dawgifiedText = inputText + ", dawg";
    document.getElementById('output').innerHTML = dawgifiedText;
};