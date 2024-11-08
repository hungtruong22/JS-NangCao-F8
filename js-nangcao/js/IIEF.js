

/* IIFE (Immediately Invoked Function Expression) có nghĩa là khởi tạo một function và thực thi nó ngay lập tức. */

// IIFE trông như thế nào?

// khởi tạo Function Expression

        // const callNow = function(){
        //     console.log('NOW');
        // }

        // callNow();


// cách viết IIFE

// Cách 1:
    // (function(){
    //     console.log('NOW NOW');
    // })()

// Cách 2: () => : around function

    // (() => {
    //     console.log('NOW!');
    // })()


// ví dụ ;
    (function(message){
        console.log('Message : ', message);
    })('Chào bạn!');



 // Các lưu ý khi dùng IIFE
 
 /**
  * 1. Dùng dấu ; trước IIFE
  * 2. IIFE là một hàm private
  * 3. sử dụng IIFE khi nào ? khi muốn sử dụng đoạn mã mà ko dính vào phạm vi global làm ảnh hướng đến dự án     
  */

 // ví dụ sử dụng IIFE 
 // ví dụ làm ứng dụng quản lý tên ô tô


 // không dùng IIFE
 const app = {
    cars: [],
    add(car){
        this.cars.push(car);
    },
    edit(index, car){
        this.cars[index] = car;
    },
    delete(index){
        this.cars.splice(index, 1);
    }
 }

// dùng IIFE

const app2 = (function(){
    // private
    const cars = [];
    return{
        get(index){
            return cars[index];
        },
        add(car){
            cars.push(car);
        },
        edit(index, car){
            cars[index] = car;
        },
        delete(index){
            cars.splice(index, 1);
        }
    }
})()