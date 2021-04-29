import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { withStyle } from "baseui";

export default () => {
  return (
    <HeaderNavigation $align={ALIGN.bottom}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          Sang Le Tech - @2021 All Rights Reserved
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">Thần Số Học là gì?</StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">Hành Trình Làm Giàu X.0</StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}></StyledNavigationList>
    </HeaderNavigation>
  );
};
