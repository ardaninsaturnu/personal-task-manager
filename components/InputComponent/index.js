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
         <Select defaultValue="urgent" style={{ display: 'block' }} listItemHeight={12}>
           <Select.Option value="urgent">Urgent</Select.Option>
           <Select.Option value="regular">Regular</Select.Option>
           <Select.Option value="trivial">Trivial</Select.Option>
         </Select>
       </div>
       <Button style={{ backgroundColor:'black',color:'white' }} size="large" icon={<PlusOutlined/>}>Primary Button</Button>
     </div>
   </>
 )
}