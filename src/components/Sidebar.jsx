import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  DeleteOutlined,
  EditOutlined,
  TeamOutlined,
  SwitcherOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  Card,
  Input,
  Space,
  Table,
  Tag,
  Popconfirm,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { Sider, Content } = Layout;

  const [content, setContent] = useState(1);

  const navigate = useNavigate();

  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  const userMenuItems = [
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
  const adminMenuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "خانه",
    },
    {
      key: "2",
      icon: <TeamOutlined />,
      label: "کاربران",
    },
    {
      key: "3",
      icon: <SwitcherOutlined />,
      label: "کارزارها",
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

  const userColumns = [
    {
      title: "ایمیل",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "شماره تماس",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "کد ملی",
      dataIndex: "nationalCode",
      key: "nationalCode",
    },
    {
      title: "وضعیت",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {
            <Tag
              className={status == "تأیید شده" ? "ant-tag__ok" : "ant-tag__nok"}
              key={status}
            >
              {status}
            </Tag>
          }
        </>
      ),
    },
    {
      title: "ویرایش",
      key: "action",
      render: () => (
        <Space size="middle">
          <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
          <Popconfirm
            title="حذف کاربر"
            description="آیا از حذف این کاربر مطمئن هستید؟"
            onConfirm={confirm}
            onCancel={cancel}
            okText="بله"
            cancelText="خیر"
          >
            <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const karzarColumns = [
    {
      title: "عنوان",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "وضعیت",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {
            <Tag
              className={
                status == "موفق" || status == "باز"
                  ? "ant-tag__ok"
                  : "ant-tag__nok"
              }
              key={status}
            >
              {status}
            </Tag>
          }
        </>
      ),
    },
    {
      title: "دسته‌بندی",
      key: "action",
      render: (karzarData) => (
        <Space size="middle">
          <Select
            defaultValue={karzarData.status}
            style={{ width: 120 }}
            onChange={handleSelectChange}
            options={[
              {
                value: "open",
                label: "باز",
                disabled: karzarData.status == "باز" ? true : false,
              },
              {
                value: "close",
                label: "بسته",
                disabled: karzarData.status == "بسته" ? true : false,
              },
              {
                value: "success",
                label: "موفق",
                disabled: karzarData.status == "موفق" ? true : false,
              },
            ]}
          />
        </Space>
      ),
    },
  ];

  const userData = [
    {
      key: "1",
      name: "کاربر 1",
      phone: "0912847182",
      nationalCode: "092111111",
      status: "تأیید شده",
    },
    {
      key: "2",
      name: "کاربر 2",
      phone: "0912848481",
      nationalCode: "0913213232",
      status: "تأیید نشده",
    },
    {
      key: "3",
      name: "کاربر 3",
      phone: "0912323213",
      nationalCode: "0921313232",
      status: "تأیید شده",
    },
  ];

  const karzarData = [
    {
      key: "1",
      name: "کارزار 1",
      status: "بسته",
    },
    {
      key: "2",
      name: "کارزار 2",
      status: "موفق",
    },
    {
      key: "3",
      name: "کارزار 3",
      status: "بسته",
    },
    {
      key: "3",
      name: "کارزار 4",
      status: "باز",
    },
  ];

  const confirm = (e) => {
    console.log(e);
  };
  const cancel = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <Sider trigger={null}>
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          {window.location.href.includes("user")
            ? userMenuItems.map((item) => {
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
              })
            : adminMenuItems.map((item) => {
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
                    minHeight: "137px",
                  }}
                >
                  <p>{card.desc}</p>
                </Card>
              );
            })
          ) : window.location.href.includes("user") ? (
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
          ) : content == 2 ? (
            <Card
              title="لیست کاربران"
              style={{ flex: "1 0 33%", margin: "0 10px", height: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Table
                  columns={userColumns}
                  dataSource={userData}
                  scroll={{ x: 500 }}
                />
              </div>
            </Card>
          ) : content == 3 ? (
            <Card
              title="لیست کارزارها"
              style={{ flex: "1 0 33%", margin: "0 10px", height: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Table
                  columns={karzarColumns}
                  dataSource={karzarData}
                  scroll={{ x: 500 }}
                />
              </div>
            </Card>
          ) : (
            ""
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
