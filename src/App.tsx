import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div
      className="w-screen h-screen bg-blue-600 relative overflow-hidden
      bg-no-repeat bg-position-[top_left,bottom_right]"
    >
      <div
        className="absolute -top-[50vh] -left-[50vw] 
          w-screen h-screen
          bg-[url('/images/bg-pattern-top.svg')]
          bg-no-repeat bg-position-[right_center]"
      ></div>
      <div
        className="absolute w-1/2 h-[50vh] md:h-1/2 bottom-0 right-0
        bg-[url('/images/bg-pattern-bottom.svg')]
        "
      ></div>
      <Card />
    </div>
  );
}

export default App;
