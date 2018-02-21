export class user{
    username:string;
    password:string;
    role:boolean;
  constructor(un:string,password:string,role:boolean){
      this.username=un;
      this.password=password;
      this.role=role;
  }
  }