import { Table, Tag, Space,Button } from 'antd';

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
        return <Button style={{backgroundColor:'crimson',color:'white'}}>{text}</Button>
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

export default function TableComponent(){return <Table columns={columns} dataSource={data} />};