

var activeAccentColor = 'var(--color-1)';
var currentActiveMajorDiv = document.querySelector('#aboutmediv');
var currentSelectedNavButton = document.querySelector('#aboutmebutton');
var currentSelectedMajorDivHeaderButton = "";
var widthOfScreen=window.innerWidth;
var theCurrentPaintingsParaTitle = "";
var theCurrentGraphicsParaTitle= "";
var activePicture = null;
var activePictureTitle = null;
console.log(widthOfScreen);

var theIndex = 1;
function logResize(){
  (console.log('window-resized'));
}

window.onresize = logResize;

   function makePopupVisible(aLet, aNum){
          var theElement = document.querySelector(`#${aLet}${aNum}popup`);
          theElement.classList.remove("displaynone");
          theElement.style.zIndex="12";
         // var theOriginalElement = document.querySelector(`#${aLet}${aNum}popup`);
          var curtainElement = document.querySelector('#curtain');
          curtainElement.style.display="block";
        }

    function makePopupDisappear(aLet, aNum){
          var theElement = document.querySelector(`#${aLet}${aNum}popup`)
          console.log(theElement + "make PopDisappear is mostly working (knock knock knock)");
          theElement.classList.add("displaynone");
          var curtainElement = document.querySelector('#curtain');
          curtainElement.style.display='none';
        }

	//var s=skrollr.init();

    
//Assigning tabindex to pictures in gallery
    function makeAccessible(){
          document.querySelector('#navigation').querySelectorAll('a').forEach(
              function(e){ e.setAttribute("tabindex", theIndex);
                theIndex++;}
            )
          document.querySelectorAll(".picture").forEach(function(e){    
              e.setAttribute("tabindex", theIndex);
                theIndex++;
            })
      }
      //calling function to give pics tab index
    makeAccessible(1);    
       
//make nav buttons change colors                      

//Adding CLICK event listener to NAV buttons
    document.querySelectorAll('.navbuttons').forEach(function(e){   
        e.addEventListener('click', function(){
            currentSelectedNavButton.style.color='var(--button-deselected-font-color)';
            currentSelectedNavButton.style.backgroundImage='none';
            //changing the value of global variable, currentSelectedNavButton ONLY if event was 'click'
            currentSelectedNavButton=event.target;
            var stringifiedNavButton = currentSelectedNavButton.id;
            var parameterForGonnaVar = stringifiedNavButton.length - 6;
            var gonnaBecurrentActiveMajorDiv = stringifiedNavButton.slice(0,parameterForGonnaVar);
            var combined = gonnaBecurrentActiveMajorDiv+"div";
            currentActiveMajorDiv=document.querySelector(`#${combined}`);
            //Click-->currentNavButton value changes--> activeAccentColorValueChanges
            if(e.id==="contactbutton"){activeAccentColor='var(--color-1)';
             }
            else if(e.id==="aboutmebutton"){activeAccentColor='var(--color-2)'}
            else if(e.id==="gallerybutton"){activeAccentColor='var(--color-3)'}
            else if(e.id==="locationbutton"){activeAccentColor='var(--color-4)'};
                currentSelectedNavButton.style.color=activeAccentColor;
                currentSelectedNavButton.style.backgroundImage='url("../resources/swirl.png")';
                    } )    
                })


//function that makes divs visble
     function makeSelectedMajorDivVisible(idDivToShow, classToSearchWithin){ 
          //find all elements within 'classToSearchWithin' and...          
          document.querySelectorAll(classToSearchWithin).forEach(function(e){
              //go through each element within class and make sure it has class 'displaynone' and does not have 'here' class...
              if(e.classList.contains("here")
              ){e.classList.remove("here");
                }   
             if(!e.classList.contains("displaynone")){
                 e.classList.add("displaynone");
             }
            }
            )
          //name the div(ID) that I want to show   
          var theMajorDiv = document.getElementById(idDivToShow); 
          //add'here' to classlist of selected div
          theMajorDiv.classList.remove('displaynone');
          theMajorDiv.classList.add('here');

          if(idDivToShow=='#aboutmediv'){document.querySelectorAll('.majordivheaders').forEach(function(d){
            d.style.display="none"
          })}
            portfolioFadeIn();
      }

      function portfolioFadeOut(){
          $('#portfolio').fadeOut(200);
      }

      function portfolioFadeIn(){
          $('#portfolio').fadeIn(200);
      }

      function makeSepia(theIdOfElementWithIdSymbol,theNumber){
        
        document.querySelector(theIdOfElementWithIdSymbol).style.filter=`sepia(${theNumber})`
      }

  //function to create photodiv2    
  function createPhotoDiv2(backgroundUrl, positionLeftOrRight){
          document.querySelector('#photodiv2').style.backgroundImage=`url(${backgroundUrl})`;
          document.querySelector('#photodiv2').style.backgroundSize='contain';
          document.querySelector('#photodiv2').style.backgroundPosition=positionLeftOrRight;
          document.querySelector('#photodiv2').style.marginTop='0vh';
          document.querySelector('#photodiv2').style.position='absolute';
          document.querySelector('#photodiv2').style.height='100vh';
          document.querySelector('#photodiv2').style.width='100vw';
          document.querySelector('#photodiv2').style.backgroundRepeat='no-repeat';}
      


  function createPhotoDiv(backgroundUrl1, rightOrLeft){
          document.querySelector('#photodiv').style.backgroundImage=`url(${backgroundUrl1})`;
          document.querySelector('#photodiv').style.backgroundSize='contain';
          document.querySelector('#photodiv').style.backgroundPosition=rightOrLeft;
          document.querySelector('#photodiv').style.marginTop='23vh';
        }

        function changeActiveMajorDivHeaderAndColor(){
           var thingToChangeActiveMajorTo= event.target.id
           currentSelectedMajorDivHeaderButton = thingToChangeActiveMajorTo;
           thingToChangeActiveMajorTo.style.color=activeAccentColor;
        }
          
//connecting the actions of making divs visible and changing the backgrounds with their selected buttons
  document.querySelector('#gallerybutton').addEventListener("click", 
        function(){
        makeSelectedMajorDivVisible('gallerydivheader', '.majordivheaders');
        makeSelectedMajorDivVisible('paintingsdiv', '.majordiv');
        document.querySelector('#photodiv').style.backgroundImage='none';
        document.querySelector('#photodiv').style.backgroundSize='cover';
        document.querySelector('#photodiv').style.backgroundPosition='left';
        document.querySelector('#photodiv').style.marginTop='8vh';
        document.querySelector('#photodiv2').style.backgroundImage='none';
        document.querySelector('body').style.backgroundColor="var(--body-background-color)";
        if(document.querySelector('#paintingsdiv')){
         if(widthOfScreen>800){ document.querySelector('#paintingsdiv').style.marginLeft='15vw';}
          if(widthOfScreen>800){document.querySelector('#paintingsdiv').style.marginRight='15vw';}
          document.querySelector('h3').style.color=activeAccentColor;
          theCurrentNameOfArray=arrayOfPaintingsParas;
          theCurrentNameOfTitleArray=arrayOfPaintingsTitleParas;
          makeAccessible()}
        else if(document.querySelector('#graphicsdiv')){
          document.querySelector('#graphicsdiv').style.marginLeft='15vw';
        document.querySelector('#graphicsdiv').style.marginRight='15vw';
          theCurrentNameOfArray=arrayOfGraphicsParas;
          theCurrentNameOfTitleArray=arrayOfPaintingsTitleParas;
          makeAccessible();}
       // ifHasClassRemoveItFrom('.contact-photodiv-background');
  
     // ifHasClassRemoveItFrom('.location-photodiv-background');
     // document.querySelector('#photodiv').classList.add('.gallery-photodiv-background');
        }
        )

        document.querySelector('#locationbutton').addEventListener("click", function(){
            makeSelectedMajorDivVisible('locationdivheader', '.majordivheaders');
             makeSelectedMajorDivVisible('presentlocationdiv', '.majordiv');
            document.querySelector('#photodiv').style.backgroundImage='url("../resources/webdevelopmentbackground1.png")';
             document.querySelector('#photodiv').style.backgroundSize='contain';
             document.querySelector('#photodiv').style.backgroundPosition='right';
             document.querySelector('#photodiv').style.marginTop='8vh';
              createPhotoDiv2("../resources/webdevelopmentbackground2.png", 'right');
              document.querySelector('body').style.backgroundColor="white";
              document.querySelectorAll('h3').forEach(function(e){
                  e.style.color=activeAccentColor;
              })

              if(document.querySelector('#presentlocationdiv')){
                document.querySelector('#presentlocationdiv').style.marginLeft='5vw';
                document.querySelector('#presentlocationdiv').style.marginRight='31vw';
                document.querySelector('h3').style.color=activeAccentColor;
                theCurrentNameOfArray=arrayOfPresentLocationParas;
                theCurrentNameOfTitleArray=arrayOfPresentLocationTitleParas;
                makeAccessible()}
              else if(document.querySelector('#upcominglocationdiv')){
                document.querySelector('#upcominglocationdiv').style.marginLeft='5vw';
              document.querySelector('#upcominglocationdiv').style.marginRight='31vw';
                theCurrentNameOfArray=arrayOfUpcomingLocationParas;
                theCurrentNameOfTitleArray=arrayOfUpcomingLocationTitleParas;
                makeAccessible();}
            // document.querySelector('#locationdiv').style.marginLeft='5vw';
            // document.querySelector('#locationdiv').style.marginRight='31vw';
            // document.querySelector('body').style.backgroundColor='var(--body-background-color)';
            // theCurrentNameOfArray=arrayOfWebParas;                              
          })
   
  document.querySelector('#contactbutton').addEventListener("click", function(){
    makeSelectedMajorDivVisible('contactdivheader', '.majordivheaders');
    makeSelectedMajorDivVisible('contactdiv', '.majordiv');
    document.querySelector('#photodiv').style.backgroundImage='url("../resources/contact1.png")';
     document.querySelector('#photodiv').style.backgroundSize='contain';
     document.querySelector('#photodiv').style.backgroundPosition='left';
     document.querySelector('#photodiv').style.marginTop='8vh';
    createPhotoDiv2("../resources/contact2.1.png", 'left');
     if(widthOfScreen>800){document.querySelector('#contactdiv').style.marginLeft='31vw';}
     document.querySelector('#contactdiv').style.marginRight='15vw';
     document.querySelector('body').style.backgroundColor="white";
     document.querySelector("#contactp").style.color=activeAccentColor;
     document.querySelectorAll('h3').forEach(function(e){
      e.style.color=activeAccentColor;
     })
                                  
  })

 

  document.querySelector('#aboutmebutton').addEventListener("click", function(){
      makeSelectedMajorDivVisible('invisibledivheader', '.majordivheaders');
      makeSelectedMajorDivVisible('aboutmediv', '.majordiv');
     createPhotoDiv("../resources/homepage1.png", 'right');
    createPhotoDiv2("../resources/homepage2.png", 'right');
     document.querySelector('#aboutmediv').style.marginLeft='5vw';
     document.querySelector('#aboutmediv').style.marginRight='31vw';
     document.querySelector('body').style.backgroundColor='var(--body-background-color)';                             
     })

     

  /*determining which page to show at site onload*/
    makeSelectedMajorDivVisible('aboutmediv', '.majordiv');
    makeSelectedMajorDivVisible('invisibledivheader', '.majordivheaders');
    createPhotoDiv("../resources/homepage1.png", 'right');
    document.querySelector('#photodiv2').style.backgroundImage='none';
    document.querySelector('#aboutmediv').style.marginLeft='5vw';
    document.querySelector('#aboutmediv').style.marginRight='31vw';
    document.querySelector('#aboutmebutton').style.backgroundImage='url("../resources/swirl.png")';

  /*adding effects to buttons within specific pages*/
  document.querySelector('#graphicsbutton').addEventListener("click", function(){
    theCurrentNameOfTitleArray=arrayOfGraphicsTitleParas;
    
    console.log('graphicsbutton can feel.')     
    makeSelectedMajorDivVisible('graphicsdiv','.majordiv');
    document.querySelector('#paintingsbutton').style.color='var(--button-deselected-font-color)';
    document.querySelector('#graphicsbutton').style.color=activeAccentColor;    
    //changeActiveMajorDivHeaderAndColor;
                  
  });

  document.querySelector('#paintingsbutton').addEventListener("click", function(){
    console.log('paintingsbutton can feel.')    
    theCurrentNameOfTitleArray=arrayOfGraphicsTitleParas;
    makeSelectedMajorDivVisible('paintingsdiv','.majordiv');   
    document.querySelector('#graphicsbutton').style.color='var(--button-deselected-font-color)';
        document.querySelector('#paintingsbutton').style.color=activeAccentColor;                      
  });

    /*adding effects to buttons within specific pages*/
    document.querySelector('#upcominglocationbutton').addEventListener("click", function(){
        console.log('upcominglocationbutton can feel.')     
        makeSelectedMajorDivVisible('upcominglocationdiv','.majordiv');    
        document.querySelector('#presentlocationbutton').style.color='var(--button-deselected-font-color)';
        document.querySelector('#upcominglocationbutton').style.color=activeAccentColor;
                      
      });
    
      document.querySelector('#presentlocationbutton').addEventListener("click", function(){
        console.log('presentlocationbutton can feel.')    
        makeSelectedMajorDivVisible('presentlocationdiv','.majordiv');    
        document.querySelector('#upcominglocationbutton').style.color="var(--button-deselected-font-color)";
        document.querySelector('#presentlocationbutton').style.color=activeAccentColor;                     
      });

   /*Please come back to and call this function when I want it :) */   

      function adjustheader(){
        var nav = document.querySelector('#navigation');
     
       if(event){            
          //For all but main page buttons... 
           if(event.target.id === "gallerybutton" 
            || event.target.id === "locationbutton" 
            || event.target.id === "contactbutton"){
                //if has class of 'longheader', replace with 'shortheader'
                        if(nav.classList.contains('longheader')){
                            document.querySelector('#summary').classList.remove('opacityone');
                            document.querySelector('#summary').classList.add('opacitynone');
                            document.querySelector('#postsummary').classList.remove('opacityone');
                            document.querySelector('#postsummary').classList.add('opacitynone');
                            document.querySelector('#postsummary').classList.add('opacitynone');
                            document.querySelector('#portfolioSiteSpan').classList.remove('opacityone');
                            document.querySelector('#portfolioSiteSpan').classList.add('opacitynone');
                            nav.classList.remove('longheader');
                            nav.classList.add('shortheader');
                             }
                                }
            //if the 'about me button was clicked...'                
            else if(event.target.id === "aboutmebutton"){
                            //and if #navigation has a class of 'shortheader', replace it with 'longheader'...
                            if(nav.classList.contains('shortheader')){
                                document.querySelector('#summary').classList.add('opacityone');
                                document.querySelector('#summary').classList.remove('opacitynone');
                                document.querySelector('#postsummary').classList.add('opacityone');
                                document.querySelector('#postsummary').classList.remove('opacitynone');
                                document.querySelector('#portfolioSiteSpan').classList.remove('opacitynone');
                                document.querySelector('#portfolioSiteSpan').classList.add('opacityone');
                                nav.classList.remove('shortheader');
                                nav.classList.add('longheader');
                              //  margin-top: 10vh;
                                //padding: 7vh;
                                 //height: 5vh;

                                 }
            }  
        } 
       
      }



//arrays that will create page;
 
    var arrayOfGraphicsParas=["g0",
  "g1",
  "g2",
  "g3",
  "g4", 
  "g5", 
  "g6", 
  "g7"];


  var arrayOfGraphicsTitleParas=[
    "Holly Jane",
  "Trip Western",
  "Lilly Van",
  "Beauty in Motion",
  "Sara Mae", 
  "Debbie Don't Even", 
 ];


  var arrayOfPaintingsParas=["The centerpiece of the Classic collection, Sanctuary is a true refuge of sight.  This piece was created with charcoal, pen, and colored pencil.",
  "Charcoal on canvas",
  "Charcoal on canvas",
  "Flapper from in the 1920s, Delilia, is a force to be reckoned with",
  "Charcoal on canvass", 
  "Mutli talented entrepeneur? Successful travelling circus manager?  Most wanted con artist?... You decide!", 
  "Charcoal on Canvas", 
  "Charcoal on Canvas",
  "Charcoal on Canvas",
  "Charcoal on Canvas",
  "Charcoal on Canvas", 

];

var arrayOfPaintingsTitleParas=["Sanctuary",
"Sassy Mary",
"Two Daisies",
"Delila",
"Depressed Beauty", 
"Jack of All Trades", 
"Depth of a Woman", 
"Null",
"Larry from a Faery",
"Star Gazer",
"Dance to the Woods", 

];

var arrayOfUpcomingLocationTitleParas=[""
];

var arrayOfPresentLocationTitleParas=[""
];

var arrayOfUpcomingLocationParas=[''];

var arrayOfPresentLocationParas=[''];

var arrayOfWebParas=[''];

function logToConsole(){
    console.log("event working on  " + this.target)
}

var theCurrentPopUpNum=null;
var theCurrentPopUpLetter=null;
var theCurrentNameOfArray = null;
var theCurrentNameOfTitleArray = null;


function rightArrow(){
deletePopup();
        theCurrentPopUpNum=JSON.parse(theCurrentPopUpNum);
        if(theCurrentPopUpNum<theCurrentNameOfArray.length){
            theCurrentPopUpNum+=1;}

        createPopup(theCurrentPopUpLetter, theCurrentPopUpNum, theCurrentNameOfArray, theCurrentNameOfTitleArray);
        console.log('Kritin, you are doing a great job, and this is looking like fantastic!  RIGHTARROW() IS WORKING. You rock! :)')
        }

function leftArrow(){
deletePopup();
theCurrentPopUpNum=JSON.parse(theCurrentPopUpNum);
if(theCurrentPopUpNum>0){
  theCurrentPopUpNum-=1;}
else{document.querySelector(`${theCurrentPopUpLetter}${theCurrentPopUpNum}popupy`).style.opacity=".3"}
    createPopup(theCurrentPopUpLetter, theCurrentPopUpNum, theCurrentNameOfArray, theCurrentNameOfTitleArray);
    console.log('Kritin, you are doing a great job, and this is looking like fantastic! LEFTARROW() IS WORKING You rock! :)')
}

function populateContactFormWithCurrentCounter(){
  console.log(toString(theCurrentPopUpLetter));
  var infoToInput = theCurrentNameOfTitleArray[theCurrentPopUpNum];
  var stringToInput = theCurrentPopUpLetter + theCurrentPopUpNum;
  document.querySelector('#boxtopopulate').value=infoToInput;
  
}





function createPopup(letter, num, nameOfArray, nameOfTitleArray){
        //create <div class = "popup" id="g8popup">   </div>
        
        var popUpDiv = document.createElement("div");
        popUpDiv.setAttribute('id',`${letter}${num}popup`);
        popUpDiv.classList.add('popup');
        popUpDiv.style.zIndex="11";
        var thebody = document.querySelector('body');
        thebody.appendChild(popUpDiv);
     
            //creating floating div with class of x
            var xDiv=document.createElement("div");
            xDiv.classList.add('x');
            xDiv.setAttribute('id', `${letter}${num}xdiv`);

             //create floating xA
             var xA = document.createElement('a');
             //adding id "g8popupx" to xA
             xA.setAttribute('id',`${letter}${num}popupx`)
             //gluing xA to floating xDiv
             xDiv.appendChild(xA);

            //glueing xDiv to thDiv
            popUpDiv.appendChild(xDiv);
            //creating floating xNode
            var xNode=document.createTextNode("X");
            //gluing floating Xnode to xA
            xA.appendChild(xNode);
         


      if(widthOfScreen>800){
          console.log(`Screen is greater than 800`)
        //putting this in here out of laziness.  please move to place that makes sense later
       // document.querySelectorAll('button').forEach(style.fontSize="var(--main-font-size-pt)");
        document.querySelector('#right-span').style.paddingLeft="2%";
  
             //creating floating div with class of w
             var wDiv=document.createElement("div");
            wDiv.classList.add('w');
            wDiv.setAttribute('id', `${letter}${num}wdiv`);

             //creating floating div with class of y
             var yDiv=document.createElement("div");
            yDiv.classList.add('y');
            yDiv.setAttribute('id', `yiv`);

            //create floating wA
            var wA = document.createElement('a');
            //adding id "g8popupw" to wA
            wA.setAttribute('id',`${letter}${num}popupw`)
            //gluing wA to floating xDiv
            wDiv.appendChild(wA);

             //create floating yA
             var yA = document.createElement('a');
            //adding id "g8popupy" to yA
            yA.setAttribute('id',`${letter}${num}popupy`)
            //gluing yA to floating yDiv
            yDiv.appendChild(yA);
            
            popUpDiv.appendChild(wDiv);
            //creating floating wNode
            var wNode=document.createTextNode(">");
            //gluing floating wnode to wA
            wA.appendChild(wNode);
            popUpDiv.style.zIndex="14";

            //glueing yDiv to thDiv
            popUpDiv.appendChild(yDiv);
            //creating floating xNode
            var yNode=document.createTextNode("<");
            //gluing floating Ynode to yA
            yA.appendChild(yNode);
            popUpDiv.style.zIndex="14";

            //create button
             //creating floating div with class of b
             var bDiv=document.createElement("button");
            bDiv.classList.add('b');
            bDiv.setAttribute('id', `${letter}${num}bdiv`);

            //glueing bDiv to thDiv
            popUpDiv.appendChild(bDiv);
            //creating floating bNode
            var bNode=document.createTextNode("Inquire about this piece");
            //gluing floating bnode to 
            bDiv.appendChild(bNode);
            popUpDiv.style.zIndex="14";
            console.log({yA})
            //addin functionality to b button
            bDiv.addEventListener('click', function(){
                currentSelectedNavButton.style.color='var(--button-deselected-font-color)';
                currentSelectedNavButton.style.backgroundImage='none';
                currentSelectedNavButton=document.querySelector('#contactbutton');
                currentActiveMajorDiv=document.querySelector('#contactdiv');
                //currentSelectedNavButton.style.backgroundImage="url('../resources.swirl.png')";
                makeSelectedMajorDivVisible('contactdiv', '.majordiv');
                makeSelectedMajorDivVisible('contactdivheader', 'majordivheaders');
//come back to- h3 on contact not working                
               //document.querySelector("#contactdivheader").classList
                document.querySelector('#photodiv').style.backgroundImage='url("../resources/contact1.png")';
                document.querySelector('#photodiv').style.backgroundSize='contain';
                document.querySelector('#photodiv').style.backgroundPosition='left';
                document.querySelector('#photodiv').style.marginTop='8vh';
                createPhotoDiv2("../resources/contact2.1.png", 'left');
                document.querySelector('#contactdiv').style.marginLeft='31vw';
                document.querySelector('#contactdiv').style.marginRight='5vw';
                document.querySelector('body').style.backgroundColor="white";
                document.querySelectorAll('h3').forEach(function(e){
                e.style.color=activeAccentColor;})
               // currentSelectedNavButton.style.color='var(--button-selcted-font-color)';
               // currentSelectedNavButton.style.backgroundImage='url("../resources/swirl.png")';
                
              //  document.querySelector('body').style.backgroundColor='white';
                
                populateContactFormWithCurrentCounter();
                createPhotoDiv2("../resources/contact2.1.png")
                popUpDiv.style.backgroundColor=activeAccentColor;
            })

            //creating p within popup and inside text node
            var deletableP = document.createElement('p');
            deletableP.setAttribute('id','deletablePElement');
            popUpDiv.appendChild(deletableP);
            var deletablePTextNode = document.createTextNode(`${nameOfArray[num]}`);
            deletableP.appendChild(deletablePTextNode);

            //adding title
            var titleOfPopUp = document.createElement('h3');
            deletableP.setAttribute('id','titleofpopup');
            popUpDiv.appendChild(titleOfPopUp);
            var titleOfPopUpTextNode = document.createTextNode(`${nameOfTitleArray[num]}`);
            titleOfPopUp.appendChild(titleOfPopUpTextNode);

            document.querySelector(`#${letter}${num}popupw`).addEventListener('click',function(){
              rightArrow();
                console.log("Kristin, good job.  You have come a long way.  A very long way and this is looking goood!")
            })

            document.querySelector(`#${letter}${num}popupy`).addEventListener('click',function(){
              leftArrow();  
              console.log("Kristin, good job.  You have come a long way.  A very long way and this is looking goood!")
            })
            document.querySelector(`#${letter}${num}bdiv`).addEventListener('click',function(){
              deletePopup();
              document.querySelector('#gallerydivheader').classList.add('displaynone');           
              if(!document.querySelector('#graphicsdiv').classList.contains('displaynone')){
                  document.querySelector('#graphicsdiv').classList.add('displaynone');
                  createPhotoDiv2("../resources/homepage2.png", 'right');
                  }
              else if(!document.querySelector('#paintingsdiv').classList.contains('displaynone')){
                  document.querySelector('#paintingsdiv').classList.add('displaynone'); 
                  createPhotoDiv2("../resources/homepage2.png", 'right');  
                  }
                  else if(!document.querySelector('#upcominglocationdiv').classList.contains('displaynone')){
                      document.querySelector('#upcominglocationdiv').classList.add('displaynone'); 
                      }
                  else if(!document.querySelector('#presentlocationdiv').classList.contains('displaynone')){
                          document.querySelector('#presentlocationdiv').classList.add('displaynone'); 
                          }
              makeSelectedMajorDivVisible('contactdiv', '.majordivheaders');
              document.querySelector('#contactbutton').style.color=activeAccentColor;
              console.log("Kristin, popupB, good job.  You have come a long way.  A very long way and this is looking goood!")
              theCurrentPopUpNum='All these pieces are interesting!';
              })

          }
            //adding a picture with class of 'popuppicture'
            var picturePath =`../resources/${letter}${num}.jpg`;
            var picWithinPopUpDiv = document.createElement("img");
           
            picWithinPopUpDiv.src=picturePath;
            popUpDiv.appendChild(picWithinPopUpDiv);
            picWithinPopUpDiv.style.position='relative';
            picWithinPopUpDiv.classList.add('.popuppic');
            picWithinPopUpDiv.style.left="5%";


          //adding initiation of curtain element
            var curtainElement = document.querySelector('#curtain');
            curtainElement.style.display="block";
            console.log(curtainElement.style.zIndex + " is the curtain's current zIndex");
           // curtain.style.zIndex="4";
         
        document.querySelector(`#${letter}${num}popupx`).addEventListener('click', deletePopup)   
        document.querySelector('#curtain').addEventListener('click', deletePopup)   

        theCurrentPopUpNum=num;
        theCurrentPopUpLetter=letter;
        //theCurrentNameOfArray=nameOfArray;

        console.log(`${popUpDiv.style.zIndex} is the popups zindex`);
  }

  function deletePopup(){
            var elem = document.querySelector(`${theCurrentPopUpLetter}${theCurrentPopUpNum}popup`);
                var targetID = this.id;
                var guessing = document.querySelector(`#${targetID}`);
                var currentbody = document.querySelector("body");
                //console.log(currentbody);

          var elem=document.querySelector(`#${theCurrentPopUpLetter}${theCurrentPopUpNum}popup`);
          if(document.querySelector(`#${theCurrentPopUpLetter}${theCurrentPopUpNum}popup`)){
              elem.remove();}        
          var curtainElement = document.querySelector('#curtain');
              curtainElement.style.display='none';
                curtainElement.classList.add("displaynone");
                console.log(curtainElement.style.zIndex + " is the z-index of the curtain element");
        }
   

//function that creates divs within majordiv
function createMajorDivImgs(aNum,aLetter,idSignAndDivToAppend){
    if(document.querySelector('#paintingsdiv')||document.querySelector('#graphicsdiv')){
      var pPic = document.createElement("img");
      pPic.setAttribute('id',`${aLetter}${aNum}`);
      pPic.src=`../resources/${aLetter}${aNum}.jpg`;
      pPic.classList.add('grayout');
      pPic.classList.add('picture');
      document.querySelector(idSignAndDivToAppend).appendChild(pPic);
      //creating titles for paras
        if(widthOfScreen<800){
            if(aLetter==='p'){
              var pTitle = document.createElement("h3");
              var titleName = arrayOfPaintingsTitleParas[aNum];
              pTitle.innerText=titleName;
              pTitle.setAttribute('id',`${aLetter}${aNum}paintingstitle`);
              pPic.classList.add('pTitle');
              pTitle.classList.add('displaynone');
              document.querySelector(idSignAndDivToAppend).appendChild(pTitle);
              
            }
         else if(aLetter==='g'){
              var pTitle = document.createElement("h3");
              var titleName = arrayOfGraphicsTitleParas[aNum];
              pTitle.innerText=titleName;
              pTitle.setAttribute('id',`${aLetter}${aNum}graphicstitle`);
              pPic.classList.add('pTitle');
              pTitle.classList.add('displaynone');
              document.querySelector(idSignAndDivToAppend).appendChild(pTitle);
              
            }
        

        }

}}

for(i=0; i<arrayOfGraphicsParas.length;i++){
createMajorDivImgs(i,'g','#graphicsdiv');

}

for(i=0; i<arrayOfPaintingsParas.length;i++){
createMajorDivImgs(i,'p','#paintingsdiv');
}



//creating a function that runs the calling of "createPopup" many times
for(let i=0; i<arrayOfGraphicsParas.length; i++){

document.querySelector(`#g${i}`).addEventListener('click',function(){
  if(widthOfScreen>800){
    createPopup('g',`${i}`, arrayOfGraphicsParas, arrayOfGraphicsTitleParas);
  console.log('largescreen')}
  else{
    if(activePicture){activePicture.style.transform="scale(1)";}
  activePicture=document.querySelector(`#g${i}`);
    if(activePictureTitle){
      activePictureTitle.classList.add('displaynone')}
      activePictureTitle = document.querySelector(`#g${i}graphicstitle`);
      activePictureTitle.classList.remove('displaynone');
      var currentParaTitle = arrayOfGraphicsTitleParas[i];
      console.log(currentParaTitle);
      activePicture.style.transform="scale(1.3)";
      console.log(activePicture + " is new activePicture")
    }
})
}

for(let i=0; i<arrayOfPaintingsParas.length; i++){
document.querySelector(`#p${i}`).addEventListener('click',function(){
  //createPopup('p',`${i}`, arrayOfPaintingsParas);

  if(widthOfScreen>800){
    createPopup('p',`${i}`, arrayOfPaintingsParas, arrayOfPaintingsTitleParas);
  console.log('largescreen')}
  else{
    if(activePicture){activePicture.style.transform="scale(1)";}
  activePicture=document.querySelector(`#p${i}`);
    if(activePictureTitle){
      activePictureTitle.classList.add('displaynone')}
      activePictureTitle = document.querySelector(`#p${i}paintingstitle`);
      activePictureTitle.classList.remove('displaynone');
      var currentParaTitle = arrayOfPaintingsTitleParas[i];
      console.log(currentParaTitle);
      activePicture.style.transform="scale(1.3)";
      console.log(activePicture + " is new activePicture")
    }
})
}


function roundFunction(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
 
console.log(currentActiveMajorDiv.id);

document.addEventListener('mouseover', printMousePos, true);
function printMousePos(e){

      cursorX = e.pageX;
      cursorY= e.pageY;
      var theNumeral = Math.round(cursorX)
      var smallNum = theNumeral*.00087;
      var smallRoundedNum = roundFunction((smallNum*4), 1);
      var amountToChangeEyeColor = 1-smallRoundedNum;
      var smallRoundedNumberString= toString(amountToChangeEyeColor);
      var slicedSmallRoundedNumberString= smallRoundedNumberString.substr(1);  

      var theNumeralY = Math.round(cursorY)
      var smallNumY = theNumeralY*.00087;
      var smallRoundedNumY = roundFunction((smallNumY*2), 1);
      var amountToChangeEyeColorY = 1-smallRoundedNumY;
      var smallRoundedNumberStringY= toString(amountToChangeEyeColorY);
      var slicedSmallRoundedNumberStringY= smallRoundedNumberStringY.substr(1);  
        
        if(currentSelectedNavButton.id==="contactbutton"){
            document.querySelector('#photodiv2').style.marginLeft=`${smallRoundedNum}px`;
      document.querySelector('#photodiv2').style.transform=`translateX:(${smallRoundedNum})`;
      document.querySelector('#photodiv2').style.filter=`saturate(${amountToChangeEyeColor})`;

      document.querySelector('#photodiv2').style.marginTop=`${smallRoundedNumY}px`;
      document.querySelector('#photodiv2').style.transform=`translateY:(${smallRoundedNumY})`;
      document.querySelector('#photodiv2').style.filter=`saturate(${amountToChangeEyeColorY})`;
      //I don't know why this is working, but keeping this here even though it makes no sense;
      activeAccentColor='var(--color-1)';
      makeSelectedMajorDivVisible('contactdivheader', '.majordivheaders');
     
      document.querySelector("#contactbutton").style.backgroundImage="url('../resources/swirl.png')";
      if(document.querySelector('h3')){document.querySelector('h3').style.color=activeAccentColor;}
      document.querySelector('#contactp').style.color=activeAccentColor;
      
        }
    else if(currentSelectedNavButton.id==="aboutmebutton"){
            
   
      document.querySelector('#photodiv2').style.filter=`saturate(${amountToChangeEyeColor})`;

     // document.querySelector('#photodiv2').style.filter=`saturate(${amountToChangeEyeColorY})`;
            //document.querySelector('#photodiv2').style.opacity=`.${amountToChangeEyeColorY}`;
            //document.querySelector('#photodiv2').style.transform=`scale(1.${amountToChangeEyeColorY})`;
            console.log(amountToChangeEyeColor);
        }     
}

      createPhotoDiv2("../resources/homepage2.png", 'right');

      console.log('end of page working')

//formatting for cell phone devices
function loadReady(){
    ifSmallScreen();
    document.querySelector('#gallerybutton').addEventListener('click', function(){
        document.querySelector('#photodiv').style.backgroundImage='url("../resources/swirl.png")';
      })
}

function ifSmallScreen(){
    widthOfScreen=window.innerWidth;
if(widthOfScreen<800){
 
 document.querySelector('body').style.contain="paint";
  if(document.querySelector('#postsummary')){document.querySelector('#postsummary').style.display='none';}
 //document.querySelector('header').style.width=`${widthOfScreen}px`;
 // document.querySelector('#navigation').style.width=`${widthOfScreen}px`;
  document.querySelector('#myname').style.position="relative";
  
  document.querySelector('#presummary').style.position="relative";
  document.querySelector('#presummary').style.marginLeft="30%";
  document.querySelector('#presummary').style.marginRight="30%";
 if(document.querySelector('.longheader')){ document.querySelector('.longheader').style.height="100%";}
  document.querySelector('#portfolio').style.marginLeft=`${0}px`;
 // document.querySelector('#contactdiv').style.position='absolute';
  document.querySelector('#contactdiv').style.left=`${0}px`;



  //document.querySelector('#contactdiv').style.overflowX='hidden';
  document.querySelector('#contactdiv').style.overflowY='visible';


  
  document.querySelector('header').style.position='relative';
  document.querySelectorAll('.picture').forEach(function(e){
    e.style.maxWidth=`${.8*widthOfScreen}px`;
  
  })
 // console.log(widthOfScreen + " small");
 // document.querySelectorAll('.popup').forEach(function(e){e.style.maxWidth=`${.8* widthOfScreen}px`});
  document.querySelectorAll('body').maxWidth=`${widthOfScreen}px`;

  //document.querySelectorAll('.popuppic').forEach(function(e){e.style.width=`${(.7*widthOfScreen)}px`});
  //document.querySelector("#contactdiv").innerHTML="Please contact Dylan directly, at 555-555-5555 for inquiries about these pieces."
  document.querySelector("#contactdiv").style.color=activeAccentColor;
  document.querySelector("#contactdiv").style.justifyContent="left";
  document.querySelector("#presentlocationdiv").innerHTML="Please contact Dylan directly, at 555-555-5555 for inquiries about these pieces."
  document.querySelector("#presentlocationdiv").style.color=activeAccentColor;
  document.querySelector("#presentlocationdiv").style.justifyContent="left";
  document.querySelectorAll('.navbuttons').forEach(function(e){
    e.marginLeft='0px';
    e.marginRight='0px';
    e.padding='0px';
    
  })
document.querySelector('#navigation').style.display="block";
document.querySelector('#myname').style.position="relative";
document.querySelector("#summary").style.opacity="0";
document.querySelector('body').style.fontSize='10pt';
if(document.querySelector("#photodiv")){
  document.querySelector("#curtain").style.display="block"; 
  document.querySelector("#curtain").style.position="fixed"; 
  document.querySelector("#curtain").style.zIndex="-1"; 
  //document.querySelector("#curtain").style.backgroundColor="orange"; 
document.querySelector("#photodiv").style.opacity=".3";}

document.querySelector('#aboutmebutton').style.display="none"; 
document.querySelector('#aboutmediv').style.display="none"; 
console.log('toosmall!')

//making gallery page show o site onload


//makeSelectedMajorDivVisible('paintingsdiv', '.majordiv');
   // makeSelectedMajorDivVisible('invisibledivheader', '.majordivheaders');
    createPhotoDiv("../resources/homepage1.png", 'fixed');
    document.querySelector('#photodiv2').style.backgroundImage='none';
    if(widthOfScreen>800){document.querySelector('#paintingsdiv').style.marginLeft='5vw';}
    if(widthOfScreen>800){document.querySelector('#paintingsdiv').style.marginRight='31vw';}
    //document.querySelector('#')
   

}}

window.onload=loadReady;
window.onresize=ifSmallScreen;


document.querySelector('#locationbutton').addEventListener('click', function(){
  document.querySelector("#upcominglocationdiv").innerHTML="Please call or text Dylan directly at 555-555-5555 to set up a tour of his studio."
})