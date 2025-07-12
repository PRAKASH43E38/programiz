counter = 1;
setInterval(function(){
    document.getElementById("radio"+counter).checked = true
    counter += 1;
    if (counter>3){
        counter = 3
    }
},3000);


