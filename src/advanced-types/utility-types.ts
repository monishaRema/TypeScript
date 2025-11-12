type Product = {
    id: number,
    name: string,
    price: string,
    stock: number,
    color?: string,
    isActive?: boolean
}
// select only what you need with pick
type ProductSummery = Pick<Product, "id" | "name" | "price">

// select only what you need to drop
type ProductSummeryDrop = Omit<Product, "id" | "name" | "price" >

// Make all the property of the type required
type ProductPropertyRequired = Required<Product>


// make all the property optional

type ProductOptional = Partial<Product>

// Make the type readonly
type ProductReadonly = Readonly<Product>