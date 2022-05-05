import {useEffect, useState} from 'react';
import {Table, Space, Button, Modal} from 'antd';

export default function TableComponent(){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ localData, setLocalData ] = useState(null);

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
      render: priority => {
        if( priority === 1 )
          return <Button style={{backgroundColor:'crimson',color:'white'}} onClick={showModal}>Urgent</Button>
        else if( priority === 2 )
          return <Button style={{backgroundColor:'gold',color:'white'}}>Regular</Button>
        else
          return <Button type={'primary'} style={{color:'white'}}>Trivial</Button>
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('task'));
      const sortedData =  Object.values(data.tasks).sort( (a,b) => {
          return a.priority - b.priority
        })
        setLocalData(sortedData);
    }
  },[localData]);

  const showModal = () => {
    console.log(typeof localData,'arda')
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
      <Table columns={columns} dataSource={localData}/>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      </Modal>
    </>
  )
};