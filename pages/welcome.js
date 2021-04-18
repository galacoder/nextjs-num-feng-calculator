import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { DatePicker } from "baseui/datepicker";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { MyButton } from "../components/Button";
import { MyInput } from "../components/Input";

export default function Welcome() {
  const [date, setDate] = React.useState(new Date());
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Card
      overrides={{
        Root: {
          style: { width: "375px", margin: "0 auto" },
        },
      }}
      headerImage={"https://i.imgur.com/IYVqt5K.jpg"}
      title="Thần Số Học"
    >
      <StyledBody>
        Tính toán ngay lập tức 5 con số đáng tin cậy nhất trong biểu đồ số học
        của bạn để khám phá những đặc điểm tính cách kỳ lạ nhất của bạn, mong
        muốn tiềm ẩn & cách người khác thực sự nhìn thấy bạn.
      </StyledBody>
      <StyledBody>
        Nhập thông tin chi tiết của bạn vào bên dưới để có 5 bài đọc nhỏ được cá
        nhân hóa MIỄN PHÍ! Lưu, chia sẻ và tạo các bài đọc cho gia đình và bạn
        bè của bạn!
      </StyledBody>
      <StyledBody>
        <FormControl label="Họ Tên">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Họ tên đầy đủ của bạn"
            clearOnEscape
          />
        </FormControl>
      </StyledBody>
      <StyledBody>
        <FormControl label="Năm/Tháng/Ngày Sinh">
          <DatePicker
            value={date}
            onChange={({ date }) =>
              setDate(Array.isArray(date) ? date : [date])
            }
          />
        </FormControl>
      </StyledBody>
      <StyledAction>
        <MyButton>Xem Kết Quả →</MyButton>
      </StyledAction>
    </Card>
  );
}
