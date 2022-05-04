import React, {useState,useEffect} from 'react';
import { Input,Typography,Button,Select } from 'antd';
import styles from './Input.module.scss'
import {PlusOutlined} from "@ant-design/icons";
import {addTask} from "../../store/slices/taskSlice";
import {useDispatch} from "react-redux";

export default function InputComponent(){
  const [ name, setName ] = useState('');
  const [ priority, setPriority ] = useState('Select priority');
  const [ key, setKey ] = useState(0);
  const dispatch = useDispatch();

  const checkName = text => {
    if( text.trim().length === 0 ){
      alert('Enter a value please');
      setName('');
      return false;
    } else if ( text.trim().length > 255 ){
      alert('Character musn\'t over 255 characters');
      return false;
    } else {
      return true;
    }
  }

  const checkPriority = value => {
    const emptyPriority = value !== 'Select priority';

    if(!emptyPriority)
      alert('Emergence cant be empty')

    return emptyPriority;
  }

  const handleAddTask = (event) => {
    console.log(priority)
    event.preventDefault();

    if(!checkName(name) || !checkPriority(priority)){
      return;
    }

    setKey( key + 1 )
    dispatch( addTask({
      key,
      name,
      priority
    }));

    setName('');
    setPriority(0);
  }

 return(
   <>
    <Typography.Title>Create a new task</Typography.Title>
     <div className={styles.formWrapper}>
       <div  style={{ width: '70%' }}>
         <Typography.Text level="3" type="secondary">Task name</Typography.Text>
         <Input type="text" placeholder="Basic usage" value={name} onChange={ (event) => setName(event.target.value)} />
       </div>
       <div style={{ width: '20%' }}>
         <Typography.Text type="secondary">Task priority</Typography.Text>
         <Select defaultValue={priority} style={{ display: 'block' }} listItemHeight={12} onChange={ value => setPriority( typeof value === 'string' ? Number(value) : value ) }>
           <Select.Option value="0">Select priority</Select.Option>
           <Select.Option value="1">Urgent</Select.Option>
           <Select.Option value="2">Regular</Select.Option>
           <Select.Option value="3">Trivial</Select.Option>
         </Select>
       </div>
       <Button
         style={{ backgroundColor:'black',color:'white' }}
         size="large"
         icon={<PlusOutlined/>}
         onClick={ handleAddTask }
       >Add Task
       </Button>
     </div>
   </>
 )
}