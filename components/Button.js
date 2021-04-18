import { withStyle } from "baseui";
import { StyledBaseButton } from "baseui/button";

export const MyButton = withStyle(StyledBaseButton, ({ $theme }) => {
  return {
    borderRadius: $theme.borders.radius300,
    width: "100%",
    backgroundColor: $theme.colors.accent,
    color: "white",
  };
});
