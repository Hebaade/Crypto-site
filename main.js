let hamIcon=document.getElementById('hamicon');
hamIcon.addEventListener('click',()=>{
    if(document.querySelector('#ful').style.display='none'){
    document.querySelector('#ful').style.display='flex'
    }
})
hamIcon.addEventListener('dblclick',()=>{
    document.querySelector('#ful').style.display='none'
})

document.getElementById('readMore').addEventListener('click',()=>{
    document.getElementById("d1").style.display='flex'
    document.getElementById("d2").style.display='flex'
    document.getElementById('readMore').style.display='none'
})
document.getElementById("readMore2").addEventListener("click", ()=>{
    document.getElementById("aboutt").style.display='block'
    document.getElementById('readMore2').style.display='none'
})
document.getElementById("ReadMore3").addEventListener("click", ()=>{
    document.getElementById("vcard").style.display='flex'
    document.getElementById('ReadMore3').style.display='none'
})