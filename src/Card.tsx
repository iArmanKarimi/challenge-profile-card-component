import avatar from "/images/image-victor.jpg";
import pattern from "/images/bg-pattern-card.svg";

export default function Card() {
  return (
    <div
      className="w-full h-full px-2 flex
      items-center justify-center font-family-kumbh"
    >
      <div className="bg-white w-72 h-85 flex flex-col rounded-xl shadow-md overflow-hidden relative">
        {/* Top background pattern */}
        <img
          src={pattern}
          alt="card background"
          className="w-full"
        />

        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
        </div>

        {/* Name */}
        <div className="flex justify-center space-x-2 mt-5">
          <p className="text-navy-950 inline font-bold">Victor Crest</p>
          <p className="font text-gray-500">26</p>
        </div>
        <div className="flex justify-center mt-1 text-gray-500 text-sm mb-5">
          London
        </div>
        {/* stats */}
        <div
          className="flex flex-1
        border-t border-gray-100
        justify-around items-center text-center"
        >
          <div className="flex flex-col">
            <b className="text-xl">80k</b>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="flex flex-col">
            <b className="text-xl">803k</b>
            <p className="text-sm text-gray-500">Likes</p>
          </div>
          <div className="flex flex-col">
            <b className="text-xl">1.4K</b>
            <p className="text-sm text-gray-500">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
