import React, { useState } from "react";
import "../assets/navbar.css";
import { Modal, Steps, theme, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [creator, setCreator] = useState("");
  const [creatorPhone, setCreatorPhone] = useState("");
  const [karzarTitle, setKarzarTitle] = useState("");
  const [karzarContent, setKarzarContent] = useState("");
  const [karzarContentLength, setKarzarContentLength] = useState(
    karzarContent.length
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const { TextArea } = Input;

  const steps = [
    {
      title: "ثبت مشخصات",
      content: (
        <div
          style={{
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 12,
            }}
          >
            <h4>نام و نام خانوادگی: </h4>
            <Input
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              style={{ width: "95%", alignSelf: "center", marginTop: "8px" }}
              required
              placeholder=""
            />
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 12,
            }}
          >
            <h4>شماره موبایل: </h4>
            <Input
              value={creatorPhone}
              onChange={(e) => setCreatorPhone(e.target.value)}
              style={{ width: "95%", alignSelf: "center", marginTop: "8px" }}
              required
              placeholder="0912345678"
            />
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 12,
            }}
          >
            <h4>عنوان کارزار: </h4>
            <Input
              value={karzarTitle}
              onChange={(e) => {
                setKarzarTitle(e.target.value);
              }}
              style={{ width: "95%", alignSelf: "center", marginTop: "8px" }}
              required
              placeholder="کارزار حمایت از حقوق حیوانات"
            />
          </div>
        </div>
      ),
    },
    {
      title: "ثبت کارزار",
      content: (
        <div
          style={{
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 12,
            }}
          >
            <h4>متن کارزار: </h4>
            <h6 className="textarea-alarm">
              متن کارزار باید متشکل از 15 تا 60 کلمه باشد.
            </h6>
            <TextArea
              value={karzarContent}
              onChange={(e) => {
                setKarzarContent(e.target.value);
                setKarzarContentLength(e.target.value.split(" ").length);
              }}
              style={{
                height: 190,
                width: "95%",
                alignSelf: "center",
                marginTop: "8px",
                resize: "none",
              }}
            />
            <p style={{ marginRight: "12px" }}>{karzarContentLength} / 60</p>
          </div>
        </div>
      ),
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const stepItems = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleLoginModalOk = () => {
    navigate("/user/1234");
    setIsLoginModalOpen(false);
  };
  const handleCreateModalOk = () => {
    setIsCreateModalOpen(false);
  };

  const handleLoginModalCancel = () => {
    setIsLoginModalOpen(false);
  };
  const handleCreateModalCancel = () => {
    setIsCreateModalOpen(false);
  };

  const items = [
    {
      id: 1,
      name: "کارزارها",
      items: [
        { name: "جدیدترین کارزارها", link: "/newKarzars" },
        { name: "پُر طرفدارترین کارزارها", link: "/popularKarzars" },
        { name: "کارزارهای موفق", link: "/successedKarzars" },
        { name: "کارزارهای باز", link: "/openKarzars" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <div className="navbar" dir="rtl">
        <div className="navbar-side" style={{ paddingRight: "8px" }}>
          <img
            onClick={handleClick}
            className="navbar-side__logo"
            style={{ cursor: "pointer" }}
            src="https://www.karzar.net/assets/img/logo.png"
            alt="logo"
          />
          <div className="navbar-side__title">
            <h3>کارزار</h3>
            <h6 className="navbar-side__title-sub">بستر مستقل جمع‌آوری امضا</h6>
          </div>
        </div>
        <div
          className="navbar-side"
          style={{ marginLeft: "12px", fontSize: "14px" }}
        >
          {items.map((item) => {
            return (
              <React.Fragment>
                <div key={item.id} className="navbar-side__item">
                  <p>{item.name}</p>
                  <div className="navbar-side__item-menu">
                    {item.items.map((sub) => {
                      return (
                        <React.Fragment>
                          <li
                            className="navbar-side__item-menu-sub"
                            key={sub.name}
                          >
                            <a href={sub.link}>{sub.name}</a>
                          </li>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          <button
            onClick={showLoginModal}
            className="navbar-sidebar__button navbar-sidebar__user-panel"
          >
            پنل کاربری
          </button>
          <Modal
            style={{ direction: "rtl" }}
            title="ورود / ثبت نام"
            open={isLoginModalOpen}
            onOk={handleLoginModalOk}
            onCancel={handleLoginModalCancel}
            footer={[
              <button
                className="karzar--btn"
                style={{ marginLeft: "8px" }}
                key="back"
                onClick={handleLoginModalCancel}
              >
                بستن
              </button>,
              <button
                className="karzar--btn"
                style={{ marginLeft: "8px" }}
                key="submit"
                type="primary"
                onClick={handleLoginModalOk}
              >
                ثبت نام
              </button>,
              <button
                className="karzar--btn"
                key="submit"
                type="primary"
                onClick={handleLoginModalOk}
              >
                ورود
              </button>,
            ]}
          >
            <br />
            <hr />
            <br />
            <div className="login-modal__input-section">
              <h4>ایمیل</h4>
              <input
                className="login-modal__input-section__input"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <br />
            <div className="login-modal__input-section">
              <h4>رمز عبور</h4>
              <input
                className="login-modal__input-section__input"
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
              />
            </div>
            <br />
            <div className="login-modal__input-section">
              <h4>شماره تماس</h4>
              <input
                className="login-modal__input-section__input"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
            <br />
            <div className="login-modal__input-section">
              <h4>کُد ملی</h4>
              <input
                className="login-modal__input-section__input"
                placeholder="کُد ملی خود را وارد کنید"
              />
            </div>
            <br />
          </Modal>
          <button
            onClick={showCreateModal}
            className="navbar-sidebar__button navbar-sidebar__karzar"
          >
            ایجاد کارزار
          </button>
          <Modal
            style={{ direction: "rtl" }}
            title="ایجاد کارزار"
            open={isCreateModalOpen}
            onOk={handleCreateModalOk}
            onCancel={handleCreateModalCancel}
            footer={
              <div
                style={{
                  marginTop: 24,
                }}
              >
                <button
                  className="karzar--btn"
                  style={{ marginLeft: "8px" }}
                  key="back"
                  onClick={handleCreateModalCancel}
                >
                  بستن
                </button>
                {current < steps.length - 1 && (
                  <button
                    className="karzar--btn"
                    onClick={() => next()}
                    disabled={
                      (creator === "") |
                      (creatorPhone === "") |
                      (karzarTitle === "")
                    }
                  >
                    بعدی
                  </button>
                )}
                {current > 0 && (
                  <button
                    className="karzar--btn"
                    style={{
                      marginLeft: "8px",
                    }}
                    onClick={() => prev()}
                  >
                    قبلی
                  </button>
                )}
                {current === steps.length - 1 && (
                  <button
                    className="karzar--btn"
                    disabled={
                      karzarContent === "" &&
                      karzarContentLength < 15 &&
                      karzarContentLength > 60
                    }
                  >
                    ایجاد
                  </button>
                )}
              </div>
            }
          >
            <Steps current={current} items={stepItems} />
            <div style={contentStyle}>{steps[current].content}</div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
