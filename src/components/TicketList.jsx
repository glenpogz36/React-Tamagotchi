import React from "react";
import Ticket from "./Ticket";

function TicketList() {
    return (
        <div>
            <Ticket
                location="3A"
                names="Thato and Haley"
                issue="Firebase will not save record!" />
            <Ticket
                location="4B"
                names="Gulzat and Jibek"
                issue="Computer does not boot!" />
        </div>
    );
}

export default TicketList;