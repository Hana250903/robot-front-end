import { Card, Statistic, Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '../../store/slices/dashboardSlice';

const Dashboard = () => {
  const { totalStamps, errorCount, status } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <Row gutter={16}>
        <Col span={8}>
          <Card className="shadow-md">
            <Statistic title="Số lượng dấu hôm nay" value={totalStamps} />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="shadow-md">
            <Statistic title="Số lượng lỗi" value={errorCount} />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="shadow-md">
            <Statistic title="Trạng thái Robot" value={status} />
          </Card>
        </Col>
        <Col span={24} className="mt-4 flex gap-2">
          <Button type="primary" onClick={() => dispatch(updateStatus('Đang hoạt động'))}>Bắt đầu</Button>
          <Button danger onClick={() => dispatch(updateStatus('Dừng'))}>Dừng</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;