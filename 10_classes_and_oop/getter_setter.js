class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dhruva`
    }

    set password(value){
        this._password = value
    }
}

const dhruva = new User("dhruva.jhanjhari.dev@gmail.com", "abc")
console.log(dhruva.email);