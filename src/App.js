import React from "react";
import Entry from "./componenets/Entry";
import emojipedia from "./componenets/emojipedia";

function createEntry(emojiTerm){
    return(
        <Entry 
        id={emojiTerm.id}
        emoji={emojiTerm.emoji}
        emojiName={emojiTerm.emojiName}
        description={emojiTerm.description}
         />
    );
}

function app(){
    return (
    <div>
        <h1>
           <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
           {emojipedia.map(createEntry)}
        </dl>
      
    </div>
    
    );
}


export default app;