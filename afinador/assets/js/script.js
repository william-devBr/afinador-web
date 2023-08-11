
const notes = document.querySelectorAll(".notes");

notes.forEach(element => element.addEventListener("click",()=> handleClick(element)));

   
const handleClick = (elem)=> {
    
    let note = elem.getAttribute("data-note");
    let audio = new Audio(`assets/audios/${note}.wav`);
        audio.play();
}

const mapKeyDown = {
       "c" : ()=>  handleKeyDown(notes[0]),
       "v" : ()=>  handleKeyDown(notes[1]),
       "d" : ()=>  handleKeyDown(notes[2]),
       "s" : ()=>  handleKeyDown(notes[3]),
       "e" : ()=>  handleKeyDown(notes[4]),
       "f" : ()=>  handleKeyDown(notes[5]),
       "t" : ()=>  handleKeyDown(notes[6]),
       "g" : ()=>  handleKeyDown(notes[7]),
       "h" : ()=>  handleKeyDown(notes[8]),
       "a" : ()=>  handleKeyDown(notes[9]),
       "z" : ()=>  handleKeyDown(notes[10]),
       "b" : ()=>  handleKeyDown(notes[11]),
       "x" : ()=>  handleKeyDown(notes[12])
}

const handleKeyDown = (key)=> {
       handleClick(key);
}

document.addEventListener("keydown",(evt)=>{
          evt.preventDefault();
           mapKeyDown[evt.key]();
}
)