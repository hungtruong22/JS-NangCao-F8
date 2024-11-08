// FN.CALL() 
    /* là phương thức trong prototype của function constructor,
        phương thức này được dùng để gọi hàm và cũng có thể bind this cho hàm
    */

    // ví dụ (gọi hàm với call method):
        function random(){
            console.log(Math.random());
        }

        //cách 1:
        random();

        //cách 2:
        random.call();

    
    // ví dụ 2 (gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind):
        const teacher = {
            firstName: "Minh",
            lastName: "Thu",
        }

        const me = {
            firstName: "Minh",
            lastName: "Hùng",

            showFullName(){
                console.log(this);
                console.log(`${this.firstName} ${this.lastName}`);
            }
        }
        
        me.showFullName(); // output: Minh Hùng
        
        // nếu dùng me.showFullName.call() thì output là undefined undefined
        me.showFullName.call(me); // output: Minh Hùng với me là phần tử được bind
        me.showFullName.call(teacher); // output: Minh Thu 0


    // ví dụ 3 (lưu ý trong strict mode vẫn có this nếu được bind):
        'use strict';
        this.firstName = "Hoàng";
        this.lastName = "Anh";

        function showFullName1(){
            console.log(`${this.firstName} ${this.lastName}`);
        }

        showFullName1(); // output : Hoàng Anh (nếu không dung strict mode)
        showFullName1.call(); // output: can not read...
        showFullName1.call(this); // output: Hoàng Anh

    
    // ví dụ 3 (thể hiện tính kế thừa trong lập trình hướng đối tượng):
        function Animal(name, weight){
            this.name = name;
            this.weight = weight;
        }     

        function Chicken(name, weight, legs){
            Animal.call(this, name, weight); // this trong trường hợp này là minhHung
            this.legs = legs;
        }

        const minhHung = new Chicken('Minh Hùng', 68, 2);
        console.log(minhHung);



    // ví dụ 4 (mượn hàm (function borrowing), thêm ví dụ với arguments):
        function logger(){
            //console.log(...arguments); // arguments ko phải là mảng nên ko có các phương thức của mảng
            //console.log(arguments); 

            const arr = Array.prototype.forEach.call(arguments, (item) =>{
                console.log(item);
            }); // lúc này arguments chính là this và từ đó this ở trong forEach có thể lặp qua arguments
        }
        logger(1,2,3,4);

    
    // ví dụ 5(cắt mảng);

    
        function cutArr(){
            const arr1 = Array.prototype.slice.call(arguments);
            arr1.forEach((item) => {
                console.error(item);
            })
        }
        
        cutArr(1,2,3,4,5);  



        

