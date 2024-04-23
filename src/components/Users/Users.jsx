import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to delete this?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
              denyButton: 'order-3',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://coffee-store-server-six-phi.vercel.app/user/${id}`, {
                    method: 'DELETE'
                    })
                    .then(res=>res.json)
                    .then(data=>{
                    console.log(data)
                    Swal.fire('Deleted', '', 'success')
                        // const remaining = users.filter(user=>user._id !== _id)
                        // setUsers(remaining)
                })
                const usersRemaining = users.filter(cof => cof._id !== id)
                setUsers(usersRemaining)
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    return (
        <div>
            <h2>Users {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>last logged in</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map(user=> <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>{
                                <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                                }</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;