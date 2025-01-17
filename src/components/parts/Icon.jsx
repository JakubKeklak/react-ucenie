import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { GrPlayFill, GrStopFill, GrArticle } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

const Icon = ({ icon }) => {
    const Icon = () => {
        if (icon === 'FaAngleRight') {
          return <FaAngleRight />;
        }
        else if (icon === 'GrPlayFill') {
          return <GrPlayFill />;
        }
        else if (icon === 'GrStopFill') {
          return <GrStopFill />;
        }
        else if (icon === 'GrSend') {
          return <RiMailSendLine />;
        }
        else if (icon === 'GrArticle') {
          return <GrArticle />;
        }
        else if (icon === 'Facebook') {
          return <AiFillFacebook />;
        }
        else if (icon === 'Instagram') {
          return <TiSocialInstagram />;
        }
        else if (icon === 'Mail') {
          return <IoMailOutline />;
        }
        else if (icon === 'Shop') {
          return <GiShoppingCart />;
        }
      }
    return (
        <Icon />
    );
}

export default Icon;