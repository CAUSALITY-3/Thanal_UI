import { FC, useState } from "react";
import "./Login.scss";
import * as stylex from "@stylexjs/stylex";
import googleIcon from "../../assets/google_icon.svg";
import { useAppSelector } from "../../Store/hooks";
import { Input } from "../../components/Input/Input";

const Login: FC = () => {
  const isMobile = useAppSelector((state) => state.nav.isMobile);
  const styles = stylex.create({
    loginOuterDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "70vh"
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
      flexDirection: "column",
      background: "rgba(0, 0, 0, .03)",
      justifyContent: "center",
      width: "100%",
      maxWidth: "500px",
      height: "60%"
    },
    steps: {
      color: "grey",
      marginBottom: "25px",
    },
    loginWithhGooleButton: {
      display: "flex",
      padding: "5px 10px",
      background: "rgba(0, 0, 0, .05)",
      borderRadius: "3px",
      ":hover": {
        cursor: "pointer",
        background: "rgba(0, 0, 0, .1)",
      },
    },
    loginWithhGooleText: {
      marginRight: "20px"

    },
    loginWithhGooleIcon: {
      width: "18px",
      height: "18px",
    },
  });

  return (
    <>
      <div {...stylex.props(styles.loginOuterDiv)}>
        <div {...stylex.props(styles.loginContainer)}>
          <div {...stylex.props(styles.loginWithhGooleButton)}>
            <div {...stylex.props(styles.loginWithhGooleText)}>
              Login/SingnUp with Google
            </div>
            <img
              {...stylex.props(styles.loginWithhGooleIcon)}
              src={googleIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
