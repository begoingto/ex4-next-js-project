import Container from "react-bootstrap/Container";
import DataTable from 'react-data-table-component';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";


const columns = [
    {
        name: 'Product Name',
        selector: row => row.title,
    },
    {
        name: 'Price',
        selector: row => row.price,
        cell: row => row.price + " $",
    },
    {
        name: 'Category',
        selector: row => row.category,
        cell: row => row.category.name
    },
    {
        name: 'Photo',
        selector: row => row.images,
        cell: row => (<img src={row.images[0]} className="img-thumbnail p-img" alt="thumbnail" />)
    },
    {
        name: 'Action',
        selector: row => row.action,
        maxWidth: '200px',
    	cell: row => (
            <div className="d-flex gap-2">
                <Button size="sm" type="button" variant="primary"><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button size="sm" type="button" variant="danger"><i className="bi bi-trash2"></i> Delete</Button>
            </div>
        ),
    },
];

function Products({prods}){

    const [products,setProducts] = useState(prods)
    const [search,setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    useEffect(() => {
        if (search.length > 2){
            setProducts(prods.filter(p => p.title.toLowerCase().includes(search.toLowerCase())))
        }else {
            setProducts(prods)
        }
    },[search])
    console.log(products)

    return (
        <>
            <Container className="p-product">
                <h1>Products List</h1>
                <Card className="bg-dark text-white border-danger">
                    <Card.Header className="d-flex justify-content-end">
                        <Form.Control onChange={handleSearch} className="bg-dark text-white" name={search} style={{width: "350px"}} placeholder="Search product name" />
                    </Card.Header>
                    <Card.Body className="p-0 overflow-hidden">
                        <DataTable
                            columns={columns}
                            data={products}
                            pagination
                        />
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products?limit=20&offset=1`)
    const products = await res.json()
    return {
        props: {
            prods: products
        }
    }
}

export default Products