//tạo 1 mảng danh sách học viên
let students = [
  {
    id: 1,
    fname: "Nguyễn Quang Huy",
    email: "huynguyen@gmail.com",
    sdt: 12324567768,
    from: "Thái Bình",
    gender: "",
  },
  {
    id: 2,
    fname: "Trinh Văn Hiếu",
    email: "huynguyen@gmail.com",
    sdt: 12324567768,
    from: "Thái Bình",
    gender: "",
  },
  {
    id: 3,
    fname: "Nguyễn Thị Tâm",
    email: "huynguyen@gmail.com",
    sdt: 12324567768,
    from: "Thái Bình",
    gender: "",
  },
  {
    id: 4,
    fname: "Nguyễn văn A",
    email: "huynguyen@gmail.com",
    sdt: 12324567768,
    from: "Thái Bình",
    gender: "",
  },
  {
    id: 5,
    fname: "Nguyễn Thị Màu",
    email: "huynguyen@gmail.com",
    sdt: 12324567768,
    from: "Thái Bình",
    gender: "",
  },
];
let tbody = document.getElementById("tbody");
let formStudent = document.getElementById("form-students");
let idStt = 0
//in ra màn hình đanh sách
function renderStudents() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    idStt = i +2
    tbody.innerHTML =
      tbody.innerHTML +
      `
    <tr id="${students[i].id}">
                    <td id="id">${students[i].id}</td>
                    <td id="name">${students[i].fname}</td>
                    <td id="email">${students[i].email}</td>
                    <td id="sdt">${students[i].sdt}</td>
                    <td id="from">${students[i].from}</td>
                    <td id="gender">${students[i].gender}</td>
                    <td id="select">
                        <button class="btn-edit">edit</button>
                        <button class="btn-delete">delete</button>
                    </td>
                </tr>
    `;
  }
}
renderStudents();

// thêm học viên mới
formStudent.onsubmit = function(event){
    event.preventDefault();
    console.log(formStudent.from.value);
    if(formStudent.nameInput.value !== "" &&
    formStudent.email.value !== "" &&
    formStudent.phone.value > 9 &&
    formStudent.from.value !== ""
    ){
        let std={
            id: idStt,
            fname: formStudent.nameInput.value,
            email: formStudent.email.value,
            sdt: formStudent.phone.value,
            from: formStudent.from.value,
            
            gender: "",
            };
            students.push(std);
            renderStudents();
            formStudent.nameInput.value=  "";
            formStudent.email.value= "";
            formStudent.phone.value= "";
            formStudent.from.value= "";
            alert("đã thêm vào danh sách")
        }else{
            alert("vui lòng nhập lại thông tin")
        }
}

//xóa và sửa danh sách học viên
tbody.onclick = function(event){
    if(event.target.classList.contains("btn-delete")){
        event.target.parentElement.parentElement.remove();
    }
    if(event.target.classList.contains("btn-edit")){
        idStt = event.target.parentElement.parentElement.id;
        formStudent.nameInput.value = students[idStt].fname;
        formStudent.email.value = students[idStt].email;
        formStudent.phone.value = students[idStt].sdt;
        formStudent.form.value = students[idStt].from;

    }
    renderStudents()
}
tbody()
