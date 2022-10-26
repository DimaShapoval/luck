const lastTrans = document.getElementById("lastTrans");
const footerWindow = document.getElementById("sideNav");
const tableOfFooter = document.getElementById('table-of-nav')
const footerWrapper = document.getElementById('footer-wrapper')
const vertical = document.getElementsByClassName('hide')
const mobileButton = document.getElementById('hide1')

async function openNav(){
  footerWindow.style.height = "350px"
  footerWindow.style.transition = "all 0.5s"
  footerWrapper.style.borderBottomRightRadius = "0px"
  footerWrapper.style.borderBottomLeftRadius = "0px"
  if($(window).width() < 800){
    footerWindow.style.height = "109%"
  }
  setTimeout(()=>{
    tableOfFooter.style.display = "inline-table"
  tableOfFooter.style.transition = "all 0.5s"
    for(let i=0;i<vertical.length;i++){
      vertical[i].style.display = "block";
   vertical[i].style.transition = "all 0.5s"
    }
  //   vertical[0].style.display = "block";
  //  vertical[0].style.transition = "all 0.5s"
  // vertical[1].style.display = "block";
  //  vertical[1].style.transition = "all 0.5s"
  // vertical[2].style.display = "block";
  //  vertical[2].style.transition = "all 0.5s"
  }, 500);
  
  
}
async function closeNav(){
  footerWindow.style.height = "0px"
  footerWindow.style.transition = "all 0.5s"
  tableOfFooter.style.display = "none"
  for(let i=0;i<vertical.length;i++){
      vertical[i].style.display = "none";
   
    }
  setTimeout(()=>{
    footerWrapper.style.borderBottomRightRadius = "15px"
  footerWrapper.style.borderBottomLeftRadius = "15px"
    footerWrapper.style.transition = "all 0.2s"
    
  }, 600)
  
}



lastTrans.addEventListener('click', function(){
  
  if(tableOfFooter.style.display == "inline-table"){
    closeNav();
    
    
  }
  else{
    openNav();
  
  }
  
})
mobileButton.addEventListener('click', function(){
  if(tableOfFooter.style.display == "inline-table"){
    closeNav();
    
    
  }
  else{
    openNav();
    setTimeout(()=>{
      footerWindow.scrollIntoView({block: "center", behavior: "auto"})
    },600)
    
    
  
  }
})

