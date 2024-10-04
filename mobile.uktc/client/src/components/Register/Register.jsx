import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm.tsx";
export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    },
    onRegisterSubmit
  );
  return (
    <section id="register-page" className="content auth">
      <form id="register" method="POST" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <img src="/src/assets/logo.png" className="login-logo" alt="logo" />
          <h1>Register</h1>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username..."
            value={values.username}
            onChange={changeHandler}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Enter your pass..."
            value={values.password}
            onChange={changeHandler}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPass"
            id="confirm-password"
            placeholder="Confirm password"
            value={values.confirmPass}
            onChange={changeHandler}
          />

          <input className="btn submit" type="submit" value="Register" />

          <div class="registration-redirect">
            Already register ?
            <Link to="/login">
              <span> Login here</span>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};
