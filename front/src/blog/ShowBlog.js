import axios from 'axios';
import { useState, useEffect } from 'react';


const URI = 'http//://localhost:8000/blogs/';

const CompShowBlogs = () =>{
     const [blogs, setBlog] = useState([]);
     useEffect( ()=>{
        getBlogs()
    },[]);


const getBlogs = async ()=>{
    const res = await axios.get(URI);
    setBlog(res.data);

}
const deleteBlog = async (id)=>{
    axios.delete(URI, id);
    getBlogs();
}
    return(
        <div className='container'>
          <div className='row'>
            <div className='col'>
                <table className='table'>
                <thred className='table-primary'>
                    <tr>
                        <th></th>
                        <th>titulo</th>
                        <th>contenido</th>
                        <th>acciones</th>
                    </tr>

                </thred>
                <tbody>
                    {  blogs.map ( (blog)=>(
                        <tr key = {blog.id} >
                            <td></td>
                            <td>blog.title</td>
                            <td>blog.content</td>
                            <td>
                                <button onClick={ ()=>deleteBlog(blog.id)} className='btn btn-danger' >Eliminar</button>
                            </td>
                         <td></td>
                            
                        </tr>
                    ))

                    }
                </tbody>
                </table>
            </div>

          </div>


        </div>
    );

}

export default CompShowBlogs;