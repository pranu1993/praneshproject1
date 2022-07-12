const tempLoad = ()=>{
    let temp =document.getElementById('temp');
    temp.innerHTML= "";

    setTimeout(() =>{

        temp.innerHTML= "";
        temp.style.color= "#f8b627"

    }, 1000);

    setTimeout(() =>{

        temp.innerHTML= "";

    }, 2000);

    setTimeout(() =>{

        temp.innerHTML= "";

    }, 3000);

    setTimeout(() =>{

        temp.innerHTML= "";
        temp.style.color = "#d63031"

    }, 4000);


    
}

tempLoad();

setInterval(tempLoad, 5000);