
function Rows({ firstName, lastName, email, phone, location, image }) {
  return (
    <>
      <tr>
        <td>
          <img alt={firstName} src={image} />
        </td>
        <td>
          <h4>{firstName}</h4>
        </td>
        <td>
          <h4>{lastName}</h4>
        </td>
        <td>
          <h6>{email}</h6>
        </td>
        <td>
          <h6>{phone}</h6>
        </td>
        <td>
          <h6>{location}</h6>
        </td>
      </tr>
    </>
  );
}
export default Rows;
