// STRICT MODE (chế độ nghiêm ngặt)
    "use strict";
    // ví dụ để hình dung strict mode ra đời để làm gì
        fullName = 'Nguyen Van A'; // Tạo ra biến fullName ở phạm vi global

        function testFunc(){
            age = 18; // Tạo ra biến age ở phạm vi global   
        }

        testFunc();
        console.log(fullName);
        console.log(age);
    
        // code trên dễ gây bug tiềm ẩn
    
    // CÁCH SỬ DỤNG STRICT MODE
        /**
         * 1. Thêm "use strict"; vào đầu file.js
                // Sử dụng strict momde cho toàn bộ file.js
                 
         * 2. Thêm "use strict"; vào ngay sau thẻ mở <script>
                <script>
                    "use strict";
                    // chỉ sử dụng strict mode trong thẻ script này;
                </script>
                
         * 3. Thêm "use strict"; vào đầu phạm vi hàm 
                function testFunc(){
                    "use strict";
                    age = 18; // Tạo ra biến age ở phạm vi global 
                }
                // chỉ sử dụng strict mode ở trong hàm testFunc 
         */
        
    // Strict mode sẽ báo lỗi khi gán lại giá trị cho thuộc tính có writable: false

    
        // ví dụ writable: true (được phép ghi)

            const student = {
                fullName: 'Nguyen Van A',
            }   
            student.fullName = 'Nguyen Van B';
            console.log(student); // output: Nguyen Van B
          
        // ví dụ writable: false (không được phép ghi)

            const student = Object.freeze( {
                fullName: 'Nguyen Van A',
            })
                // Object.freeze() : đóng băng phần code nằm trong object lại
            student.fullName = 'Nguyen Van B';
            console.log(student); // output: Nguyen Van A
                // NÓ sẽ không báo lỗi câu lệnh gán student.fullName = 'Nguyen Van B';
        
        // sử dụng strict mode để thông báo lỗi cho đoạn code trên
            "use strict";
            const student = Object.freeze( {
                fullName: 'Nguyen Van A',
            })
                // Object.freeze() : đóng băng phần code nằm trong object lại
            student.fullName = 'Nguyen Van B';
            console.log(student); // output: Nguyen Van A

            // khi dùng strict mode nó sẽ báo lỗi ở câu lệnh gán student.fullName = 'Nguyen Van B';

        // cách tạo ra thuộc tính dạng freeze

            "use strict";
            const student = {}
            Object.defineProperties(student, 'fullName', {
                value: 'Nguyen Van A', Writable: false,
            })
               
            // student.fullName = 'Nguyen Van B';
            console.log(student); // output: Nguyen Van A

    
    // Báo lỗi khi thuộc tính trùng tên
    
        // ví dụ: 
            
            function sum(a, a){
                return a+a;
            }

            console.log(sum(6, 9)); // output : 18
            // Nếu 2 biến trùng tên thì nó sẽ lấy biến sau cùng

            // Nếu dùng strict mode thì nó sẽ báo lỗi

            "use strict";

            function sum(a, a){
                return a+a;
            }

            console.log(sum(6, 9)); // output : báo lỗi     

    
    // Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block 
        
        // ví dụ :

        // khi không dùng strict mode:

        {
            function sum(a, b){
                return a+b;
            }
        }

        console.log(9, 6); // output: 15

        // Khi dùng strict mode:

        "use strict";

        {
            function sum(a, b){
                return a+b;
            }
        }

        console.log(9, 6); // output: báo lỗi
        // khi hàm nằm trong block code thì hàm chỉ sử dụng trong bock code mà thôi khi dùng strict mode

     
    // Không đặt tên biến, tên hàm bằng một số từ khóa "nhạy cảm" của ngôn ngữ
        
        // ví dụ:

        // khi ko dùng strict mode

        const private = 123;
        console.log(private); // output: 123

        // khi dùng strict mode

        "use strict"

        const protected = 123;
        console.log(protected); // output: báo lỗi


    // CÔNG DỤNG CỦA STRICT MODE
    
        // Tránh quên từ khóa khai báo biến
        // Tránh trùng tên biến dẫn tới lỗi logic
        // Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

    
    //  BÀI TẬP VẬN DỤNG:
    
        "use strict"
        var hero = "Doctor Strange"
        
        function MultiverseOfMadness() {
        var universe = 616
        }
        
        MultiverseOfMadness()
        
        console.log(hero) //Output: Doctor Strange
        console.log(universe) //Output: Uncaught ReferenceError: universe is not defined.

        // Giải thích:
        
        /*
            Với use strict mode, biến universe chỉ được khai báo trong phạm vi của một function. 
            Khi đó, nếu gọi đến biến đó ở ngoài phạm vi khai báo sẽ dẫn đến lỗi.
         */

        

    

            
            