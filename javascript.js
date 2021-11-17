const citations = ["mimi", 
                   "jqjhfsjhqjk",
                   "hhjfshjqshjk",
                   "usdyquui"];
const autors = ["mimi", 
                "noor", 
                "amenay", 
                "ceckkouka"];
const emoji = ['128540', '1F61C', '1F61C'];
let valueal = null;



document.getElementById("generate").addEventListener("click",function(){
    valueal = Math.floor(Math.random() * citations.length);
    document.getElementById('blockquote').innerHTML = citations[valueal];
    document.getElementById('aut').innerHTML = autors[valueal];
    
});



