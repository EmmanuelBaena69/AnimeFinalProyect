import style from "../styles/Login.css";

const Login = () => {

  return (
    <>
      <section className="bodylogin">
        <header id="cabeza">
          <h1 id="cabeza__titulo"></h1>
        </header>

        <form  className="login">
          <section id="">
            <h1 className="login__title">Login</h1>
          </section>
          <section className="containerInput">
            <input
              type="email"
              name="login__correo"
              id="login__correo"
              className="login__input"
            />
            <label htmlFor="login__correo" className="login__label">
              Correo
            </label>
          </section>

          <section className="containerInput">
            <input
              type="password"
              name="login__pass"
              id="login__pass"
              className="login__input"
            />
            <label htmlFor="login__pass" className="login__label">
              contraseña
            </label>
          </section>

          <section>
            <input
              type="submit"
              value="subir"
              name=""
              id="login__enviar"
              className="login__input"
            ></input>
          </section>
        </form>
      </section>
    </>
  );
};
export default Login;
