const CardChildren = (props) => {

    return ( 
         <div className="card">
        <h1>Props  Children</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        {props.children}

    </div>
    )
}

   


export default CardChildren