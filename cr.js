()=>{ // ignore this stuff
/**
 * #1
 */
    function changePhotoDiv() {
        document.querySelector('#photodiv').style.backgroundImage='none';
        document.querySelector('#photodiv').style.backgroundSize='cover';
        document.querySelector('#photodiv').style.backgroundPosition='left';
        document.querySelector('#photodiv').style.marginTop='8vh';
        document.querySelector('#photodiv2').style.backgroundImage='none';
        document.querySelector('body').style.backgroundColor="var(--body-background-color)";
    }

/**
 * #2
 */

 function makeSelectedMajorDivVisible(idDivToShow, classToSearchWithin){ 
    //find all elements within 'classToSearchWithin' and... 
    var classList = document.querySelectorAll(classToSearchWithin)         
    classList.forEach(function(e){
        if (e.classList.contains('here')) e.classList.remove('here')
        if (!e.classList.contains('displaynone')) e.classList.add('displaynone')

        if(e.id == idDivToShow) e.classList.add('here')
    })
 }

 /**
  * Mobile Check
  */

let isMobile = window.innerWidth < 800 // This makes is mobile "true"

function changeMobile() {
    isMobile = window.innerWidth < 800 // This updates that check
}

window.addEventListener('resize', changeMobile) 


// Example
function someAction() {
    if(isMobile) {
        // Do things for mobile
    } 
    
    if(!isMobile) {
        // Do desktop things
    }
}

}
