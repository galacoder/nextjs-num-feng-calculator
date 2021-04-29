import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { DatePicker } from "baseui/datepicker";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { MyButton } from "../../components/Button";
import { MyInput } from "../../components/Input";

import Link from "next/link";

export default function Welcome() {
  const [date, setDate] = React.useState(new Date());
  const [inputValue, setInputValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const [emailValue, setEmailValue] = React.useState("");

  return (
    <div>
      <Card
        overrides={{
          Root: {
            style: { width: "375px", margin: "0 auto" },
          },
        }}
        headerImage={"https://i.imgur.com/cGmHxG9.png"}
        title="Đăng Nhập"
      >
        <StyledBody>Đăng Nhập nào!</StyledBody>

        <StyledBody>
          <FormControl>
            <Input
              onChange={(event) =>
                setEmailValue(event.currentTarget.emailValue)
              }
              type="email"
              placeholder="Email"
              value={emailValue}
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={(event) =>
                setPasswordValue(event.currentTarget.passwordValue)
              }
              type="password"
              placeholder="Password"
              value={passwordValue}
            />
          </FormControl>
        </StyledBody>
        <StyledAction>
          <Link href="/">
            <MyButton> Đăng Nhập →</MyButton>
          </Link>
        </StyledAction>
        <StyledBody> Đăng nhập bằng Facebook, Google, Apple</StyledBody>
        <StyledBody>Quên mật khẩu?</StyledBody>
      </Card>
      <div>
        <p>
          Nếu bạn đã chưa có tài khoản?{" "}
          <span>
            <Link
              amimateUnderline="true"
              href="/auth/login"
              style={{
                textAlign: "center",
                paddingTop: "20px",
              }}
            >
              Đăng Ký!
            </Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
