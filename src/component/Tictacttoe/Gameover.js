export default function Gameover({ gameover, Reset }) {
    return (
        <div className="flex justify-between items-center p-2">
            <div> {gameover} Game over</div>
            <div className="ml-2">
                <button onClick={Reset} className="bg-[red] text-white p-2 ">Reset</button>
            </div>
        </div>
    )
}