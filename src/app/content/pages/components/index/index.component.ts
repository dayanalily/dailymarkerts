import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IndexService } from './index.service';
import swal from 'sweetalert2';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { Usuario } from '../../../../core/interfaces/usuario';
import { Router } from '@angular/router';
export interface Element {

  apellido: String,
  enabled: String,
  foto: String,
  id: String,
  nombre: String,
  numero_documento: number,
  roles: String,
  terminos: Boolean
  tipo_documento: number,
  email: String,
  pais: String,

}

@Component({
  selector: 'm-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  indice = 0;
  usuario: Usuario;
  ELEMENT_DATA: Element[] = [];
  displayedColumns = ['nombre', 'apellido', 'email', 'pais', 'accion'];
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  lengthPage: any;
  ListaPaginados: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;




  constructor(
    private indexService: IndexService,
    private auth: AuthenticationService,
    private router: Router) {
    this.listarUsuariosRegistrados();
    this.listarPaginacion();
    this.listarPrueba()
    const datosUser = JSON.parse(sessionStorage.usuario)
    this.usuario = new Usuario();
    this.usuario.nombre = datosUser.nombre;
    this.usuario.apellido = datosUser.apellido;
    this.usuario.email = datosUser.email;
    this.usuario.roles = datosUser.roles;
  }

  ngOnInit() {

  }

  listarUsuariosRegistrados() {
    this.indexService.listarUsuariosRegistrados().subscribe(data => {
      this.ELEMENT_DATA = [];
      this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        this.ELEMENT_DATA.push(element)
      }
      this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

    })
  }

  listarPaginacion() {
    this.indice = 0;
    this.indexService.listarPaginacion(0).subscribe(data => {
      this.lengthPage = data.totalPages
      this.ListaPaginados = data;
    })
  }

  mostrarMas(event) {

    if (this.ListaPaginados.number === this.indice) {
      this.indice = this.indice + 4;
      this.listarPaginacion()

    }
  }

  listarPrueba() {

    var number = 0
    var data2 = []
    this.indexService.listarPrueba().subscribe(data => {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (index < 5) {
          data2.push(element)
          number++
          return
        }


      }


    });


  }

  accion(event, element) {

    if (event === 'eliminar') {

      if (this.usuario.roles[0] === "ROLE_USER") {
        this.isUser(event);
      } else {
        this.eliminar(element);
      }
    } else if (event === 'edita') {
      this.router.navigate(['/profile'])
    } else if (event === 'ver') {

      this.mostrarDatos(element)

    }


  }
  isUser(event) {
    const Toast = swal.mixin({
      toast: true,
      position: 'center-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: `Para ${event} , debes tener permisos!`
    })
  }
  eliminar(element) {
    swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4c309a',
      cancelButtonColor: '#fffff',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        if (result.value === true) {
          this.indexService.eliminarUsuario(element.id).subscribe(data => {
            if (data !== undefined) {
              this.listarUsuariosRegistrados()
              const Toast = swal.mixin({
                toast: true,
                position: 'center-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', swal.stopTimer)
                  toast.addEventListener('mouseleave', swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'success',
                title: `El usuario se ha eliminado!`
              })
            }
          })

        }

      }
    })
  }

  mostrarDatos(usuario) {
    swal.fire({

      html:

        '<div>' + ` <img  src="https://edaily-spring.herokuapp.com/api/uploads/img/${usuario.foto}" >` + '</div>' +

        `Nombre:  ${usuario.nombre}` + '<br/>' +
        `Apellido: ${usuario.apellido}` + '<br/>' +
        `Email: ${usuario.email}` + '<br/>',
      showCancelButton: true,
      cancelButtonColor: '#fffff',
      cancelButtonText: 'volver',
      showConfirmButton: false,

    })

  }
}