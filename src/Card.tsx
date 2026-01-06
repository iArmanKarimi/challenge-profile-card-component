export default function Card() {
  return (
    <div className="w-full h-full px-2 flex items-center justify-center">
      <div className="bg-white w-72 h-[40vh] rounded-xl shadow-md overflow-hidden relative">
        {/* Top background pattern */}
        <img
          src="/images/bg-pattern-card.svg"
          alt="card background"
          className="w-full"
        />

        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src="/images/image-victor.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
        </div>

        {/* Name */}
        <div className="flex justify-center space-x-2 mt-5">
          <p className="text-navy-950 inline font-bold">Victor Crest</p>
          <p className="font text-gray-500">26</p>
        </div>
        <div className="flex justify-center mt-1 text-gray-500 text-sm">
          London
        </div>
        <hr className="text-gray-100 mt-7" />
      </div>
    </div>
  );
}
