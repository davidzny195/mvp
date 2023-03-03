import { useSelector } from 'react-redux';
import SVG from '../common/IconsSvg';

export default function Navbar() {
  const {
    currentUser: { userId, balance },
  } = useSelector((state: any) => state.globalData);

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl text-white font-bold">DOWN BAD</div>
        <div className="flex items-center space-x-4">
          <p className="text-[#a39f9f] text-sm">UserId: {userId}</p>
          <p className="text-[#a39f9f] text-sm">Balance: ${balance}</p>
          <SVG icon="transaction" />
          <SVG icon="chat" />
          <SVG icon="user" />
        </div>
      </div>
    </div>
  );
}
