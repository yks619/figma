function submitValue(){
    const popup = document.getElementById("contact-popup")
    console.log(popup.classList)
    popup.setAttribute("class", "bg-[#00000050] absolute w-full h-full left-0 top-0")
    console.log(popup.classList)

    console.log(popup.attributes)
}


function closePopUp (){
    const popup = document.getElementById ("contact-popup")
    popup.setAttribute("class","bg-[#00000050] absolute left-0 right-0 bottom-0 top-0 hidden")
}