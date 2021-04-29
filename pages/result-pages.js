import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { DatePicker } from "baseui/datepicker";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { MyButton } from "../components/Button";
import { MyInput } from "../components/Input";
import { ProgressBar } from "baseui/progress-bar";
import { Heading, HeadingLevel } from "baseui/heading";
import { Block } from "baseui/block";

import Link from "next/link";

function ResultPages() {
  const [value, setValue] = React.useState(10);

  const currentPage = 0;

  function totalPages(charactersPerPage, totalCharacters) {
    return charactersPerPage / totalCharacters;
  }

  totalPages(100, 1000);
  console.log(totalPages);

  const text = [
    "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit am adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit",
  ];

  const textCut = text.splice(1, 5);
  console.log(textCut);

  return (
    <Block
      overrides={{
        Block: {
          style: {
            width: "375px",
            height: "768px",
            maxHeight: "768px",

            margin: "0 auto",
            marginTop: "20px",
            border: "1px solid #888",
            padding: "6px",
            overflow: "hidden",
          },
        },
      }}
    >
      <ProgressBar value={10} successValue={100} />
      <Card
        overrides={{
          Root: {
            style: { border: "0" },
          },
        }}
        headerImage={"https://i.imgur.com/IYVqt5K.jpg"}
      >
        <StyledBody></StyledBody>
        <HeadingLevel>
          <Heading styleLevel={4}>Chào Sang,</Heading>
        </HeadingLevel>

        <StyledBody>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          am adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
          sit
        </StyledBody>
        <StyledAction>
          <Link href="/welcome=">
            <MyButton>Xem tiếp →</MyButton>
          </Link>
        </StyledAction>
      </Card>
    </Block>
  );
}

export default ResultPages;
