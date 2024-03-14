/* $("h1").addClass("big-title margin-50");
$("button")

//Just as you can add a class, so can you remove a class
//$("h1").removeClass("big-title"); //This would remove the class of big title, which would essentially remove all of the CSS that 
$("h1").hasClass("margin-50"); //This will output a boolean of true in the console bc my h1 element does, in fact, have a class of margin-50

$("h1").text("Bye");
//$("button").text("select me for a surprise");
$("button").html("<em>Hello</em>"); //Takes HTML into consideration as opposed to the .text method which interprets everything inside the quotation marks */

$("a").attr("href","https://www.netflix.com"); //without this line of code, clicking on "Search" would take me to Google.com bc that's what i put in my HTML

$("h1").attr("class"); // This owuld give me an output of "big-title margin-50" (if I uncomment the classes)