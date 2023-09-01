import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu,Checkbox} from 'antd';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  

const items = [
    getItem('所有分類', 'open', <MenuOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
    ]),
    {
        type:"divider"
    },

];

const items2 = [
    getItem('條件篩選', "open",null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('更多', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),    
    {
        type:"divider"
    },
    getItem('出貨地點', 'open', null, [
        getItem('Option 1', '11'),
        getItem('Option 2', '22'),
    ]),
    {
        type:"divider"
    },

];

const ProductMenu=({

})=>{
    const onClick = (e) => {
        console.log('click ', e);
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return(
        <div>
            <Menu
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['open']}
            mode="inline"
            items={items}
            />
            <Menu
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['open']}
            multiple="true"
            mode="inline"
            items={items2}
            />
        </div>
    );
};

export default ProductMenu;