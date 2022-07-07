/* h1 html elemnet mdn / Mozilla Developer Network*/
/* Web APIs/MDN */
/* console.dir(titlte) on으로 시작하는게 event lisener */


const h1 = document.querySelector("div.hello:first-child h1")


function handleTitleClick(){
    // const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass) 
    // }else{
    //     h1.classList.add(clickedClass)

    // }
    h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick)