import { withStyle } from "baseui";
import { StyledInput } from "baseui/input";

export const MyInput = withStyle(StyledInput, ({ $theme }) => {
  return {
    borderRadius: $theme.borders.radius300,
    backgroundColor: $theme.colors.accent,
    width: "100%",
    height: "50px",
    color: "#fff",
  };
});
