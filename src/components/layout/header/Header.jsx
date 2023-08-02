import {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
//icons
import logo from "../../../assets/icons/logo.svg";
import language from "../../../assets/icons/language.svg";
import cart_icon from "../../../assets/icons/shop-cart.png";
//style
import "./header.scss";
import { Modal} from "antd";
const Header = () => {
  const [open, setOpen] = useState(false);


  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__nav--list">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
          <div className="actions">
            <div className="language_action">
              <img src={language} alt="language icon" />
              <select name="lang" id="lang">
                <option value="ENG">ENG</option>
                <option value="RUS">RUS</option>
              </select>
            </div>
            <button className="add_cart" onClick={() => setOpen(true)}>
              <img src={cart_icon} alt="" />
              {/* <p className="cart">
                Shop Cart <span>{cart.length}</span>
              </p> */}
            </button>
          </div>
        </nav>
        <Modal
          title="All shopping Products"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <div className="shopping_cards__wrapper">
            <div className="shop_card">
              {/* {cart.length === 0 ? <div><Empty/></div> : cart.map((res) => (
                <Card key={res.id} className="main_card" title={res?.title} bordered={false}>
                  <div className="shop_card--main">
                    <div
                      className="img_container"
                      style={{
                        background: `url('${res?.thumbnail}') center center, no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="description">
                      <p>{res?.description}</p>
                    </div>
                    <div className="rating__price">
                      <p className="price">
                        <span>Price:</span> {res?.price} <span>$</span>
                      </p>
                      <Rate allowHalf defaultValue={res?.rating} />
                    </div>
                    <div className="quantity_buttons">
                      <div className="quantity_button">
                        <button>-</button>
                        <button className="quatity">{res?.quantity}</button>
                        <button>+</button>
                      </div>
                      <Button type="primary" icon={<DeleteOutlined />} danger>Delete Product</Button>
                    </div>
                  </div>
                </Card>
              ))} */}
            </div>
          </div>
        </Modal>
      </div>
    </header>
  );
};


export default Header;
