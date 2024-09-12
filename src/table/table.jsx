import axios from "axios"
import { useEffect, useState } from "react"

function Search(){
    const [data,setData]=useState([])
const [query,setQuery]= useState("")
const [add,setAdd]= useState("")
    useEffect(()=>{
        fetchData()
    },[add])
    const fetchData=async()=>{
       const {data}=await axios.get(`https://dummyjson.com/recipes/search?q=${add}`)
       console.log(data)
       setData(data.recipes)
    }
    const searchData=(event)=>{
        //console.log(event.target.value)
        setQuery(event.target.value)

    
        
    }

    const submit=()=>{
        setAdd(query)
    }
    return(
        <>
        <input type="search" value={query} onChange={searchData}/>
        <button onClick={submit}>search</button>
        <table>
            <thead>
            <tr>
                <td>id</td>
                <td>title</td>
                <td>image</td>
            </tr>
            </thead>
            <tbody>
            {
                         data.map((each)=>{
                            
                    return(
                    <tr key={each.id}>
                        <td>{each.id}</td>
                        <td>{each.name}</td>
                        <td><img src={each.image} style={{width:100,height:100}}/></td>
                       
                    </tr>
                    )
              })
              }
              {data.map((eachVal)=>{
                <h2>{eachVal.id}</h2>
              })}
              </tbody>
        </table>
        </>
    )
}
export default Search