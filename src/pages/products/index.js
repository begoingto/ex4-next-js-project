import Container from "react-bootstrap/Container";
import DataTable from 'react-data-table-component';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import Image from "next/image";
import TableLoading from "@/components/TableLoading";


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
        cell: row => (
            <Image
                src={row.images[0]}
                alt="thumbnail"
                className="img-thumbnail p-img"
                width={70}
                height={70}
            />)
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

function Products(){

    const [products,setProducts] = useState([])
    const [prods,setProds] = useState([])
    const [search,setSearch] = useState("")
    const [loading,setLoading] = useState(true)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products`)
            .then(res => res.json())
            .then(data => {
                setProds(data)
                setProducts(data)
                setLoading(false)
            })
    },[])

    useEffect(() => {
        if (search.length > 2){
            const pFilter = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
            setProducts(pFilter)
        }else {
            setProducts(prods)
        }
    },[prods, products, search])

    return (
        <>
            <Container className="p-product">
                <h1>Products List</h1>
                <Card className="bg-dark text-white border-danger">
                    <Card.Header className="d-flex justify-content-end">
                        <Form.Control onChange={handleSearch} className="bg-dark text-white" name={search} style={{width: "350px"}} placeholder="Search product name" />
                    </Card.Header>
                    <Card.Body className="p-0 overflow-hidden">
                        {loading ? <TableLoading /> :
                            <DataTable
                                columns={columns}
                                data={products}
                                pagination
                            />
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Products