
   
   export const Registration =()=>{

   

        return (
         
     <div class="form_continer">
        <form action="../../postForm" method="post" >
         <div className="app">
            <label className="naveed" htmlFor="firstName">First Name</label>
            <input className="text"  type="text" autoComplete ="off" placeholder="Full Name" id="firstname" name =  "firstName =" size  required/>
            <br></br>   <br></br>
            <label className="naveed" htmlFor="lastName">Last Name</label>
             <input className="text" type="text" auto autoComplete="off"
               placeholder="Last Name" id="lastname" name="lastName" required/>
             <br></br>   <br></br>
              <label className="naveed"  htmlFor="email">Email</label>
              <input className="text" type="emal"  auto autoComplete="off"placeholder="someone@example.com" id="email" name="email" required/>
              <br></br>   <br></br>
              <label className="naveed"  htmlFor="pnumber">Phone Number</label>
              <input className="text"  type="number" auto autoComplete="off" placeholder="999-999-9999" id="pnumber" name="pnumber" required/>
             <br></br>   <br></br>
            <label className="naveed"   htmlFor="dob">Date of Birth</label>
            <input className="text" type="date" auto autoComplete="off" placeholder="dd/mm/yyyy" id="dob" name="dob" required/> 
            <br></br>   <br></br>
            <button className="button" type="submit">submit </button>
            </div>
        </form>
        </div>
 );
};