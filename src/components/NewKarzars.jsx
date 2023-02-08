import React from "react";
import "../assets/new-karzar.css";
import {EditOutlined, UserOutlined} from "@ant-design/icons";
import {Card} from "antd";
import { useNavigate } from "react-router-dom";

const {Meta} = Card;

const NewKarzars = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/newKarzars");
    }

    return (
        <React.Fragment>
            <div className="new">
                <div className="new-header">
                    <h1 className="new-header__title">جدید‌ترین کارزارها</h1>
                    <button className="karzar--btn" onClick={handleClick}>کارزارهای بیشتر</button>
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
                            description="This is the description"
                        />
                        <br/>
                        <hr/>
                        <br/>
                        <div
                            style={{
                                direction: "rtl",
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <UserOutlined style={{paddingLeft: "8px"}}/>
                            <p className="karzar-creator">یشیشسیشیسشیسش</p>
                        </div>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewKarzars;
