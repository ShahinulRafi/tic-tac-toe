function Square() {
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      X
    </button>
  );
}

export default function Board() {
  return (
    //don't write unnecessary div, use fragment instead
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
