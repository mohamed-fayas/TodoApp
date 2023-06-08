import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: LoginService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }


  login(formData: any) {
    this.service.userLogin(formData).subscribe((res: {
      statusCode: number,
      message: string, token: string, userId: number, userName: string, pic: string
    }) => {
      if (res.statusCode == 200) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('userId', res.userId.toString())
        localStorage.setItem('userName', res.userName)
        localStorage.setItem('pic', res.pic)
        this.router.navigate(['/task/dashboard/home'])
      }
      else {
        this.showSnackBar(res.message, 'snackBarDanger')
      }
    })
  }


  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }
}
