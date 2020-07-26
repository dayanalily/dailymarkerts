import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { Usuario } from '../../../../core/interfaces/usuario';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import swal from 'sweetalert2';


@Component({
  selector: 'm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  fileToUpload: File = null;
  nombreFoto: String;
  model: any = { direccion: '' }
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private profile: ProfileService, 
    private cd: ChangeDetectorRef) {
    this.usuario = new Usuario();
    const datosUser = JSON.parse(sessionStorage.usuario)
    this.usuario.id = datosUser.id
 
    
    this.listarUsuario();

  }

  ngOnInit() {

  }


  handleFileInput(event) {

    this.fileToUpload = event.target.files[0];


    this.profile.postFile(this.fileToUpload, this.usuario.id)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
        } else if (event.type === HttpEventType.Response) {
          let response: any = event.body;
        }
      });

  }
  seleccionarFoto(event) {
    this.nombreFoto = null
    this.fileToUpload = event.target.files[0];
    this.nombreFoto = this.fileToUpload.name;
    if (this.fileToUpload.type.indexOf('image') < 0) {
      swal.fire('Error seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fileToUpload = null;
      this.nombreFoto = null
    }
  
  }

  subirFoto() {
    this.nombreFoto = null
    if (!this.fileToUpload) {
      swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else {
      this.profile.postFile(this.fileToUpload, this.usuario.id)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
          } else if (event.type === HttpEventType.Response) {
            let response: any = event.body;
            swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
          }
        });
    }
  }
  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  guardar() {
    this.profile.completarRegistro(this.usuario).subscribe(response => {
      this.mostrarMensaje(response);
      this.listarUsuario();
    });
  }

  mostrarMensaje(response) {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: response.mensaje
    })
  }

  listarUsuario() {

    this.profile.listarUsuarioID(this.usuario.id).subscribe(data => {
     
      this.usuario = data;
      this.usuario.nombre = this.MaysPrimera(this.usuario.nombre.toLowerCase());
      this.usuario.apellido = this.MaysPrimera(this.usuario.apellido.toLowerCase());
      this.cd.markForCheck(); // marks path
    
    })
  }

  cancelar(){
    this.router.navigate(['/index'])
  }

}
