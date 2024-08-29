import { Component } from "react"

class ComponentName extends Component{
    state = {on:true}
    clickHandler=()=>{
        this.setState(prevState=>({
            on:!prevState.on 
        }))
    }
     

    render() {
     const{on}= this.state
     const image = on?"https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid":"https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"
        return(
          <>
          {/* <img src={image} height={200}/>
           <button onClick={this.clickHandler}>{on?"turnon":"turnoff"}</button> */}
           <div className="card" style={{width: '18rem', marginLeft:"200%"}}>
            <img src={image} className="card-img-top" alt="..." width={100} height={300}/>
            <button onClick={this.clickHandler}>{on?"turnon":"turnoff"}</button>
           </div>
          
          </>

       )

     }


}
export default ComponentName