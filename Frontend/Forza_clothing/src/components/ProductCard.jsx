const productCard=({ product})=>(
    <div classname="bg-white shadow-md rounded-xl p-4">
        <img
            src={product.img}
            alt={product.name}
            classname="w-full h-40 object-cover rounded-md"
        />
        <h2 classname="text-lg font-bold mt-2">{product.name}</h2>
        <p classname="text-grey-600">{product.description}</p>
        <p classname="text-black-600 font-semibold">LKR {product.price}</p>
    </div>
);

export default productCard;