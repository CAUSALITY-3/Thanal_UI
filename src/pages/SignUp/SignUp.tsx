import { FC, HTMLInputTypeAttribute, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import googleIcon from "../../assets/google_icon.svg";
import { useAppSelector } from "../../Store/hooks";
import { useSearchParams } from "react-router-dom";

const SignUp: FC = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || 1;
  const isMobile = useAppSelector((state) => state.nav.isMobile);
  const styles = stylex.create({
    loginOuterDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "70vh",
      margin: "30px 0"
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      padding: "40px 20px",
      flexDirection: "column",
      background: "rgba(0, 0, 0, .03)",
      justifyContent: "center",
      width: "100%",
      maxWidth: "500px",
      minHeight: "40vh",
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
      marginRight: "20px",
    },
    loginWithhGooleIcon: {
      width: "18px",
      height: "18px",
    },
    formContainer: {
        width: "70%"
    },
    formControl: {
        display: "flex",
        paddingTop: "16px",
        flexDirection: "column"
    },
    formInput: {
        width: "90%",
        height: "35px",
        marginTop: "8px",
    "box-sizing": "border-box",
    "border-radius": "5px"
      },
  });

    const [state, setState] = useState({
      email: "",
      password: ""
    });
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setState((prevProps) => ({
        ...prevProps,
        [name]: value
      }));
    };
  
    const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      console.log(state, step);
    };

  return (
    <>
      <div {...stylex.props(styles.loginOuterDiv)}>
        <div {...stylex.props(styles.loginContainer)}>
          <div {...stylex.props(styles.steps)}>Step {step} of 2</div>
          {step == 1 ? (
            <div {...stylex.props(styles.loginWithhGooleButton)}>
              <div {...stylex.props(styles.loginWithhGooleText)}>
                Sign Up with Google
              </div>
              <img
                {...stylex.props(styles.loginWithhGooleIcon)}
                src={googleIcon}
                alt=""
              />
            </div>
          ) : (
            <div {...stylex.props(styles.formContainer)}>
              <form onSubmit={handleSubmit}>
                <div {...stylex.props(styles.formControl)}>
                  <label>Name</label>
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label>Phone</label>
                  <input
                  {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label>House, Building, Company</label>
                  <input
                  {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label>Area, Street, Village</label>
                  <input
                  {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label>Landmark</label>
                  <input
                  {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label>City</label>
                  <input
                  {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label>State</label>
                  <input
                  {...stylex.props(styles.formInput)}
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label></label>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
