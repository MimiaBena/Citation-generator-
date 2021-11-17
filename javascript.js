const citations = ["If you want something done right, do it yourself.",
                   "Get up, stand up! Don't give up the fight!",
                   "usdyquui"];
const autors = ["Charles-Guillaume Étienne", 
                "Bob Marley", 
                "amenay"];
const emojis = [0x1F5FA, 0x23F0, 0x1F579];
      //['\u{128540}','\u{1F984}', '\u{1F61C}','\u{1F61C}'];
let valueal = null;



document.getElementById("generate").addEventListener("click",function(){
    valueal = Math.floor(Math.random() * citations.length);
     document.getElementById('emoj').innerHTML = String.fromCodePoint(emojis[valueal]);
    document.getElementById('blockquote').innerHTML = citations[valueal];
    document.getElementById('aut').innerHTML = autors[valueal];
   
    
});



