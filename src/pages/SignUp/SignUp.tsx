import { FC, HTMLInputTypeAttribute, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import googleIcon from "../../assets/google_icon.svg";
import { useAppSelector } from "../../Store/hooks";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";

const SignUp: FC = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || 1;
  const isMobile = useAppSelector((state) => state.nav.isMobile);
  

  const [submit, setSubmit] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    house: "",
    village: "",
    landmark: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [checkForm, setCheckForm] = useState<any>({
    name: "",
    phone: "",
    house: "",
    village: "",
    landmark: "",
    city: "",
    state: "",
    pincode: ""
  });

  const validateForm: any = {
    name: {
      required: true,
      validation: [(value:string)=>value.length > 2],
      invalidMessage: "Please provide valid name."
    },
    phone: {
      required: true,
      validation: [(value:string)=>value.length === 10],
      invalidMessage: "Please provide valid 10 digit phone number."
    },
    house: {
      required: true,
      validation: [(value:string)=>value.length > 2],
      invalidMessage: "invalid Entry"
    },
    village: {
      validation: [(value:string)=>value.length > 2],
      invalidMessage: "invalid Entry"
    },
    landmark: {
      required: true,
      validation: [(value:string)=>value.length > 5],
      invalidMessage: "invalid Entry"
    },
    city: {
      required: true,
      validation: [(value:string)=>value.length > 4],
      invalidMessage: "invalid Entry"
    },
    state: {
      validation: [(value:string)=>value.length > 2],
      invalidMessage: "invalid Entry"
    },
    pincode: {
      required: true,
      validation: [(value:string)=>value.length === 6],
      invalidMessage: "Please provide valid 6 digit pincode."
    }
  }

  const checkSubmitable = () => {
    let formValid:boolean = true;
    for (const item of Object.keys(validateForm)){
      if (validateForm[item].required) {
        const isValid = checkForm[item] === "valid"
        console.log(isValid)
        if(!isValid) {
          formValid = false;
          break;
        }
      }
    };
    setSubmit(formValid)
  }

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    if ("phone pincode".includes(name)) {
      value = value.replace(/[^\d]/, "");
    }
    await setForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleBlur = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    await validation(name, value);
  };

  const validation = async (name:string, value:string) => {
    const validationReq = validateForm[name].required;
    if (validationReq) {
      const isInValid = validateForm[name].validation.find((fn:any)=>fn(value)===false)
      await setCheckForm((prevProps:any) => ({
        ...prevProps,
        [name]: isInValid ? "invalid" : "valid",
      }));
    } else {
      const isInValid = validateForm[name].validation.find((fn:any)=>fn(value)===false)
      await setForm((prevProps) => ({
        ...prevProps,
        [name]: isInValid ? "" : value,
      }));
    }
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    Object.entries(form).forEach(item=> validation(...item))
    event.preventDefault();
    console.log(Object.entries(form));
  };

  const styles = stylex.create({
    loginOuterDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "70vh",
      margin: "30px 0",
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      padding: "40px 20px",
      flexDirection: "column",
      // background: "rgba(0, 0, 0, .03)",
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
      width: "70%",
    },
    formControl: {
      display: "flex",
      paddingTop: "16px",
      flexDirection: "column",
    },
    formlabel: {
      color: "grey"
    },
    formInvalidMessage: {
      color: "#F08080",
      fontSize: "12px",
      marginTop: "3px"
    },
    formInput: {
      width: "90%",
      height: "35px",
      marginTop: "8px",
      background: "rgba(0, 0, 0, .03)",
      "border-radius": "5px",
      border: "none",
      "-webkit-transition-property": "background, box-shadow",
      "-webkit-transition-duration": "400ms, 400ms ",
      ":focus": {
        "box-shadow": "0px 0px 1px 1px grey",
        background: "rgba(0, 0, 0, 0.1)",
        outline: "none"
      }
    },
    submitButton: {
      "pointer-events": !submit ? "none" : "true",
    }
  });

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
              <div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>Name{validateForm.name.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.name === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.name.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="name"
                    value={form.name}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>Phone (+91){validateForm.phone.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.phone === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.phone.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="phone"
                    value={form.phone}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>House, Building, Company{validateForm.house.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.house === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.house.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="house"
                    value={form.house}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>Area, Street, Village{validateForm.village.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.village === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.village.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="village"
                    value={form.village}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>Landmark{validateForm.landmark.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.landmark === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.landmark.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="landmark"
                    value={form.landmark}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>City{validateForm.city.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.city === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.city.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="city"
                    value={form.city}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>State{validateForm.state.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.state === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.state.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="state"
                    value={form.state}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                  <label {...stylex.props(styles.formlabel)}>Pincode{validateForm.pincode.required && <span style={{color:'#F08080'}}>*</span>}</label>
                  {checkForm.pincode === "invalid" && <p {...stylex.props(styles.formInvalidMessage)}>{validateForm.pincode.invalidMessage}</p>}
                  <input
                    {...stylex.props(styles.formInput)}
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <div {...stylex.props(styles.formControl)}>
                <div {...stylex.props(styles.submitButton)} onClick={handleSubmit}>
                  <Button content="Login" color={!submit? "grey": ""} />
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
