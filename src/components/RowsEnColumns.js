import React from 'react';

function RowsEnColumns({
  firstName,
  lastName,
  email,
  phone,
  location,
  image
}) {

  return (
    <div>
      <tr>
        <td>
          <img alt="" src={image} />
        </td>
        <td>
          <h2>{firstName}</h2>
        </td>
        <td>
          <h2>{lastName}</h2>
        </td>
        <td>
          <h5>{email}</h5>
          <h5>{phone}</h5>
          <h5>{location}</h5>
        </td>
      </tr>
    </div>
  );
}
export default RowsEnColumns;
