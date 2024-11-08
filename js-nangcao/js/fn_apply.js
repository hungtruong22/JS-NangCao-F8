// FN.APPLY()
    /*
        Phương thức này cho phép gọi một hàm với một this(bind) và truyền đối số cho hàm gốc dưới dạng mảng
    */

    
    // ví dụ 1 (hiểu về cách vận hành của apply):
        const teacher = {
            firstName: "Minh",
            lastName: "Thu"
        }

        function greet(greeting, message){
            return `${greeting} ${this.firstName} ${this.lastName}. ${message}`; // this trong trường hợp này là teacher
        }

        let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live 1 tiếng)']);
        console.log(result); // output: Em chào cô Minh Thu. Cô dạy môn gì thế ạ? (Đã xem cô live 1 tiếng)

        // so sánh với call method

        result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live 1 tiếng)');
        console.log(result); // output: Em chào cô Minh Thu. Cô dạy môn gì thế ạ? (Đã xem cô live 1 tiếng)

    
    // ví dụ 2 (function borrowing):
        const teacher1 = {
                firstName: "Minh",
                lastName: "Thảo",
                isOnline: false,

                goOnline(){
                    this.isOnline = true;
                    console.log(`${this.firstName} ${this.lastName} is Online`);
                },

                goOffline(){
                    this.isOnline = false;
                    console.log(`${this.firstName} ${this.lastName} is Offline`);
                }
        }

        const me = {
            firstName: "Minh",
            lastName: "Hùng",
            isOnline: false,
        }
        console.log("Teacher: ", teacher1.isOnline); // output: false
        teacher1.goOnline();
        console.log("Teacher: ", teacher1.isOnline); // output: true

        console.log("-------------------");

        console.log("Student: ", me.isOnline); // output: false
        teacher1.goOnline.apply(me);
        console.log("Student: ", me.isOnline); // output: true


    
    // ví dụ 3 (extends):
        function Animal(name, weight){
            this.name = name;
            this.weight = weight;
        }    

        // cách 1:

        // function Parrot(name, weight){
        //     Animal.apply(this, [name, weight]);
        //     this.speak = function(){
        //         console.log("Nhà có khách!");
        //     }
        // }

        // cách 2:
        function Parrot(){
            Animal.apply(this, arguments); // arguments : đại diện cho các tham số, có tính chất tương tự mảng
            this.speak = function(){
                console.log("Nhà có khách!");
            }
        }

        const conVet = new Parrot("Vẹt", 300);
        console.log(conVet);



// SO SÁNH BIND(), CALL(), APPLY()
    // GIỐNG NHAU:

        // 1. Cú pháp truy cập (fn.bind(), fn.call(), fn.apply());

        // 2. Là các methods được thừa kế từ Function.prototype
            function fn(){}

            console.log(fn.bind === Function.prototype.bind); // true
            console.log(fn.call === Function.prototype.call); // true
            console.log(fn.apply === Function.prototype.apply); // true


    // KHÁC NHAU
        // 1. Các đối số và cách hoạt động

            /* BIND METHOD
                
                - Trả ra hàm mới với this tham chiếu tới thisArg.
                - Không thực hiện gọi hàm.
                - Nếu được bind kèm 'arg1, arg2, ...' thì các đối số này sẽ được ưu tiên hơn
            */

                const newFn = fn.bind(thisArg, arg1, arg2);
                newFn(arg1, arg2);

            
            /*  CALL METHOD
                
                - Thực hiện bind this với thisArg và thực hiện gọi hàm
                - Nhận các đối số cho hàm gốc từ 'arg1, arg2,...'
            */

                fn.call(thisArg, arg1, arg2);



            /*APPLY METHOD
                - Thực hiện bind this với thisArg và thực hiện gọi hàmThực hiện bind this với thisArg và thực hiện gọi hàm
                - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng '[arg1, arg2,...]'
            */

                fn.apply(thisArg, [arg1, arg2]);

