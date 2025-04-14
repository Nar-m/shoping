export default function Selected({ item, Handleselect }) {
    return (
        <div className="selected">
            <label>Selected size</label>
            <select onChange={(e)=> Handleselect(e.target.value)}>
                {item.age.map((el, i) => {
                    return (
                        <option value={el} key={i}>{el}</option>
                    )
                })}
            </select>
        </div>
    )
}