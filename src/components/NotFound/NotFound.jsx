import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import Btn from "../Btn/Btn";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="not">
      <h1 className="not__title">Error Code: 404</h1>
      <h2 className="not__subtitle">Page not found</h2>
      <p className="not__description">
        Oops! It looks like the page you're looking for doesn't exist :(
      </p>
      <Btn
        follow={0.3}
        className={"not__btn"}
        handleClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </Btn>
    </main>
  );
}

export default NotFound;
