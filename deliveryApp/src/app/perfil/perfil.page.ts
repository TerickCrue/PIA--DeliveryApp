import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioId: any = 11;
  usuario: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.obtenerInfoUsuario();
  }

  obtenerInfoUsuario(){
    this.usuarioService.getUsuarioById(this.usuarioId).subscribe(
      (response: any) => {
        this.usuario = response;
      },
      (error) => {
        console.error('Error al obtener la información del usuario', error)
      }
    );
  }

  editarInfo() {
    this.router.navigate(['/detalles-perfil', this.usuarioId]);
  }


}
