function Card({title = "lol", price=1, inStock="yes"}) {
    let product = ""
    if (inStock == "yes") {
        product = "in stock"
    }
    return (
        <div className="card">
            <h3>{title}</h3>
            <h3>{price}</h3>
            <h3>{product}</h3>
        </div>
    )
}

export default Card