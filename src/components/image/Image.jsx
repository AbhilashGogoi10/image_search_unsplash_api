import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


const Image = ({ data}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="imgCard">
      
        <img
      
          onClick={toggleModal}
          className="imgResult"
          src={data?.urls?.small}
          alt={data?.alt_description}
        />
       

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img
                onClick={toggleModal}
                className="imgResult"
                src={data?.urls?.small}
                alt={data?.alt_description}
              />
              <div className="des">
                {data?.alt_description}
              </div>
              <img
                className="profileImg"
                src={data?.user?.profile_image?.small}
                alt=""
              />
              <div className="user">{data?.user?.name}</div>
              <div className="likes">
                <FcLike /> {data.likes}
              </div>
              

              <div className="socials">
                <span>
                  <AiOutlineInstagram /> {data?.user?.instagram_username}
                </span>
                <span>
               
                  <AiOutlineTwitter /> {data?.user?.twitter_username}
                </span>
               
              </div>

             

              <button className="close-modal" onClick={toggleModal}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        )}

        <img
          className="profileImg"
          src={data?.user?.profile_image?.small}
          alt=""
        />
        <div className="user">{data?.user?.name}</div>
        <div className="likes">
          <FcLike /> {data?.likes}
        </div>
      </div>
    </>
  );
};

export default Image;
