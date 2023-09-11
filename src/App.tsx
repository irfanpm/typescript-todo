import { useRef, useState } from 'react'
import { Form,Button ,Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
interface item {
    id:number,
    value:string,
    editkey:boolean


  }
  const myRef = useRef<any>()
  
  const [count, setCount] = useState<item[]>([])
  
  console.log(count);
  
  const addvalue=(e:any)=>{
    e.preventDefault()

     const item=e.target.item.value
     const todos:item ={id:Date.now(),value:item,editkey:true}
    setCount([...count,todos])
  
    e.target.reset()
  
  }
  const deleteItem=(id:any) =>{
    console.log(id);
    
    const filterItem=count.filter((item)=>{
      console.log(item.id);
      

    return  item.id!=id

    })
    
    setCount(filterItem)

  }
  const editInput=(id:any)=>{
  const fil:any= count.map((item)=>{
    if(item.id==id){
      item.editkey=false
    }
    return item

    })
    console.log(fil);
    
    
    setCount(fil)
  }
  const edititem=(id:any)=>{
    const value = myRef.current.value
      const fil:any= count.map((item)=>{
    if(item.id==id){
      item.value=value
      item.editkey=true
    }
    return item

    })
    setCount(fil)

    
  }



  return (
    <div className="container text-center abc ">
    <h1 className='text-white'>TYPESCRIPT TODO</h1>
    <form onSubmit={addvalue} className='d-flex justify-content-center'>
      <Form.Control type="text" id='item' className='w-50'/>&nbsp;&nbsp;&nbsp;
      <Button type='submit' variant="primary">Add Item</Button>
    </form>
    <br /><br />  <div className='container '>  {count.map((item: any) => (
      (item.editkey == true) ? (
        <Card key={item.id} className='w-50 m-auto'>
          <Card.Body>
            <li className='fs-3'>{item.value} &nbsp; <button className='btn btn-outline-danger' onClick={() => deleteItem(item.id)}>Delete</button>
             &nbsp; <button className='btn btn-outline-info' onClick={() => editInput(item.id)}>Edit</button> </li>
          </Card.Body>
        </Card>
      ) : (
        <Card key={item.id}  className='w-50 m-auto'>
          <Card.Body >
            <input type="text" ref={myRef} className='w-50 ' />&nbsp;<button className='btn btn-outline-success' onClick={() => edititem(item.id)}>Submit</button>
          </Card.Body>
        </Card>
  
      
      )
    ))}

    </div> <br />  </div>
  )
}

export default App
