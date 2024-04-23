import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, test, category, detail, photo}
        console.log(newCoffee)

        fetch('https://coffee-store-server-six-phi.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
            })
            .then(res=>res.json)
            .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'User added successfully',
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
            <h2 className="text-5xl text-center font-bold mb-9">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} className="space-y-10">
                <div className="flex gap-10">
                    <input type="text" placeholder="Coffee name" name="name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Available quantity" name="quantity" className="input input-bordered w-full" />
                </div>
                <div className="flex gap-10">
                    <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered w-full" />
                    <input type="text" placeholder="Test" name="test" className="input input-bordered w-full" />
                </div>
                <div className="flex gap-10">
                    <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                    <input type="text" placeholder="Detail" name="detail" className="input input-bordered w-full" />
                </div>
                <div className="">
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block"/>
            </form>
        </div>
    );
};

export default AddCoffee;