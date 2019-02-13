import React from 'react'
import Ticket from './Ticket'

let masterTicketList = [
  {
    location: '3A',
    names: 'Thato and Haley',
    issue: 'Firebase will not save record!' 
  },
  {
    location: '4B',
    names: 'Gulzat and Jibek',
    issue: 'Computer does not boot!'

  },
  {
    location: '9F',
    names: 'Sleater and Kinney',
    issue: 'Fox image not displaying on page, can only see duck?'

  }
]

function TicketList() {
  return (
    <div>
      <hr/>
      {
        masterTicketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue} 
            key={index} />
       
        )}
    </div>
  )
}

export default TicketList