import { Layout } from '../../components';
import RouteGuard from '../../routes/RouteGuard';

function Dashboard() {
  return <Layout>Hello</Layout>;
}

export default RouteGuard(Dashboard);
