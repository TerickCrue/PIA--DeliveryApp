import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailChange } from 'src/app/interface/email-change';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-email-change-modal',
  templateUrl: './email-change-modal.component.html',
  styleUrls: ['./email-change-modal.component.scss'],
})
export class EmailChangeModalComponent  implements OnInit {

  userId: any;

  cambioEmailForm!: FormGroup;

  userEmail: any;
  NewEmail: string = '';
  pwd: string = '';
  
  newCreds: any;
  request: EmailChange = {emailActual: '', emailNuevo: '', pwd:''};

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private modalCtrl: ModalController
  ) { 

    this.cambioEmailForm = this.formBuilder.group({
      nuevoEmail: ['', Validators.required],
      contra: ['', Validators.required]
    });
  }

  ngOnInit() {}



  cambiarEmail() {

    if (this.cambioEmailForm.valid) {
      this.NewEmail = this.cambioEmailForm.get('nuevoEmail')?.value;
      this.pwd = this.cambioEmailForm.get('contra')?.value;

      this.request.emailActual = this.userEmail;
      this.request.emailNuevo = this.NewEmail;
      this.request.pwd = this.pwd;

      this.usuarioService.updateEmailUsuario(this.userId, this.request).subscribe(
        (response: any) => {
          this.newCreds = response;
          console.log(this.newCreds);
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }

  close(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
