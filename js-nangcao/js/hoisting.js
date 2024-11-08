//  HOISTING - kéo lên / đưa lên
// hoisting là đưa phần khai báo lên đầu phạm vi

    // ví dụ 1 (hoisting với var) :
        console.log(age); // undefined
        console.log(fullName); // ReferenceError: fullName is not defined
        var age = 16;

        // chuyển thành hoisting
        var age;

        console.log(age); // undefined
        //console.log(fullName); // ReferenceError: fullName is not defined
        age = 16;
        console.log(age); 

    // ví dụ 2 (hoisting với hàm(function declaration)) :
        console.log(sum(6,9)); // 15

        function sum(a, b){
            return a+b;
        }
     
    // ví dụ 3 (hoisting với let, const): 
        {
            console.log(fullName); // ReferenceError: Cannot access 'fullName' before initiallâztion
            let fullName = "Nguyen Van A";
        }    



// BÀI TẬP VẬN DỤNG
    
    // BÀI TẬP 1:    
        const counter1 = makeCounter();
        console.log(counter1());

        function makeCounter(){
            let counter = 0;

            return increase;
            
            function  increase(){
                return ++counter;
            }
        }

        // output của bài tập trên là : 1;

    // BÀI TẬP 2:
    
        var tip = 100;

        (function () {
        console.log("I have $" + husband());
        
        function wife() {
            return tip * 2;
        }
        
        function husband() {
            return wife() / 2;
        }
        
        var tip = 10;
        })();

        // Output: I have $NaN

        // giải thích:
        
        /*
            - Ở đây chúng ta có một IIFE (Biểu thức hàm được gọi ngay lập tức)
        - Biến tip sẽ là undefined vì var tip = 10 đã được khai báo bên trong hàm. 
        Biến tip bên trong hàm được hoisted với giá trị mặc định là undefined.
        Khi thực hiện tính toán với 1 biến có giá trị là undefined thì kết quả trả về sẽ là NaN.       
        - Nếu chúng ta không khai báo var tip = 10 ở cuối hàm thì đáp án sẽ là "I have $100".
        */




    