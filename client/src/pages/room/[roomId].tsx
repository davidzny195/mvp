import { useRouter } from 'next/router';
import { Layout } from '../../components';

function PokerRoom() {
  const router = useRouter();
  const { roomId } = router.query;

  return <Layout>This is roomId: {roomId}</Layout>;
}

export default PokerRoom;
