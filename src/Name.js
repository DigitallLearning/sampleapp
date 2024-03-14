const Name=(prop)=> {
    const {fname,lname,add}=prop;
  return (
    <div>
      <h1>First Name : {fname}</h1>
      <h1>Last Name : {lname}</h1>
      <h1>Address : {add}</h1>
    </div>
  );
}
export default Name;

 