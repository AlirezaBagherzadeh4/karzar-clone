import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Layout, Menu, theme, Card, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { Sider, Content } = Layout;

  const [content, setContent] = useState(1);

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const navigate = useNavigate();

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "خانه",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "پروفایل",
    },
  ];
  const cardItems = [
    {
      id: 1,
      name: "جدیدترین کارزارها",
      link: "/newKarzars",
      desc: "کارزارهای تازه ایجاد شده.",
    },
    {
      id: 2,
      name: "پر طرفدارترین کارزارها",
      link: "/popularKarzars",
      desc: "کارزارهایی که بیشترین طرفدار را دارند.",
    },
    {
      id: 3,
      name: "کارزارهای موفق",
      link: "/successedKarzars",
      desc: "کارازهایی که در پیگیری مطالبه خود موفق شده اند.",
    },
    {
      id: 4,
      name: "کارزارهای باز",
      link: "/openKarzars",
      desc: "کارزاهایی که هنوز در حال جریان هستند.",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null}>
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map((item) => {
            return (
              <Menu.Item
                key={item.key}
                onClick={() => {
                  setContent(item.key);
                }}
              >
                {item.icon} {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "0 20",
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {content == 1 ? (
            cardItems.map((card) => {
              return (
                <Card
                  key={card.id}
                  title={card.name}
                  extra={
                    <button
                      onClick={() => {
                        navigate(card.link);
                      }}
                      className="karzar--btn"
                      style={{ border: "none" }}
                    >
                      مشاهده بیشتر
                    </button>
                  }
                  style={{
                    flex: "1 0 33%",
                    margin: "0 10px",
                    height: "fit-content",
                  }}
                >
                  <p>{card.desc}</p>
                </Card>
              );
            })
          ) : (
            <Card
              title="ویرایش اطلاعات کاربری"
              style={{ flex: "1 0 33%", margin: "0 10px", height: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4 style={{ paddingBottom: "4px" }}>ایمیل: </h4>
                <Input
                  disabled
                  style={{ width: "50%", marginBottom: "16px" }}
                  placeholder="ایمیل"
                />
                <h4 style={{ paddingBottom: "4px" }}>رمز عبور: </h4>
                <Input.Password
                  style={{ width: "50%", marginBottom: "16px" }}
                  placeholder="رمز عبور"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <h4 style={{ paddingBottom: "4px" }}>تکرار رمز عبور: </h4>
                <Input.Password
                  style={{ width: "50%", marginBottom: "16px" }}
                  placeholder="تکرار رمز عبور"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <h4 style={{ paddingBottom: "4px" }}>شماره تماس: </h4>
                <Input
                  style={{ width: "50%", marginBottom: "16px" }}
                  placeholder="شماره تماس"
                />
                <h4 style={{ paddingBottom: "4px" }}>کد ملی: </h4>
                <Input
                  disabled
                  style={{ width: "50%", marginBottom: "16px" }}
                  placeholder="کد ملی"
                />
                <button className="karzar--btn">ثبت تغییرات</button>
              </div>
            </Card>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
