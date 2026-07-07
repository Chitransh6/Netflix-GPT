export const validateinfo = (email,password)=>{
    const checkemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const checkpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!checkemail){
        return "email is incorrect";
    }
    if(!checkpassword){
        return "password is incorrect";
    }
    return null;
    
}