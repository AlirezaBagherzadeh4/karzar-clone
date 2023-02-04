import React from "react";
import "../assets/navbar.css";

const Navbar = () => {
  const items = [
    {
      id: 1,
      name: "کارزارها",
      items: [
        { name: "فهرست همه کارزارها", link: "فلان" },
        { name: "پُر امضاترین کارزارها", link: "" },
        { name: "محبوب‌ترین کارزارها", link: "" },
        { name: "کارزارهای موفق", link: "" },
        { name: "پُر امضاترین کارزارها", link: "" },
      ],
    },
    {
      id: 2,
      name: "حمایت از کارزار",
      items: [{ name: "حمایت از کارزار", link: "" }],
    },
  ];
  return (
    <React.Fragment>
      <div className="navbar" dir="rtl">
        <div className="navbar-side" style={{ paddingRight: "8px" }}>
          <img
            className="navbar-side__logo"
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
                  <item>{item.name}</item>
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
          <button className="navbar-sidebar__button navbar-sidebar__user-panel">
            پنل کاربری
          </button>
          <button className="navbar-sidebar__button navbar-sidebar__karzar">
            ایجاد کارزار
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
