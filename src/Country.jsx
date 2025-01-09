function Country(props) {
    return (
        <div className="country">
            <h1>{props.name}</h1>
            <h3>{props.Capital}</h3>
            <p>{props.population}</p>
        </div>
    )
}

export default Country;