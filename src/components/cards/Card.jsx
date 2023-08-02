import { Button, Rate } from "antd";
import {EyeOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import PropTypes from "prop-types";

import bg_card from '../../assets/images/card-bg.svg';
import bg_card_top from '../../assets/images/card-bg-3.svg';
import './card.scss';
const Card = ({title, brend, description, reting, price, img, click, del }) => {
  return (
    <div className="card">
      <img width='100%' height='250px' src={img} alt="" />
      <div className="card__info">
        <div className="card__info--main">
          <p className="title">{title}</p>
          <p className="brend">{brend}</p>
        </div>
        <div className="line"></div>
        <p className="desc">{description}</p>
        <div className="card__reting__price">
          <p>
            <Rate allowHalf defaultValue={reting} />
          </p>
          <p className="price">
            Price: <span className="reting">{price}$</span>
          </p>
        </div>
        <div className="card__btns">
          <Button icon={<EyeOutlined />}  type="primary" onClick={del}>See Product</Button>
          <Button icon={<ShoppingCartOutlined/>} onClick={click} type="primary">Add to Cart</Button>
        </div>
      </div>
      <img className="bg_bottom" src={bg_card} alt="" />
      <img className="bg_top" src={bg_card_top} alt="" />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  brend: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reting: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
};

export default Card;
