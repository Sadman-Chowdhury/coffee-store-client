import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee, coffees, setCoffees}) => {

    const {_id, name, quantity, supplier, test, category, photo} = coffee

    const handleDelete = _id => {
        console.log(_id)
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
              fetch(`https://coffee-store-server-six-phi.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                    })
                    .then(res=>res.json)
                    .then(data=>{
                    console.log(data)
                    Swal.fire('Deleted', '', 'success')
                        // const remaining = users.filter(user=>user._id !== _id)
                        // setUsers(remaining)
                })
                const remaining = coffees.filter(cof => cof._id !== _id)
                setCoffees(remaining)
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} className="w-[300px]" alt="Movie"/></figure>
        <div className="flex justify-between w-full p-5">
            <div className="">
                <h2 className="card-title">Name: {name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{test}</p>
                <p>{category}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="join join-vertical space-y-4">
                    <button className="btn join-item">View</button>
                    <Link to={`updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                    <button onClick={()=>handleDelete(_id)} className="btn text-red-500 join-item">X</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;