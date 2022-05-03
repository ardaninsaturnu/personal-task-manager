import {useState} from 'react';
import {Table, Tag, Space, Button, Modal} from 'antd';

export default function TableComponent(){
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: text => {
        if( text === 'Urgent' )
          return <Button style={{backgroundColor:'crimson',color:'white'}} onClick={showModal}>{text}</Button>
        else if( text === 'Regular' )
          return <Button style={{backgroundColor:'gold',color:'white'}}>{text}</Button>
        else
          return <Button type={'primary'} style={{color:'white'}}>{text}</Button>
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Düzenle </a>
          <a>Delete </a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      priority: 'Urgent',
    },
    {
      key: '2',
      name: 'Jim Green',
      priority: 'Trivial',
    },
    {
      key: '3',
      name: 'Joe Black',
      priority: 'Regular',
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={data}/>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

      </Modal>
    </>
  )
};