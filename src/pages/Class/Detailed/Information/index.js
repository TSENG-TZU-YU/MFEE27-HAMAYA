function Information({ data }) {
    return (
        <div>
            {data.map((inf) => {
                return <p key={inf.id}>{inf.Information}</p>;
            })}
        </div>
    );
}

export default Information;
