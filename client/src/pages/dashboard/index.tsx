import { Layout } from '../../components';
import RouteGuard from '../../routes/RouteGuard';

function Dashboard() {
  return <Layout>Content</Layout>;
}

export default RouteGuard(Dashboard);
