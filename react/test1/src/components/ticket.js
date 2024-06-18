import "./ticket.css";
import Button from "./button";

function Ticket(props) {
    return(
        <div className="ticket">
            <p>Hello, {props.name}</p>
            <p>Your ticket for concert {props.concertName}</p>
            <p>Time for entry{props.time}</p>
            <Button action ="delete" text={`Do you want to delete your ticket for:${props.concertName}`} label="Delete this ticket" class="verde"></Button>
            <Button action="save" text={`Do you want to save your ticket for:${props.concertName}`} label="Save this ticket" class="red"></Button>
            <Button action="favorite" text={`Do you want to add to favorite your ticket for:${props.concertName}`} label="Add to favorite" class="yellow"></Button>

        </div>
    )
}

export default Ticket;