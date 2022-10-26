const secondLogo = document.getElementById('logo-of-login')
const firstLogo = document.getElementById('first-logo-og-login')
const header = document.getElementById('testtest')
header.addEventListener('click', function(){
  document.getElementById('modalka').style.display = 'none'
 
})
function close(){
  document.getElementById('modalka').style.display = 'none'

}
if(document.documentElement.clientWidth < 500){
  firstLogo.style.display = "none"
  secondLogo.style.display = "block"
  header.style.top = "7%"
  header.style.left = "5%"
  header.style.position = "absolute"
}
if(document.documentElement.clientWidth > 500){
  header.style.top = "3%"
  header.style.left = "5%"
  header.style.position = "absolute"
  
  
  
   
  
}
