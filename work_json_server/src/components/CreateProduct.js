import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const [products, setProducts] = useState([]);
    const [msgPName, setMsgPName] = useState("");
    const [msgPPrice, setMsgPPrice] = useState("");
    const pName = useRef("");
    const pPrice = useRef(0);
    const category = useRef("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:9999/products")
            .then(result => setProducts(result.data));
    }, []);

    const uniqueCategories = [...new Set(products.flatMap(item => item.category))];

    const validInput = () => {
        let flag = true;
        if(pName.current.value==""){
            flag=false;
            setMsgPName("Product name is required");
        }
        if(pPrice.current.value==0){
            flag=false;
            setMsgPPrice("Price is required");
        }

        if(flag==true)
            return true;
        else
            return false;
    }

    // Xử lý save dữ liệu vào DB
    const handleSave = () => {
        if(validInput()==true){
            // Lưu dữ liệu vào DB
            axios.post(
                "http://localhost:9999/products", 
                {
                    name: pName.current.value,
                    price: parseFloat(pPrice.current.value),
                    category: [category.current.value]
                }
            )
            .then(()=>{
                alert("Create successfully!");
                navigate('/products');
            })
            .catch(err => console.error(err));
        }
    }

    return (
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control ref={pName}/>
                    {msgPName.length>0?<Form.Label style={{color:"red"}}>{msgPName}</Form.Label>:<></>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" min={0} max={500} ref={pPrice}/>
                    {msgPPrice.length>0?<Form.Label style={{color:"red"}}>{msgPPrice}</Form.Label>:<></>}
                </Form.Group>
                <Form.Select ref={category}>
                    {
                        uniqueCategories?.map(c => (
                            <option value={c}>{c}</option>
                        ))
                    }
                </Form.Select>
                <Button onClick={()=>handleSave()}>Save</Button>
            </Form>
        </Container>
    )
}

export default CreateProduct;