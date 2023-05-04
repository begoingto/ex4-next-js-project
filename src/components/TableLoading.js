import {Table} from "react-bootstrap";
import BodyLoading from "@/components/BodyLoading";

export default function TableLoading(){
    let loading = []
    for (let i=1;i<=10;i++){
        loading.push(<BodyLoading key={i} />)
    }
    return (
        <Table className="text-white">
            <thead>
            <tr role="row">
                <th role="columnheader" className="text-uppercase py-3" width={300}>Product Name</th>
                <th role="columnheader" className="text-uppercase py-3" width={300}>Price</th>
                <th role="columnheader" className="text-uppercase py-3">Category</th>
                <th role="columnheader" className="text-uppercase py-3">Photo</th>
                <th role="columnheader" className="text-uppercase py-3">Action</th>
            </tr>
            </thead>
            <tbody>
            {loading}
            </tbody>
        </Table>
    )
}