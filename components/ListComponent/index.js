import React from 'react'
import {Input, Typography, Select} from "antd";

export default function ListComponent(){
  return(
    <>
      <div style={{ display: 'flex',justifyContent: 'space-between',padding:'1rem'}}>
        <Typography.Text type={'primary'}>Job list</Typography.Text>
        <Typography.Text type={'primary'}>( 3/3 )</Typography.Text>
      </div>
      <div style={{ display: 'flex',justifyContent: 'space-between',padding:'1rem',gap: '12px'}}>
        <Input.Search placeholder="input search text" style={{ width: '70%' }} />
        <Select defaultValue="Choose one" type="secondary" style={{width: '30%'}}>
          <Select.Option>Urgent</Select.Option>
          <Select.Option>Regular</Select.Option>
          <Select.Option>Trivial</Select.Option>
        </Select>
      </div>
    </>
  )
}
