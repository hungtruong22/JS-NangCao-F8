// Scope (phạm vi) trong JS

/**
 * Các phạm vi của Scope
 * Global- Toàn cầu
 * Code block - Khối mã: const , let
 * Local scope - Hàm: var, function
 */

// ví dụ về phạm vi Global
    
    // ví dụ 1:
        var message = "Học về Scope"; // biến ở phạm vi Global

        function Logger(){
            console.log(message);
        }

        Logger();

    // ví dụ 2
        // function log(){ // hàm ở phạm vi global 
        //     console.log("In ra log");
        // }

        // function Logger(){
        //     log();
        // }

        // Logger();
// ví dụ về phạm vi Code block
    // khi console.log(age); nằm trong dấu {} thì in ra được kết quả age
        {
            const age = 18; // chỉ khai báo bằng let hoặc const
            console.log(age);
        }

        // khi console.log(age); nằm ngoài dấu {} thì in ra được kết quả age

        // {
        //     const age = 18; // chỉ khai báo bằng let hoặc const
        // }    
        // console.log(age);

// ví dụ về phạm vi local scope
        function logger1(){
            var fullName = "Minh Hùng";
            console.log(fullName);
        }
        logger1();


// KHI GỌI HÀM LUÔN CÓ MỘT PHẠM VI MỚI ĐƯỢC TẠO RA
// CÁC HÀM CÓ THỂ TRUY CẬP CÁC BIẾN ĐƯỢC KHAI BÁO TRONG PHẠM VI CỦA NÓ VÀ BÊN NGOÀI PHẠM VI CỦA NÓ

// CÁCH THỨC MỘT BIẾN ĐƯỢC TRUY CẬP
    const age = 18;
    {
        const age = 16;
        {
            const age = 14;
            {
                {
                    const age = 12;
                    console.log(age);
                }
            }
        }
    }



// KHO NÀO MỘT BIẾN BỊ XÓA KHỎI BỘ NHỚ
    // VÒNG ĐỜI
    // Biến toàn cầu
        // Bị xóa khỏi bộ nhớ khi chương trình bị thoát
    
    // Biến trong code block và trong hàm
        // Bị xóa khi khối đó thực thi xong 

        // ví dụ 1:
            {
                const age1 = 16;
                console.log(age1);
            } 

            // ví dụ 2:
            function logger(){
                const rand = Math.random();
                console.log(rand);
            }
            
            logger();

    // Biến trong hàm được tham chiếu bởi một hàm
        // ví dụ :
        function makeCouter(){
            let couter = 0;

            function increase(){
                return ++couter;                
            }
            return increase;
        }

        const  increase1 = makeCouter();
        console.log(increase1());
        console.log(increase1());
        console.log(increase1());
