import { useState } from "react"


const CustomizeTodos=()=>{

    const [input,setInput]=useState({
         name:"",
         Description:"",
         start:"",
         end:"",

    })
   
 

    const [todo,settodo] = useState([])
    const [updateIndex,setUpdateIndex]=useState(null)

    const changeHandler=(event)=>{
      const {name,value}=event.target
        setInput({...input,[name]:value})
    } 
 
     const submitHandler =(event)=>{
          event.preventDefault ()     
          if (input.name && input.Description && input.start && input.end){
            settodo ([...todo,input])
          }
          setInput({
            name:"",
            Description:"",
            start:"",
            end:""
          })


     }
      const deleteHandler=(index)=>{
        
             settodo(  todo.filter((each,index1)=>index1!=index))
      }


    const updateHandler=(index)=>{
      setUpdateIndex(index)
      setInput (todo[index])
    }


      const updateSubmitHandler=(event)=>{
        event.preventDefault()
        const copyupdate=todo
        copyupdate[updateIndex]=input
        settodo([...todo,copyupdate])
        setInput({
          name:"",
          Description:"me",
          start:"",
          end:""
        })
      }

        
     return(
       <div>
        <form onSubmit={updateIndex ||updateIndex ==0?updateSubmitHandler:submitHandler}>
            <h2>Form</h2>
            <label>Name</label><input type="text" name="name" value={input.name} onChange={changeHandler}/>
            <br/>
            <label>Description</label><input type="text" name="Description" value={input.Description} onChange={changeHandler}/>
            <br/>
            <label>Date of start</label><input type="date" name="start" value={input.start} onChange={changeHandler}/>
            <br/>
            <label>Date of end</label><input type="date" name="end" value={input.end} onChange={changeHandler}/>
            <br/>
            <label>Priority level</label><select name="Priority level">
                <option value={'low'}>low</option>
                <option value= {'medium'}>medium</option>
                <option value = {'High'}>High</option>
                </select>
                <button type="submit">{updateIndex ||updateIndex ==0?'updateSubmit':'Submit'}</button>
       
        </form>

           <table>
            <tbody>
            {todo.map((each,index)=>
            <tr key={index}>
              <td>{each.name}</td>
              <td>{each.Description}</td>
              <td>{each.start}</td>
              <td>{each.end}</td>
              <td><button onClick={()=>deleteHandler(index)}> Delete</button></td>
              <td><button onClick={()=>updateHandler(index)}>update</button></td>
           
            </tr>
          )}
            </tbody>
           
           </table>
        
       </div>

     )

}
export default CustomizeTodos