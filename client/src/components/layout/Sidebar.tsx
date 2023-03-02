import SVG from '../common/IconsSvg';

export default function Sidebar() {
  return (
    <div className="w-24 h-full bg-[#28282B] border-r-2 border-r-blue-300 overflow-hidden">
      <div className="flex justify-center pt-4">
        <SVG icon="hamburger" />
      </div>

      <div className="space-y-8 flex flex-col justify-center h-full items-center pb-20">
        {/* <SVG Icon="hamburger" /> */}
        <SVG icon="star" />
        <SVG icon="history" />
        <SVG icon="crown" />
        <SVG icon="spade" />
        <SVG icon="diamond" />
      </div>
    </div>
  );
}
