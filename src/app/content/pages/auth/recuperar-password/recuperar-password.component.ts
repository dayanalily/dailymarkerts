import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SpinnerButtonOptions } from '../../../partials/content/general/spinner-button/button-options.interface';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { AuthNoticeService } from '../../../../core/auth/auth-notice.service';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'm-recuperar-password'
})
export class RecuperarPasswordComponent implements OnInit {
  mensaje: String;
  fechaInicio: string;
  usuario: any;
  public model: any = { email: '' };
  @Input() action: string;
  @Output() actionChange = new Subject<string>();
  public loading = false;
  d = new Date();
  @ViewChild('f') f: NgForm;
  errors: any = [];
  hora: any;
  fecha: any;
  spinner: SpinnerButtonOptions = {
    active: false,
    spinnerSize: 18,
    raised: true,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false
  };
  private id;
  habilitar: Boolean = true;
  habilitarNuevoPassword: Boolean = false;
  constructor(private authService: AuthenticationService,
    public authNoticeService: AuthNoticeService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,

    public fb: FormBuilder) {
    this.fechaInicio = moment().format('L')
    this.fechaInicio = moment().format('DDMMYYYY')
    this.route.params.subscribe(params => {
      sessionStorage.clear();
      localStorage.clear();
      this.id = +params['id'].substr(-20, 1);
      let obtenerUsuario = this.listarUsuarioIngresado();
      let obtenerFecha = this.obtenerIdFechaHora(params);
      Promise.all([obtenerUsuario, obtenerFecha]).then(response => {
        if (response[0] === true && response[1] === true) {
          this.preguntarDatos(this.usuario)
        }
      })
    });

  }
  obtenerIdFechaHora(params) {
    this.hora = +params['id'].substr(1, 6)
    this.hora = moment().format('HH:mm:ss');;
    this.fecha = +params['id'].substr(-8);

    return true;
  }

  preguntarDatos(usuario) {
    if (usuario === undefined) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Algo salió mal!',
        footer: 'El usuario no existe',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCloseButton: false,
        confirmButtonColor: '#4c309a',
        reverseButtons: true,
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: false
        
      })
      setTimeout(() => {
        window.close();
      }, 50000);
    } else {
      this.accesoOIngore()
    }

  }
  accesoOIngore() {
    if (this.id === undefined) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Algo salió mal!',
        footer: 'El usuario no existe',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCloseButton: false,
        confirmButtonColor: '#4c309a',
        reverseButtons: true,
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: false
      })
      setTimeout(() => {
        window.close();
      }, 50000);
    } else {

      var a = parseInt(this.fechaInicio)
      if (a === this.fecha) {
        this.pedirCorreo(this.usuario);

      } else {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Algo salió mal!',
          footer: 'La fecha a caducado',
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCloseButton: false,
          confirmButtonColor: '#4c309a',
          reverseButtons: true,
          showCancelButton: false, // There won't be any cancel button
          showConfirmButton: false
        })
        setTimeout(() => {
          window.close();
        }, 50000);
      }
    }
  }
  ngOnInit(): void {
    
  }

  loginPage(event: Event) {
    event.preventDefault();
    this.action = 'login';
    this.actionChange.next(this.action);
  }

  submit() {
    this.spinner.active = true;


    this.authService.requestPassword(this.model).subscribe(response => {

      this.mensaje = response.mensaje
      if (typeof response !== undefined) {
        swal.fire(response.mensaje, "Gracias", 'info');
        this.action = 'login';
        this.actionChange.next(this.action);

      } else {
        this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.NOT_FOUND', { name: this.translate.instant('AUTH.INPUT.EMAIL') }), 'error');
      }
      this.spinner.active = false;
    }, err => {
      this.mensaje = err.error.mensaje;

    });

  }

  listarUsuarioIngresado() {

    this.authService.listarUsuarioID(this.id).subscribe(response => {
      if (response !== undefined) {
        this.usuario = response

        this.preguntarDatos(this.usuario);


      }

    }, err => {
      this.mensaje = err.error.mensaje;

    });
    return true
  }

  pedirCorreo(event) {
    let clave: String = "";
    swal.fire({
      title: 'Recupera tu cuenta',
      titleText: `Hola!  ${event.nombre}  ` + ' podemos ayudarte a reestablecer tu contraseña. Primero' +
        '  escribe tu correo electrónico y siguelas instrucciones siguientes.',
      input: 'email',
      inputPlaceholder: 'Ingrese correo electrónico',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showCancelButton: true,
      showCloseButton: false,
      confirmButtonColor: '#4c309a',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if (this.usuario.email.toLowerCase() === login.toLowerCase()) {
          return true
        } else {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo no es correcto Intentalo mas  tarde!',
            footer: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCloseButton: false,
            confirmButtonColor: '#4c309a',
            reverseButtons: true,
            showCancelButton: false, // There won't be any cancel button
            showConfirmButton: false
          })


          setTimeout(() => {
            this.pedirCorreo(this.usuario);
          }, 3000);
        }

      },
    }).then((result) => {
      if (result.value) {


        swal.mixin({
          input: 'password',
          inputPlaceholder: 'Ingrese nueva Contraseña',
          confirmButtonText: 'Siguiente &rarr;',
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCloseButton: false,
          confirmButtonColor: '#4c309a',
          reverseButtons: true,
          inputValidator: (value) => {
            if (!value) {

              return !value && '¡Necesitas escribir algo!!'
            } else if (value.length < 8) {
              return value && '¡Contraseña debe tener 8 caracteres!!'
            }

          },
          progressSteps: ['1', '2']
        }).queue([
          {
            inputPlaceholder: 'Ingresa nueva Contraseña',
            title: 'Ingresa nueva Contraseña',

            allowEscapeKey: false,
            allowOutsideClick: false,
            showCloseButton: false,
            confirmButtonColor: '#4c309a',
            reverseButtons: true,
            inputValidator: (value) => {

              if (!value) {
                return !value && '¡Necesitas escribir algo!!'
              } else if (value.length < 8) {

                return value && '¡Contraseña debe tener 8 caracteres!!'
              }
            },
          },
          'Confirma nueva Contraseña',
        ]).then((result) => {
          if (result) {
            const pass = JSON.stringify(result)
            const separar = pass
            const aver = separar.split('[')
            const aver2 = aver[1].split(']}')
            const aver3 = aver2[0].split(',')
            const aver4 = aver3[0].split('"')
            const aver5 = aver3[1].split('"')

            if (aver4[1] === aver5[1]) {
              clave = aver4[1];


              this.actualizarPassword(clave)
                ;

            } else {
              const Toast = swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', swal.stopTimer)
                  toast.addEventListener('mouseleave', swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Contaseñas no son iguales intentanlo una vez mas'
              })
              setTimeout(() => {
                this.pedirCorreo(this.usuario);
              }, 4000);

            }




          }
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        this.usuario = null;
        this.id = null;
        window.close()
      }

    });



  }

  actualizarPassword(event) {
    this.usuario.password = event;

    this.authService.actualizarUsuario(this.usuario, this.id).subscribe(response => {


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
      if (response !== undefined) {


        this.router.navigate(['login']);
      }
   
    }, err => {
      this.mensaje = err.error.mensaje;

    });

  }




}
