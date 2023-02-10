import {React, useState} from "react";
import "../assets/new-karzar.css";
import {EditOutlined} from "@ant-design/icons";
import {Card, Modal, Pagination} from "antd";
import {useNavigate, useLocation} from "react-router-dom";

const {Meta} = Card;

const OpenKarzars = () => {
    const navigate = useNavigate();
    const location = useLocation();

    function handleClick() {
        navigate("/openKarzars");
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="new">
            <div className="new-header">
                <h2 className="new-header__title">کارزارهای باز</h2>
                {!location.pathname.includes("openKarzars") &&
                    <button className="karzar--btn" onClick={handleClick}>کارزارهای بیشتر</button>}
            </div>
            <br/>
            <div className="new-card__cnt">
                <Card
                    className="new-card__cnt--card"
                    style={{width: "32%", marginBottom: "12px", cursor: "pointer"}}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        style={{direction: "rtl"}}
                        avatar={<EditOutlined key="edit"/>}
                        title="Card title"
                        description="word one word two "
                    />
                    <br/>
                    <hr/>
                    <button
                        className="karzar--btn"
                        style={{
                            marginTop: "16px",
                            color: "white",
                            backgroundColor: "#25a69b",
                        }}
                        onClick={showModal}
                    >
                        حمایت
                    </button>
                    <div
                        style={{
                            direction: "rtl",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Modal
                            style={{direction: "rtl"}}
                            title="حمایت از کارزار"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <button
                                    className="karzar--btn"
                                    key="back"
                                    onClick={handleCancel}
                                >
                                    بستن
                                </button>,
                                <span style={{padding: "0 4px"}}></span>,
                                <button
                                    key="submit"
                                    className="karzar--btn"
                                    style={{color: "white", backgroundColor: "#25a69b"}}
                                    onClick={handleOk}
                                >
                                    حمایت
                                </button>,
                            ]}
                        >
                            <br/>
                            <hr/>
                            <br/>
                            <div className="login-modal__input-section">
                                <h4>شماره تماس</h4>
                                <input
                                    className="login-modal__input-section__input"
                                    placeholder="شماره تماس خود را وارد کنید"
                                />
                            </div>
                            <br/>
                            <div className="login-modal__input-section">
                                <h4>کُد ملی</h4>
                                <input
                                    className="login-modal__input-section__input"
                                    placeholder="کُد ملی خود را وارد کنید"
                                />
                            </div>
                            <br/>
                        </Modal>
                    </div>
                </Card>
            </div>
            {window.location.href.includes("openKarzars") && <Pagination defaultCurrent={1} total={50} />}
        </div>
    );
};

export default OpenKarzars;
