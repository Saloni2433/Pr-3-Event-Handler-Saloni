function Key() {
    const objects = [
        { id: 1, name: "Table" },
        { id: 2, name: "Chair" },
        { id: 3, name: "Laptop" },
        { id: 4, name: "Spectacles" },
        { id: 5, name: "CellPhone" },
    ];

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px"}}>
                <h1>Key</h1>

                <ul style={{ listStyle: "none"}}>
                    {objects.map((object) => (
                        <li key={object.id} style={{ fontSize: "18px", margin: "5px 0" }}>
                            {object.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Key;
