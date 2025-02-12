// Khai báo thư viện -> Sử dụng class Component
import React from "react";
// Sử dụng JSX để tạo mới 1 class component
class MySection extends React.Component {
    render() {
        return (
            <section>
                Hello MySection component
                {/* Cho phép nhúng component khác tại đây */}
                <div>{this.props.children}</div>
            </section>
        )
    }
}

class TextControl extends React.Component {
    render() {
        return (
            <input type="text" name="txtNumber"
                placeholder="Enter a number" />
        )
    }
}

// Định nghĩa 1 mảng các đối tượng
const products = [
    { id: 1, name: "Product 1", price: 10.5 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20.6 }
];

// Viết 1 component đọc dữ liệu và trả về 1 danh sách
// thiết kế dạng bảng
class PrintProduct extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(p => (
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

// Xuất khẩu component
export default MySection;
export { TextControl, PrintProduct }