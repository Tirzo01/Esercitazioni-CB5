export function Button() {
  const log = () => console.log("Hello world");
  return (
    <button className="click-btn" onClick={log}>
      Click here!
    </button>
  );
}
