import React from "react";


function Entry(props){
    return (
     <div className="term">
     <dt>
        <span className="emoji" role="img" arial-label="Tense Biceps">
              {props.emoji}
        </span>
        <span> {props.emojiName} </span>
     </dt>
     <dd>
          {props.description}
    </dd>
    </div>
    );
}

export default Entry;