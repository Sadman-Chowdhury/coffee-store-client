import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, category, detail, photo} = coffee

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity, supplier, test, category, detail, photo}
        console.log(updatedCoffee)

        fetch(`https://coffee-store-server-six-phi.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
            })
            .then(res=>res.json)
            .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Coffee updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            if(data.insertedId){
                alert('User added successfully')
                form.reset()
                }
            })
    }

    return (
        <div className="border bg-gray-200 p-20">
            <h2 className="text-5xl text-center font-bold mb-9">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee} className="space-y-10">
                <div className="flex gap-10">
                    <input type="text" placeholder="Coffee name" defaultValue={name} name="name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Available quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full" />
                </div>
                <div className="flex gap-10">
                    <input type="text" placeholder="Supplier" defaultValue={supplier} name="supplier" className="input input-bordered w-full" />
                    <input type="text" placeholder="Test" name="test" className="input input-bordered w-full" />
                </div>
                <div className="flex gap-10">
                    <input type="text" placeholder="Category" defaultValue={category} name="category" className="input input-bordered w-full" />
                    <input type="text" placeholder="Detail" defaultValue={detail} name="detail" className="input input-bordered w-full" />
                </div>
                <div className="">
                    <input type="text" placeholder="Photo URL" defaultValue={photo} name="photo" className="input input-bordered w-full" />
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block"/>
            </form>
        </div>
    );
};

export default UpdateCoffee;