class Button extends React.Component{
clockHANDLER(){
    console.log("button was clicked!!!!")
}

    render (){
    return(
        <button onClick={this.clockHANDLER.bind(this)}>
            click me!
        </button>
    )
}




}




ReactDOM.render(
    <Button />,
    document.getElementById("root")
)