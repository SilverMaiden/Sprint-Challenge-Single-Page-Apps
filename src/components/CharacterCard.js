import React from "react";
import { Card } from "rendition";

export default function CharacterCard(props) {
  return(
         <span>
             <Card className="card-width">
                <p> {props.character.name} </p>
                <p> {props.character.species} </p>
                <p> {props.character.status} </p>
                <br/>
            </Card>
         </span>
        )
}
