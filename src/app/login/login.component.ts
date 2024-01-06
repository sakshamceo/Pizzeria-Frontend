import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
declare var emailjs: any; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:boolean=false;
  email:string="";
  constructor(private router : Router , private ls: LoginService ) {
  }

  // sendMail(): void {
  //   (function () {
  //     emailjs.init("user_your_public_key"); // Replace with your Account Public Key
  //   })();

  //   const params = {
  //     to: this.email,
  //   };

  //   const serviceID = "service_m7km2rr"; 
  //   const templateID = "template_wqi8cvv"; 

  //   emailjs.send(serviceID, templateID, params)
  //     .then((res: any) => {
  //       console.log(res);

  //       alert("Email sent successfully!!");
  //     })
  //     .catch((error: any) => {
  //       console.error('Error sending email:', error);
  //     });
  // }

  onSubmit(formdata: any)
  {
    let user = formdata.form.value;
    console.log(this.login);
    
    this.ls.login(user.username,user.password).subscribe(
      (res:any)=>
      {console.log(res.success);
        if(res.success==true)
        {
          this.ls.isLoggedIn=true;
          this.login=this.ls.isLoggedIn;
          this.ls.name=user.username;
          this.router.navigate(['/Cart']);
          console.log(this.email);
        }else {
          this.login=false;
        }
      }
    )
  }

}
