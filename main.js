function random(){
    const r=Math.floor(Math.random()*255)+1
    const g=Math.floor(Math.random()*255)+1
    const b=Math.floor(Math.random()*255)+1
    const mainbox=document.getElementById('mainbox')
    mainbox.style.backgroundColor=`rgb(${r},${g},${b})`;
    

}
window.addEventListener('load',()=>{
    const r=Math.floor(Math.random()*255)+1
    const g=Math.floor(Math.random()*255)+1
    const b=Math.floor(Math.random()*255)+1
    const mainbox=document.getElementById('mainbox')
    mainbox.style.backgroundColor=`rgb(${r},${g},${b})`;
})