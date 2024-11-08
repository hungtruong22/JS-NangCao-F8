// FN.BIND()
    // Bind : ràng buộc

    // Phương thức bind() cho phép ràng buộc "this" cho một phương thức (function)

        // ví dụ:

            this.firstName = "Minh"; // this ở phạm vi window (trỏ về đối tượng window)
            this.lastName = "Hùng"; // this ở phạm vi window (trỏ về đối tượng window)

            const teacher = {
                firstName: "Minh",
                lastName: "Thảo",
                
                getFullName(){
                    return `${this.firstName} ${this.lastName}`;
                },

                getFullName1(data1, data2){
                    console.warn(data1, data2);
                    return `${this.firstName} + ${this.lastName}`;
                }
            }

            const student = {
                firstName: "Hoàng",
                lastName: "Anh",
            }

            // case 1:
            console.log(teacher.getFullName()); // output: "Minh Thảo"

            //case 2:
            const getTeacherName = teacher.getFullName;
            console.log(getTeacherName()); /* output: "Minh Hùng";
                vì khi gọi 1 hàm không thông qua đối tượng(đằng trước dấu chấm)
                thì từ khóa "this" sẽ trỏ ra đối tượng globla (phạm vi window) nên kết quả là Minh Hùng
            */
            
            const getTeacherName1 = teacher.getFullName.bind(teacher);
            console.log(getTeacherName1());

            const getStudentName = teacher.getFullName.bind(student);
            console.log(getStudentName());

            const getTeacherName2 = teacher.getFullName1.bind(teacher);
            console.warn(getTeacherName2('DATA1', 'DATA2'));

            const getTeacherName3 = teacher.getFullName1.bind(teacher, 'DATA3', 'DATA4');
            console.error(getTeacherName3());

            
        
    // ĐẶC TÍNH
        // 1. Phương thức bind() sẽ trả về một hàm mới (không sửa this mà trả về một hàm mới với this mới)
        
        // 2. Có thể nhận các đối số như hàm ban đầu

            // ví dụ: hàm getFullName1 ở ví dụ 1 

        /* bind() nhận n đối số với đối số đầu tiên là object ràng buộc với this, 
        từ đối số thứ 2 trở đi tương ứng với giá trị tham số mà bạn defined ở hàm cần bind() */
            
            // ví dụ: getTeacherName3 ở ví dụ 1


    
    // ỨNG DỤNG CỦA BIND() TRONG THỰC TẾ
    
        // ví dụ:
            
        const teacher1 = {
            firstName: "Minh",
            lastName: "Anh",
            
            getFullName(){
                console.log(`${this.firstName} ${this.lastName}`);
            }
        }

            teacher1.getFullName();
        
        // Bài toán:
            /*
                khi click vào 1 cái button thì nó sẽ in ra cái getFullName
            */

        const button = document.querySelector('button');
        // cách 1:
        button.onclick = function(){
            teacher1.getFullName();
        }

        // cách 2:
        
        button.onclick = teacher1.getFullName.bind(teacher1);



        // ví dụ 2(thực tế hay dùng): 
            const $ = document.querySelector.bind(document);
            const $$ = document.querySelectorAll.bind(document);

            // cách 1:
                console.log(document.querySelector('#heading').innerText);
            
            // cách 2:
                console.log($('#heading').innerText);
    
    // VÍ DỤ ỨNG DỤNG THƯC TẾ (CÁC KIẾN THỨC ĐÃ HỌC) (APPOTO.HTML)
    
    // KẾT LUẬN
        /*
            1. Phương thức bind() cho phép ràng buộc "this" cho một phương thức (function)
            2. Phương thức bind() sẽ trả về một hàm mới với context đươc bind
            3. Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc
        */




            