import React, { useState } from 'react';

function RSVPButton() {
  const [rsvp, setRsvp] = useState(false);

  return (
    <button>
      RSVP
    </button>
  );
}

export default RSVPButton;
