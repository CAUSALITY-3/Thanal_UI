import { FC, HTMLInputTypeAttribute, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import googleIcon from "../../assets/google_icon.svg";
import { useAppSelector } from "../../Store/hooks";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import { Input } from "../../components/Input/Input";

const SignUp: FC = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || 1;
  const isMobile = useAppSelector((state) => state.nav.isMobile);

  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: {
      required: true,
      label: "Name",
      key: "name",
      value: "",
      type: "input",
      invalid: false,
      validation: [(value: string) => value.length > 2 && value.length < 20],
      message: "Please provide valid name.",
    },
    phone: {
      label: "Phone (+91)",
      key: "phone",
      value: "",
      type: "input",
      required: true,
      invalid: false,
      validation: [(value: string) => value.length === 10],
      message: "Please provide valid 10 digit phone number.",
    },
    house: {
      required: true,
      label: "House, Building, Company",
      key: "house",
      value: "",
      type: "input",
      invalid: false,
      validation: [(value: string) => value.length > 2 && value.length < 30],
      message: "Invalid Entry",
    },
    landmark: {
      type: "input",
      label: "Landmark",
      key: "landmark",
      value: "",
      required: true,
      invalid: false,
      validation: [(value: string) => value.length > 2 && value.length < 30],
      message: "Invalid Entry",
    },
    city: {
      type: "dropDown",
      dropDownValues: [
        "Adoor",
        "Alappuzha (Alleppey)",
        "Aluva",
        "Angamaly",
        "Attingal",
        "Calicut (Kozhikode)",
        "Changanassery",
        "Chavakkad",
        "Chengannur",
        "Cherthala",
        "Cherthala",
        "Cheruthuruthi",
        "Chittur-Thathamangalam",
        "Ernakulam",
        "Guruvayoor",
        "Idukki",
        "Irinjalakuda",
        "Kanhangad",
        "Kannur",
        "Kasaragod",
        "Kayamkulam",
        "Kochi (Cochin)",
        "Kollam (Quilon)",
        "Koothuparamba",
        "Kottarakkara",
        "Kottayam",
        "Kozhikode (Calicut)",
        "Kunnamkulam",
        "Kuthuparamba",
        "Malappuram",
        "Mananthavady",
        "Manjeri",
        "Mannarkkad",
        "Mattanur",
        "Mavelikara",
        "Muvattupuzha",
        "Nedumangad",
        "Nedumbassery",
        "Neyyattinkara",
        "Nilambur",
        "North Paravur",
        "Ottappalam",
        "Palakkad (Palghat)",
        "Pandalam",
        "Pathanamthitta",
        "Payyannur",
        "Perinthalmanna",
        "Perumbavoor",
        "Ponnani",
        "Punalur",
        "Shoranur",
        "Taliparamba",
        "Thalassery",
        "Thiruvalla",
        "Thiruvananthapuram (Trivandrum)",
        "Thiruvankulam",
        "Thodupuzha",
        "Thrissur",
        "Tirur",
        "Tiruvalla",
        "Tiruvananthapuram (Trivandrum)",
        "Tiruvannamalai",
        "Tiruvattur",
        "Tiruvottiyur",
        "Vaikom",
        "Varkala",
        "Vatakara",
      ],
      required: true,
      label: "City",
      key: "city",
      value: "",
      invalid: false,
      validation: [(value: string) => value.length > 2 && value.length < 20],
      message: "Invalid Entry",
    },
    state: {
      type: "input",
      label: "State",
      key: "state",
      value: "Kerala",
      required: false,
      invalid: false,
      disabled: true,
      validation: [(value: string) => value.length > 2 && value.length < 20],
      message: "Invalid Entry",
    },
    pincode: {
      type: "input",
      required: true,
      label: "Pincode",
      key: "pincode",
      value: "",
      invalid: false,
      validation: [(value: string) => value.length === 6],
      message: "Please provide valid 6 digit pincode.",
    },
  });

  const handleSubmit = (event: React.SyntheticEvent) => {
    // Object.entries(form).forEach(item=> validation(...item))
    // event.preventDefault();
    console.log(Object.entries(formData));
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
    submitButton: {
      "pointer-events": !submit ? "none" : "true",
    },
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
                {Object.values(formData).map((data) => (
                  <Input formData={data} setFormData={setFormData} />
                ))}
                <div {...stylex.props(styles.formControl)}>
                  <div
                    {...stylex.props(styles.submitButton)}
                    onClick={handleSubmit}
                  >
                    <Button content="Login" color={!submit ? "grey" : ""} />
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
