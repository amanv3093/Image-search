let inp = document.getElementById("inp");
let search_btn = document.getElementById("search_btn");
let search_results = document.getElementById("search_results");
let showmore=document.getElementById("showmore");
let x=1;
showmore.style.display="none"
function show() {
    
   
    
    let key = "AaOww2ueeMK4ONlWPHVMLBdUYJJ3ORQ3wpIELrsynAs";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.unsplash.com/search/photos?page=${x}&query=${inp.value}&client_id=${key}`);
    xhr.setRequestHeader('Authorization', 'Client-ID ' + key);
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        console.log(response);
        response.results.forEach((photo) => {
            let imgElement = document.createElement('img');
            imgElement.classList.add("imgElement");
            let imgbox=document.createElement("div");
            imgbox.classList.add("imgbox");
            let imgname=document.createElement("p");
            imgname.classList.add("imgname");
            imgname.innerText=photo.alt_description.slice(0,50);

            imgElement.setAttribute('src',photo.urls.full);
            imgElement.setAttribute("width","100px")
            imgElement.setAttribute("height","100px")  //alt_description
            
            imgbox.appendChild(imgElement);
            imgbox.appendChild(imgname)
            search_results.appendChild(imgbox);
            
        });
    };
    xhr.onerror = () => { console.log("Error occurred!"); };
    xhr.send();
    
    showmore.addEventListener(("click"),()=>{
        x++;
        show();

    })
    console.log(inp.value.length)
    if(inp.value.length>=1){
        showmore.style.display="flex"
    }else{
        showmore.style.display="none"
    }

}

search_btn.addEventListener(('click'), () => {
    x=1;
    search_results.innerText="";
    event.preventDefault();
    show();
});
