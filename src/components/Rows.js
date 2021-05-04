import React from 'react';

function Rows({
  firstName,
  lastName,
  email,
  h4hone,
  location,
  image,
}) {
  return (
    <tr>
      <td>
        <img alt="" src={image} />
      </td>
      <td>
        <h4>{firstName}</h4>
      </td>
      <td>
        <h4>{lastName}</h4>
      </td>
      <td>
      <h6>{email}</h6>
      <h6>{h4hone}</h6>
      <h6>{location}</h6>
      </td>
    </tr>
  );
}
export default Rows;
