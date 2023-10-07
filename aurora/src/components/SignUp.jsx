import React from "react"

const SignUp = () => {
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              required 
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
    );    
}

export default SignUp;