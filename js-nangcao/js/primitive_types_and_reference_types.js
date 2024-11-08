// PRIMITIVE TYPES AND REFERENCE TYPES (KIỂU THAM TRỊ VÀ KIỂU THAM BIẾN)

    // PRIMITIVE DATA TYPES (VALUE TYPES) : KIỂU DỮ LIỆU NGUYÊN THỦY (NHÓM KIỂU THAM TRỊ)

        // Khi gán cho nó 1 giá trị thì nó sẽ lưu giá trị đó. Tại một thời điểm, các kiểu dữ liệu nguyên thủy chỉ chứa cụ thể 1 giá trị mà thôi

            // ví dụ : Kiểu Boolean tại 1 thời điểm chỉ có thể lưu true hoăc false mà thôi. Chứ không thể lưu đồn thời cả true và false được 

        /**
         * - String
         * - Number
         * - Boolean
         * - BigInt
         * - Symbol
         * - Undefined
         * - Null
         */

            // Ví dụ 1:
                let a = 1; // Tạo ra biến a, cấp một ô nhớ, lưu 1 vào ô nhớ 
                let b = a; // Tạo ra biến b, cấp một ô nhớ khác, sao chép trị của a(là 1) vào ô nhớ mới
                
                a = 2; // Sửa giá trị của a trong ô nhớ của a thành 2

                console.log(b); // output: 1

    // NON-PRIMITIVE DATA TYPES (REFERENCE TYPES) : KIỂU DỮ LIỆU KHÔNG NGUYÊN THỦY, KIẾU DỮ LIỆU PHỨC TẠP (NHÓM KIỂU THAM CHIẾU)
        // Thuộc nhóm đối tượng

        /**
         * - Object
         * - Array
         * - Function
         */

            // Ví dụ 1:
            let a1 = {
                name: "Porsche"
            } // Tạo ra biến a1, cấp một ô nhớ , lưu { name: "Porsche" } vào ô nhớ, trả vè địa chỉ đã lưu và gán cho biến a1

            let b1 = a1; // Tạo biến b1, trỏ biến b1 đến cùng địa chỉ ô nhớ của biến a1
            a1.name = "BMW"; // Sửa gái trị của key name trong ô nhớ thành BMW

            console.log(b1); // output : BMW

            // Ví dụ 2:
                // Trường hợp Object chứa Object con
                
                const student = {
                    name: "Minh Hung",
                    profile: {
                        firstName: "Minh",
                        lastName: "Hung",
                        introduction: "Boy",
                    }
                }
                
                // Nó sẽ tạo ra2 vùng nhớ, vùng nhớ đầu tiên lưu giá trị của profile, vùng nhớ thứ 2 lưu giá trị của student
            
            // Ví dụ 3:
                const student1 = {
                    name: "Minh Hung",
                    profile: {
                        firstName: "Minh",
                        lastName: "Hung",
                        introduction: "Boy",
                    }
                }

            const studentProfile = student1.profile;

            student1.profile.introduction = "Good Boy";

            console.log(studentProfile.introduction); // output: Good Boy vì cả 2 đều trỏ vào cùng một vùng nhớ

    
        
        
        
    // DATA TYPES WITH FUNCTION
        // ví dụ 1:
            function sum(a,b){
                a = 0;
                b = 0;
                console.log(a,b);
            }

            const c= 1; // kiểu tham trị
            const d = 2; // kiểu tham trị

            sum(c,d); // output: 0 0
            console.log(c,d); // output: 1 2

        // Ví dụ 2:
            function func(obj){
                obj.name = "Mercedes";
                console.log(obj);
            }
            
            const a2 = {
                name: "BMW",
            }

            func(a2); // output: Mercedes

            console.log(a2); // output: Mercedes

            // giải thích: cả 2 đều trỏ vào 1 địa chỉ

            // Ví dụ 2 đươc gọi là SIDE EFFECT (Tác dụng phụ, điều không mong muốn)

        
        // Ví dụ 3: 
            // cách 1:
            function createCar(obj){
                obj = JSON.parse(JSON.stringify(obj));
                obj.name = "Mercedes";
                return obj;
            }
            
            const car = {
                name: "BMW",
            }

            const newCar = createCar(car);

            console.log(car); // output: BMW
            console.log(newCar); // output: Mercedes

           
            // cách 2: chỉ sử dụng cách này khi Object có 1 cấp (không có Object lồng bên trong) mà thôi
            function createCar(obj){
                obj = {...obj};
                obj.name = "Mercedes";
                return obj;
            }
            
            const car1 = {
                name: "BMW",
            }

            const newCar1 = createCar(car1);

            console.log(car1); // output: BMW
            console.log(newCar1); // output: Mercedes

    // CHÚ Ý:
        
        // So sánh 2 Object
            const a3 = {
                name: "BMW",
            }

            const b3 = {
                name: "BMW",
            }

            console.log(a === b); // outputL false (vì cả 2 lưu vào 2 vùng nhớ khác nhau)

            // Nếu gán b3 = a3 thì output sẽ là true (vì khi đó cả a3 và b3 đều trỏ vào 1 địa chỉ vùng nhớ)

    
    
    // BÀI TẬP VẬN DỤNG:
        const iphone13 = {
            screen: 'OLED6.7"Super Retina XDR',
            chip: 'Apple A15 Bionic',
            ram: '6 GB'
        }

        const iphone11 = iphone13
        iphone11.ram = '12 GB'
        const iphone6 = iphone11
        console.log(iphone6 === iphone13) // Output : true     


        // Giải thích:

        /*
            const iphone11 = iphone13 thì iphone11 sẽ trỏ về cùng vùng nhớ của iphone13.

            const iphone6 = iphone11 thì iphone6 sẽ trỏ về cùng vùng nhớ của iphone11.

            Lúc này iphone13, iphone11 và iphone6 cùng trỏ về một vùng nhớ.
        */