let navbar = document.getElementById("navbar");
nav_list = ["navtab_left_placeholder","home","news","archives","calendar",  "pertinent_links","navtab_right_placeholder"];
nav_name = ["Home","News","Archives","Calendar",  "Pertinent Links",]
nav_html = ["index.html","news.html","archives.html","calendar.html",  "pertinent_links.html"]
curr_idx = parseInt(navbar.getAttribute("current")) + 1;


for (i=0; i<nav_list.length;i++){
    navtab = document.createElement("div");
    navtab.id = nav_list[i];
    navtab.className = "navtab";


    //not placeholder
    if (i!=0 && i!=nav_list.length-1) {
        if (i==1) {
            logo = document.createElement("img");
            if (i == curr_idx){
                logo.src = "https://catch2t27.com/images/CATCH2T27_navbar_hover.png"
            } else {
                logo.src = "https://catch2t27.com/images/CATCH2T27_navbar.png"
                logo.addEventListener("mouseenter", event =>{ 
                    logo.src = "https://catch2t27.com/images/CATCH2T27_navbar_hover.png";
                });
                
                logo.addEventListener("mouseleave", event =>{ 
                    logo.src = "https://catch2t27.com/images/CATCH2T27_navbar.png"
                });
            }
            
            

            navtab.appendChild(logo);
        } else {
            let
            name = document.createElement("span");
            name.textContent = nav_name[i-1]; 
            navtab.appendChild(name);
        }
        let filename = nav_html[i-1];
        navtab.addEventListener("click", event =>{ 
            window.location.href = ("https://catch2t27.com/"+filename);
        });
    }
    
    switch(i){
        case curr_idx-1:
            left_curve = document.createElement("img");
            left_curve.id = "navtab_left";
            left_curve.src = "https://catch2t27.com/images/navtab_left.png";
            navtab.appendChild(left_curve);
            break;
        case curr_idx:
            navtab.className += " navtab_current";
            break;
        case curr_idx+1:
            right_curve = document.createElement("img");
            right_curve.id = "navtab_right";
            right_curve.src = "https://catch2t27.com/images/navtab_right.png";
            navtab.appendChild(right_curve);
            break;
        default:
            break;
    }

    navbar.appendChild(navtab);
}

