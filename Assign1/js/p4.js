function demo(index){
    let p = document.querySelector('#HtmlDemo');
    switch(index){
        case 1:
         p.innerHTML ='<iframe width="100%" height="100%" src="p1/div.html"></iframe>'
         break;
        case 2:
        p.innerHTML ='<iframe width="100%" height="100%" src="p2/tku60.html"></iframe>'
         break;
        case 3:
        p.innerHTML ='<iframe width="100%" height="100%" src="p3/mytravel.html" ></iframe>'
         break;
    }
}   
