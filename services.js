// Custom JS code for the Futurall Services page 

document.addEventListener("DOMContentLoaded", function () {

    //**** Variables ****//
    const sections = this.getElementsByClassName("services-section");
    var currentSection = 0; //keeps track of which section the user is in
    var currentID = "foresight";
    //console.log("current section: "+sections[currentSection].id);
    scrollDown = true;
    start = true;

    //**** Functions ****//

    function changeColor(color){
        //Shoould change menu and sticky menu to white 
        if(color=='white'){
            document.getElementById('sidebar-sticky-menu').classList.add('white');
            document.getElementById('navbar').classList.add('white');
        }
        else{
            document.getElementById('sidebar-sticky-menu').classList.remove('white');
            document.getElementById('navbar').classList.remove('white');
        }
    }

    function updateStickyMenu(){

        var newID;

        if(currentSection<2){
            newID = 'foresight';
        }
        else if(currentSection<4){
            newID = 'people';
        }
        else if(currentSection<6){
            newID = 'creative';
        }
        else if(currentSection<8){
            newID = 'activations';
        }

        if(newID!==currentID||start){
            
            var oldListItem = document.getElementById(currentID+'-link');
            var newListItem = document.getElementById(newID+'-link'); 

            oldListItem.classList.remove("active");
            newListItem.classList.add("active");

            if(newID=="creative"){
                changeColor('black');
            }
            else{
                changeColor('white');
            }

            currentID = newID; 
            if(start){
                start = false;
            }
        }

    }

    function intersectionObserved(entries){
        
        const [entry] = entries;
        if(entry.isIntersecting){
            //console.log (entry.target.id + " is in view");
        }

        //Update to next section when last one left the scren
        if(scrollDown){
            if(entry.target==sections[currentSection]){
                if(!entry.isIntersecting&&currentSection<7){
                    currentSection ++;
                    updateStickyMenu();
                    //console.log("current section: "+sections[currentSection].id);
                }
            }
        }
        else{
            //if previous section enters view then swtich to it 

            //check if is intersectin and if prevoous section
            if(entry.isIntersecting){
                if(entry.target=sections[currentSection-1]){
                    currentSection --;
                    updateStickyMenu();
                    //console.log("current section: "+sections[currentSection].id);
                }
            }


        }

    }


    //**** Event listeners ****//
    const options = {
        root: null,
        threshold: 0,
        rootMargin: "-200px",
    };

    for(let i= 0; i <sections.length; i++){
        new IntersectionObserver(intersectionObserved,options).observe(sections[i]);
    }

    // Add event listener for if a new section gets scrolled into view
    // create Intersection Observer explanation: https://hackernoon.com/a-beginners-guide-to-javascripts-the-intersection-observer-api-j8s32rb

    //detect scroll direction
    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        scrollDown = !(this.oldScroll > this.scrollY);
        this.oldScroll = this.scrollY;
    }

    //on load
    updateStickyMenu();


    addEventListener("load", (event) => {
        updateStickyMenu();
    });


    //on menu link click 
    var links = document.getElementsByClassName('sticky-sidebar-link');
    
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click",updateStickyMenu());
    }

});
