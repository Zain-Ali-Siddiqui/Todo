import React, { useState } from "react";
import { EditFilled, CloseOutlined, SendOutlined, DeleteOutlined } from '@ant-design/icons'
import './todo.css'
function Tod() {
    const [data, setData] = useState([])
    const [todo, setTodo] = useState('')
    const [indexvalue, setIndexvalue] = useState()
    const [show, setShow] = useState("hide")



    const clearAll = () => {
        setData([])
    }
    const addtodo = () => {
        if (todo === "") {
            alert("please fill Todo")
        }
        else {
            let obj = {
                Todo: todo,
            }
            setData(data.concat([obj]))
            console.log(data, "array of object")
            setTodo("")
        }
    }

    const updated = () => {
        data[indexvalue].Todo = todo
        setShow("hide")
        setTodo("")
    }

    return (
        <>
            <div className="head">
                <h1 className="h1"  >ToDo App</h1>
                <div className="div"  >
                    <div className="upper_div">
                        <div>
                            <h3> Todo </h3>
                            <input value={todo} onChange={(e) => { setTodo(e.target.value) }} />
                        </div></div><br></br>
                    {show === "hide" ? <button className="button" onClick={addtodo} >Add <SendOutlined /></button> : <button className="button"
                        onClick={updated}>Update ToDo </button>}
                    <div >
                        {data.map((v, i) => {
                            return (
                                <div>
                                    <br />
                                    <div className="inputdiv">
                                        <td className="charge"  >{v.Todo}</td>
                                    </div>
                                    {show === "hide" ?
                                        <div className="butt" style={{ marginTop: "-25px" }}>
                                            <div >
                                                <button className="but" onClick={() => {
                                                    let todos = data[i].Todo
                                                    setTodo(todos)
                                                    setIndexvalue(i)
                                                    setShow("show")
                                                }}
                                                > <EditFilled /></button>
                                                <button className="but" style={{ marginLeft: "506px" }} onClick={() => {

                                                    let deleteone = data.filter((value, index) => {
                                                        return i != index
                                                    })
                                                    console.log(deleteone, "delete one")
                                                    setData(deleteone)
                                                }}> <CloseOutlined /></button>
                                            </div>

                                        </div>
                                        :
                                        <div style={{ marginTop: "-27px" }}  >
                                            <button className="butDis" > <EditFilled /> </button>

                                            <button className="butDs"   ><CloseOutlined />  </button>
                                        </div>

                                    }
                                </div>

                            )
                        })}
                    </div>

                    {show !== 'hide' || data.length <= 1 ? <button className='button' style={{ opacity: "0.4", marginTop: "20px", marginBottom: "20px" }}  >Delt All<DeleteOutlined /></button>
                        : <button onClick={clearAll} style={{ marginTop: "20px", marginBottom: "20px" }} className='button'  >Delt All<DeleteOutlined /></button>}
                </div>

            </div>
        </>
    )
}
export default Tod;