function List() {
    const objects = ["Table","Chair","Laptop","Spectacles","CellPhone"];

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>List</h1>
                <ul>
                    {objects.map((object, index) => (
                        <li key={index} style={{ fontSize: "18px", margin: "5px 0", listStyle: "none" }}>
                            {object}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
