let agr = 18;
if (agr >= 18) {
    console.log("You are adult");
} else {
    console.log("You are not adult");
}


let isLoggedIn = true;
let userRole = "editor";
if(isLoggedIn)
{
    if(userRole === "admin") {
        console.log("Admin can do all the things");
    }
    else if(userRole === "editor"){
        console.log("Editor can edit content");
    }else if(userRole === "viewer"){
        console.log("Viewer can view content");
    }else{
        console.log("No idea you may be a guest role");
     }   
}
else{
    console.log("you are not logged in");
}

