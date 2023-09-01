import React from 'react';
import { Rate,Avatar,List } from 'antd';
import { styled} from "styled-components";


const RatingLeft=styled.div`
    display:flex;
    width:20%;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color:#ee4d2d;
`
const RatingRight=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    button{
        width:15%;
        margin:8px 8px 8px 0;
        padding:5px;
        
        border-radius:5px;
        background-color:#ffffff;
        border:2px solid #ebebeb;
    }
`

const RatingNum=styled.div`
    color:#ee4d2d;
`

const ratingArray = ['All','Terrible', 'Bad', 'Normal', 'Good', 'Wonderful','Comment','Photoes'];
const listItems = ratingArray.map((i) =>
  <button>
    {i}
  </button>
);
const data = [
    {title: 'Ant Design Title 1',},
    {title: 'Ant Design Title 2',},
    {title: 'Ant Design Title 3',},
    {title: 'Ant Design Title 4',},
  ];
const ProductRating = ({
    rating,
    ratingNumbers,
}) => {
  return (
    <div>
        <div style={{display:'flex',backgroundColor:"#fffbf8"}}>
            <RatingLeft>
                <RatingNum>
                    <span style={{fontSize:"24px"}}>{rating}</span>
                    <span>/5</span>
                </RatingNum>
                <Rate disabled allowHalf defaultValue={rating} style={{color:"#ee4d2d"}}/>
            </RatingLeft>
            <RatingRight>
                {listItems}
            </RatingRight>
        </div>
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={
                        <div>
                            <span>username</span>
                            <Rate disabled allowHalf defaultValue={rating} style={{color:"#ee4d2d"}}/>
                            <div>2020-12-29 15:55 | 規格: 杏桃花蜂蜜</div>
                        </div>
                    }
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />
        </div>
        </div>
  );
};

export default ProductRating; 