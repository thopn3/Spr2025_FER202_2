import { useEffect, useState } from "react";

// Hàm mô phỏng action lấy dữ liệu từ DB của REST API (Back-End)
const fetchUser = ()=>{
  return new Promise((resolve) => {
    // Giả định thời gian xử lý action sau 1 khoảng thời gian
    setTimeout(()=>{
      resolve({id:1, name: "Nguyễn Văn A"});
    }, 3000);
  })
}

function Example1() {
    // Sử dụng hàm useState (HOOK) để chứa dữ liệu trả về từ API
    const [id, setId] = useState("Loading ....");
    const [name, setName] = useState("Loading ...");
  
    // Gửi request tới API (gọi hàm)
    useEffect(()=>{
      fetchUser()
        .then(({id, name})=>{ // Phân rã đối tượng trả về từ fetchUser
          setId(id);
          setName(name);
        });
    });
  
    return (
      <>
        <div>Id: {id}</div>
        <div>Name: {name}</div>
      </>
    );
  }
  
  export default Example1;