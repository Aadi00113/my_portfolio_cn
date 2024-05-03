var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');

console.log(navMenuAnchorTag);
for(let i =0; i<navMenuAnchorTag.length; i++ ){
    navMenuAnchorTag[i].addEventListener('click', function(event){
        event.preventDefault(); 
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        console.log(targetSectionID);
        
        var interval = setInterval(function(){
            var targetSectionCordinate = targetSection.getBoundingClientRect();
            console.log(targetSectionCordinate)
            if(targetSectionCordinate.top <=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 20);
            
        }, 10)
    })
}