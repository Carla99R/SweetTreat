import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../../shared/models/user.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  flag = false;
  help = true;
  user: any;
  modalRef!: BsModalRef<any>;
  constructor(private router: Router, private auth: AngularFireAuth, private authService: AuthService,
              private modalService: BsModalService) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
    });
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
  }
  recuperar(): void {
    this.flag = !this.flag;
    this.help = true;
  }
  registrar(): void {
    this.help = !this.help;
    this.flag = true;
  }

  logout(): void{
    this.auth.signOut();
    this.router.navigate(['/inicio']);
  }

}
