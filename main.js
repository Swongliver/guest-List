var list=[];
var namesWithoutComma=[];
var displayStudents=[];
var names="";
function submit1(){
    
    
   
    names=document.getElementById("name_of_the_student_1").value;
    list.push(names);  
    list.sort();
    
    
        displayStudents.push("<h4>" + names + "</h4>");
        namesWithoutComma.push("<h4>" + names + "</h4>");
    
    document.getElementById("list").innerHTML=displayStudents.join(" ");
    console.log(displayStudents)
   
    
}
function sorting(){
    namesWithoutComma.sort();
    
    
       
                 
     document.getElementById("sortList").innerHTML=namesWithoutComma.join(" ");   
}
function show1(){
   
         
       
                 
     document.getElementById("showList").innerHTML=namesWithoutComma.join(" ");
     document.getElementById("sort_button").style.display="inline";
}
function search()
{

        var s= document.getElementById("search1").value;
        var found=0;
        var j;
        for( j=0; j<namesWithoutComma.length; j++)
     {
         if(s==namesWithoutComma[j]){
            found=found+1;
         }
     }
     document.getElementById("search_result").innerHTML="name found "+found+" time/s";
      console.log("found name" +found+" time/s")
}