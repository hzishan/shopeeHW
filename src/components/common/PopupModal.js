import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const eventProductId='p003';

const PopupModal = () => {
    const [isVisable,setIsVisable]= useState(true);

    useEffect(() => {
        const popupHistory=JSON.parse(localStorage.getItem('shopee:popup.history'));
        console.log(popupHistory,isVisable);
        if (popupHistory && Date.now()-popupHistory.time<3000) {
            setIsVisable(false);
        } else {
            const history={
                time:Date.now(),
                productId:eventProductId,
            };
            localStorage.setItem("shopee:popup.history",JSON.stringify(history));
        }

        return () => {
            // Clean up localStorage on component unmount (when modal is closed)
            localStorage.removeItem("shopee:popup.history");
          };
      
    }, []);
    
    return (
        isVisable && (
        <Modal 
            open={true}
            footer={null}
            onOk={()=>setIsVisable(false)} 
            onCancel={()=>setIsVisable(false)}
        >
            <Link to={`/${eventProductId}`}>
                <img alt="p003" src="https://images.unsplash.com/photo-1690070416537-fb5e0aab54c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"/>
            </Link>
        </Modal>
        )
    )
}

export default PopupModal;
