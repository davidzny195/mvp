import SVG from '../common/IconsSvg';

export default function Navbar() {
  return (
    <div className="w-full h-16 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl text-white">DOWN BAD</div>
        <div className="flex items-center space-x-4">
          <p className="text-[#a39f9f] text-sm">UserId: 128123</p>
          <p className="text-[#a39f9f] text-sm">Balance: $128.24</p>
          <SVG icon="transaction" />
          <SVG icon="chat" />
          <SVG icon="user" />
        </div>
      </div>
    </div>
  );
}
