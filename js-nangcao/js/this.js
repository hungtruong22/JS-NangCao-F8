//  THIS

    // ví dụ:
        const iPhoneXsMax = {
            // Thuộc tính (property)
            name: "iPhone Xs Max",
            color: "gold",
            weight: 300,


            // Phương thức (Method)
            takePhoto(){
                console.log("take photo");
            },
        }

        console.log(iPhoneXsMax);
        console.log(iPhoneXsMax.name);
        console.log(iPhoneXsMax.takePhoto());

        // Để mô tae 1 đối tượng, ta thường dùng 2 khái niệm: thuộc tính và phương thức(hàm)

    
    // Từ khóa "this" trong JS đề cập đến đối tượng mà nó thuộc về
        // Ví dụ:
        const iPhoneXsMax1 = {
            // Thuộc tính (property)
            name: "iPhone Xs Max 1",
            color: "gold",
            weight: 300,


            // Phương thức (Method)
            takePhoto(){
                console.log(this);
            },

            ObjChild: {
                name: "Object Child",   
                methodChild(){
                    console.log(this);
                }
            }
        }

        iPhoneXsMax1.ObjChild.methodChild(); // output: ObjChild{ }
        console.log(iPhoneXsMax1.takePhoto());

    // ĐẶC TÍNH:
        /*
            1. Trong một phương thức, "this" tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu ".")
            2. Đứng ngoài phương thức, "this" tham chiếu tới đối tượng global
        */
    
    // HÀM TẠO:
        // ví dụ:
            function Car(name, color, weight){
                
                this.name = name;
                this.color = color;
                this.weight = weight;

                this.run = function(){
                    console.log('Running', this);
                }

            }
            
            const mercedesS450 = new Car('Mercedes S450', 'Black', 1200);
            console.log(mercedesS450);
            console.log(mercedesS450.run());

        
        // ví dụ 2:
            const button = document.querySelector("button");

            button.onclick = function(){
                console.log(this);
            }
        
        // ví dụ 3:
            function myFunc(){
                console.log(this);
            }    
            
            myFunc(); // output: obj window
            window.myFunc(); // nếu dùng strict mode
            // Nếu dùng strict mode thì output sẽ là undefined

             
    // LƯU Ý:
    
        // 1. This trong hàm tạo là đại diện cho đối tượng sẽ được tạo        
        
            // ví dụ:
                function Car1(name, color){
                    this.name = name;
                    this.color = color;


                    // cách 1:
                    this.run = function(){
                        console.log(this);
                    }
                }

                // cách 2:
                    // Car1.prototype.run = function(){
                    //     console.log(this);
                    // }

                const porsche = new Car1("Porsche", "blue");
                const mercedesE300 = new Car1("Mercedes E300 AMG", "white");
                console.log(porsche);
                console.log(mercedesE300);

                console.log(porsche.run());
                console.log(mercedesE300.run());

        
        // 2. This trong 1 hàm là undefined khi ở strict mode 

            // ví dụ:
                'use strict';

                function Car2(name, color){
                    this.name = name;
                    this.color = color;
                }

                Car2.prototype.run = function(){
                    // Context: ngữ cảnh để chạy 
                    // around function "() =>" không có context nên sẽ ko có this
                    function test(){
                        console.log(this);
                    }
                    test();
                }

                const porsche1 = new Car2("Porsche", "green");
                const mercedesE3001 = new Car2("Mercedes E300 AMG", "yellow");

                console.log(porsche1.run());
                console.log(mercedesE3001.run());

        // 3. Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác        


