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
        title="Tạo Tài Khoản"
      >
        <StyledBody>
          Tạo tài khoản để bắt đầu chuyến hành trình làm giàu X.0.
        </StyledBody>

        <StyledBody>
          <FormControl>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Họ tên"
              clearOnEscape
            />
          </FormControl>
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
            <MyButton> Đăng Ký →</MyButton>
          </Link>
        </StyledAction>
        <StyledBody> Đăng ký bằng Facebook, Google, Apple</StyledBody>
        <StyledBody>
          Bằng cách đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính sách
          quyền riêng tư
        </StyledBody>
      </Card>

      <Link
        amimateUnderline="true"
        href="/auth/login"
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        Nếu bạn đã có tài khoản rồi thì hãy Đăng Nhập!
      </Link>
    </div>
  );
}
