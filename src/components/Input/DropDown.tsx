import { FC, ReactNode, useState } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  keyName: string;
  value: string;
  disabled: boolean;
  handleBlur: Function;
  handleChange: Function;
  dropDownValues: string[];
}
export const DropDown: FC<Props> = ({
  value,
  handleChange,
  keyName,
  dropDownValues,
  disabled,
  handleBlur,
}) => {
  const fadeIn = stylex.keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });

  const styles = stylex.create({
    mainDiv: {
      position: "relative",
      width: "95%",
    },
    formInput: {
      display: "flex",
      position: "relative",
      alignItems: "center",
      fontSize: "12px",
      cursor: disabled ? "not-allowed" : "auto",
      padding: "0 10px",
      width: "95%",
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
        outline: "none",
      },
    },
    dropDown: {
      position: "absolute",
      marginTop: "5px",
      "background-color": "#f9f9f9",
      "box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
      "z-index": 1,
      minWidth: "300px",
      "max-height": dropDownValues.length > 10 ? "200px" : "auto",
      "overflow-y": "auto",
      animationName: fadeIn,
      animationDuration: ".4s",
    },
  });

  const [mouseOverDpropDown, setMouseOverDpropDown] = useState(false);
  const [blur, setBlur] = useState(true);
  const [filteredValues, setFilteredValues] = useState(dropDownValues);
  const [searchText, setSearchText] = useState("");

  const filterDrop = (searchTerm: string) => {
    setSearchText(searchTerm);
    if (searchTerm.length > 2) {
      const filtered = dropDownValues.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredValues(filtered);
    }
  };

  const drop = () => {
    return (
      <div
        {...stylex.props(styles.dropDown)}
        onMouseOver={() => setMouseOverDpropDown(true)}
        onMouseLeave={() => setMouseOverDpropDown(false)}
      >
        {filteredValues.map((drop: string) => (
          <div
            onClick={() => {
              handleChange(keyName, drop);
              setBlur(true);
              setSearchText("");
            }}
          >
            {drop}
          </div>
        ))}
      </div>
    );
  };

  const closeDrop = () => {
    if (!mouseOverDpropDown) {
      setBlur(true);
      setMouseOverDpropDown(false);
    } else {
      setTimeout(() => {
        setMouseOverDpropDown(false);
      });
    }
    handleBlur(keyName, value);
  };

  return dropDownValues.length < 10 ? (
    <div>
      <div
        {...stylex.props(styles.formInput)}
        tabIndex={0}
        onFocus={() => setBlur(false)}
        onBlur={closeDrop}
      >
        {value || "Select one from list ..."}
      </div>
      {!blur ? drop() : <></>}
    </div>
  ) : (
    <div onFocus={() => setBlur(false)} onBlur={closeDrop}>
      <input
        {...stylex.props(styles.formInput)}
        type="text"
        value={searchText || (blur ? value || "Select one from list ..." : "")}
        onFocus={() => {
          setBlur(false);
          setFilteredValues(dropDownValues);
        }}
        onChange={(e) => filterDrop(e.target.value)}
        onBlur={closeDrop}
        placeholder="Search..."
      />
      {!blur ? drop() : <></>}
    </div>
  );
};

export default DropDown;
