import Cell from './Cell'

export default function Board() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((cell, index) => (
          <Cell
            v-for="(cell, index) in board"
            key={index}
            // onClick="markCell(index)"
          />
        ))}
      </div>
    </div>
  )
}
