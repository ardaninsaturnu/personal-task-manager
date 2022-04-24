import React from 'react';
import { Input,Typography,Button } from 'antd';
import styles from './Input.module.scss'
import {PlusOutlined} from "@ant-design/icons";
import { Select } from 'antd';

export default function InputComponent(){
 return(
   <>
    <Typography.Title level="1">Create a new task</Typography.Title>
     <div className={styles.formWrapper}>
       <div  style={{ width: '70%' }}>
         <Typography.Text type="secondary">Task name</Typography.Text>
         <Input placeholder="Basic usage" />
       </div>
       <div style={{ width: '20%' }}>
         <Typography.Text type="secondary">Task priority</Typography.Text>
         <Select defaultValue="lucy" style={{ display: 'block' }} listItemHeight={12}>
           <Select.Option value="jack">Urgent</Select.Option>
           <Select.Option value="lucy">Trivial</Select.Option>
           <Select.Option value="Yiminghe">Regular</Select.Option>
         </Select>
       </div>
       <Button style={{ backgroundColor:'black',color:'white' }} size="large" icon={<PlusOutlined/>}>Primary Button</Button>
     </div>
   </>
 )
}