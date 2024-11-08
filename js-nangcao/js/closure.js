//  CLOSURE

// KHÁI NIỆM CLOSURE

    // Closure là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó

// Ví dụ closure

    function createCounter(){
        let counter = 0;

        function increase(){
            return ++counter;
        }

        return increase;
    }

    const counter1 = createCounter();
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());



// ví dụ 2:

function createLogger(namespace){
    function logger(message){
        console.log(`[${namespace}] ${message}`);
    }

    return logger;
}

//========= APP ===========

// register.js
    const infoLogger = createLogger('Info');

    infoLogger('Bắt đầu gửi mail');
    infoLogger('Gửi mail lỗi lần 1, thử gửi lại');
    infoLogger('Gửi mail thành công cho user xxx');

// Forgotpassword.js (Quên mật khẩu)

    const errorLogger = createLogger('Error');
    
    errorLogger('Bắt đầu gửi mail');
    errorLogger('Gửi mail lỗi lần 1, thử gửi lại');
    errorLogger('Gửi mail thành công cho user xxx');


// ví dụ 3:

function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {}; // nếu lần đầu không có JSON thì lấy object {}

    const save = () =>{
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key){
            return store[key];
        },

        set(key, value){
            store[key] = value;
            save();
        },

        remove(key){
            delete store[key];
            save();
        }
    }
    
    return storage;
}



//Profile.js

    const ProfileSetting = createStorage('profile_setting');


    console.log(ProfileSetting.get('fullName'));

    ProfileSetting.set('fullName', 'Minh Hung');
    ProfileSetting.set('age', '20');
    ProfileSetting.set('address', 'Hue');
    

// ỨNG DỤNG

    // Viết đoạn code ngắn gọn hơn
    // Biểu diễn, ứng dụng tính Private trong OOP
    
    //ví dụ: (ví dụ 3 ở trên)

    // Ví dụ 4:

        function createApp(){
            const cars = [];
            
            return {
                add(car){
                    return cars.push(car);
                },
                show(){
                    console.log(cars);
                }
            }
        }

        const app = createApp();
        
        app.show();
        app.add('Porsche');
        app.show();
        app.add('Mercedes');
        app.add('Kia');
        app.show();



// LƯU Ý
    // Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
    // Các khái niệm JS nâng cao rất dễ gây nhầm lẫn        