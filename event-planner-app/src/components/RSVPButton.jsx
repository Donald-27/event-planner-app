import React, { useState } from 'react';

function RSVPButton() {
  const [rsvp, setRsvp] = useState(false);

  return (
    <button onClick={() => setRsvp(!rsvp)}>
      RSVP
    </button>
  );
}

export default RSVPButton;
