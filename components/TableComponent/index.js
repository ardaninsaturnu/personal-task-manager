import {useState} from 'react';
import {Table, Space, Button, Modal} from 'antd';
import {useSelector} from "react-redux";

export default function TableComponent(){
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const taskData = useSelector(state => state.tasks );
  const sortedData = Object.values(taskData).sort( (a,b) => {
    return a.priority - b.priority
  });

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
      <Table columns={columns} dataSource={sortedData}/>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

      </Modal>
    </>
  )
};