export default function Cell() {
  return (
    <button
      type="button"
      className="bg-gray-100 rounded-xl w-24 h-24"
      onClick={() => console.log('cell clicked')}
    ></button>
  )
}
