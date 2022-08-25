import React from "react";

function Loginpage() {
  return (
    <div>
      <h1>hello</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <button type="submit"> Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
