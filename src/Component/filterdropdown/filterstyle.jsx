export const colourStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#868686",
      background: "#ddddddd",
    };
  },
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#c7c7c7" : "white",
  }),
  menuList: (base) => ({
    ...base,
    overflow: "auto",
    height: "5rem",

    "::-webkit-scrollbar": {
      width: ".9rem",
      height: "2rem",
    },
    "::-webkit-scrollbar-track": {
      background: "#d9d9d9",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#868686",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#284b63",
    },
  }),
};
