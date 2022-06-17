export default function TodoDeletes({deleteAllTodo,deleteAllConfirmed,deleteAllChecked}) {
    return (
        <>
            <button onClick={()=> deleteAllTodo()}>Delete All</button>
            <button onClick={()=> deleteAllChecked()}>Delete All Checked</button>
            <button onClick={()=> deleteAllConfirmed()}>Delete all Confirmed</button>
        </>
    )
}