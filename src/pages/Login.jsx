import { useState } from "react";
import style from "../styles/Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    login__correo: "",
    login__pass: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    console.log({ name, value });
    setUserData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      })

  };
  return (
    <section className="bodylogin">
      <header id="cabeza">
        <h1 id="cabeza__titulo"></h1>
      </header>
      <form className="login" onSubmit={(e) => handleSubmit(e)}>
        <section id="">
          <h1 className="login__title">Login</h1>
        </section>
        <section className="containerInput">
          <input
            type="email"
            name="login__correo"
            id="login__correo"
            className="login__input"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="login_correo" className="login_label">
            Correo
          </label>
        </section>

        <section className="containerInput">
          <input
            type="password"
            name="login__pass"
            id="login__pass"
            className="login__input"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="login_pass" className="login_label">
            Contraseña
          </label>
        </section>

        <section>
          <button
            type="submit"
            name=""
            id="login__enviar"
            className="login__input"
          >
            Subir
          </button>
        </section>
      </form>
    </section>
  );
};
export default Login;