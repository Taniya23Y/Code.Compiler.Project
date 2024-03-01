/// <reference types="vite/client" />

//Users types
interface userInfoType  {
        username: string;
        picture: string;
        email: string;
        savedCodes: Array<string>;
}

interface loginCredentialsType{
       userId: string; 
       password: string 
}

interface signupCredentialsType{
        username: string;
        email: string;
        password: string
}