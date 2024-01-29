import { FC } from "react";
import "./Login.scss";
import * as stylex from "@stylexjs/stylex";
import { Button } from "../../components/Buttons/Button";
import { useAppSelector } from "../../Store/hooks";

const Login: FC = () => {
  const isMobile = useAppSelector((state) => state.nav.isMobile);
  const styles = stylex.create({
    loginOuterDiv: {
        display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    loginContainer: {
      display: "flex",
    //   alignItems: "center",
    padding: "10px 20px",
      flexDirection: "column",
      background: "rgba(0, 0, 0, .03)",
      width: "100%",
      maxWidth: "500px",
    },
    steps: {
        color: "grey",
        marginBottom: "25px"
    }
  });

  return (
    <>
      <div {...stylex.props(styles.loginOuterDiv)}>
        <div {...stylex.props(styles.loginContainer)}>
          <div {...stylex.props(styles.steps)}>Step 1 of 2</div>
          
          </div>
        </div>
    </>
  );
};

export default Login;
