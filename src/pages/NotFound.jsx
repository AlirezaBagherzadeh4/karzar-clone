import { Result } from "antd";

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle=".این صفحه وجود ندارد"
    extra={<button className="karzar--btn">بازگشت به خانه</button>}
  />
);

export default NotFound;
