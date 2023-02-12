import React from "react";
import "../assets/new-karzar.css";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Input, Select, DatePicker, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;
const { Meta } = Card;

const NewKarzars = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/newKarzars");
  }
  const onSearch = (value) => console.log(value);

  const optionItems = [
    { value: "", name: "همه" },
    { value: "isOpen", name: "باز" },
    { value: "isClose", name: "بسته" },
  ];

  return (
    <React.Fragment>
      <div className="new">
        <div className="new-header">
          <h2 className="new-header__title">فهرست همه کارزار</h2>
          <div className="search-cnt">
            <DatePicker
              className="search-cnt__date"
              placeholder="تاریخ را انتخاب کنید"
            />
            <Select className="search-cnt__select" defaultValue="همه">
              {optionItems.map((item) => {
                return <Option value={item.value}>{item.name}</Option>;
              })}
            </Select>
            <Search
              className="search-cnt__search"
              placeholder="جستجو"
              allowClear
              onSearch={onSearch}
            />
          </div>
        </div>
        <br />
        <div className="new-card__cnt">
          <Card
            className="new-card__cnt--card"
            style={{ width: "32%", marginBottom: "12px" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              style={{ direction: "rtl" }}
              avatar={<EditOutlined key="edit" />}
              title="Card title"
              description="This is the description"
            />
            <br />
            <hr />
            <br />
            <div
              style={{
                direction: "rtl",
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <UserOutlined style={{ paddingLeft: "8px" }} />
              <p className="karzar-creator">یشیشسیشیسشیسش</p>
            </div>
          </Card>
        </div>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </React.Fragment>
  );
};

export default NewKarzars;
