import {
	Component,
	OnInit,
	Input,
	Output,
	ViewChild,
	ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { NgForm } from '@angular/forms';
import * as objectPath from 'object-path';
import { AuthNoticeService } from '../../../../core/auth/auth-notice.service';
import { SpinnerButtonOptions } from '../../../partials/content/general/spinner-button/button-options.interface';
import { TranslateService } from '@ngx-translate/core';
import { Usuario } from '../../../../core/interfaces/usuario';
import swal from 'sweetalert2';
import { PaisesService } from '../../../../core/services/paises.service';

@Component({
	selector: 'm-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	public tipoDocumento: String = "";
	public model: any = { nombre: '', apellido: '', tipo_documento: 'Tipo documento', numero_documento: '', email: '', password: '', rpassword: '', terminos: null, pais: '', telefono: '', ocupacion: '' };
	@Input() action: string;
	@Output() actionChange = new Subject<string>();
	public loading = false;
	documento: Boolean;
	listDocumento: Array<any>
	listPais: Array<any>
	@ViewChild('f') f: NgForm;
	errors: any = [];
	usuario: Usuario;
	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false
	};

	constructor(
		private authService: AuthenticationService,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private pais: PaisesService) {
		this.authService.logout();
		this.usuario = new Usuario();
		this.usuario.roles = [{ 'id': 1, 'nombre': 'ROLE_USER' }];
		this.listarPaises();
		this.listarDocumentos();

	}

	ngOnInit() { }

	loginPage(event: Event) {
		event.preventDefault();
		this.action = 'login';
		this.actionChange.next(this.action);
	}

	submit() {
		this.spinner.active = true;
		if (this.validate(this.f)) {
			this.authService.register(this.usuario).subscribe(response => {
				this.mostrarMensaje(response.mensaje);
				this.action = 'login';
				this.actionChange.next(this.action);
				this.spinner.active = false;
				this.authNoticeService.setNotice(this.translate.instant('AUTH.REGISTER.SUCCESS'), 'success');
			});
		}
		this.spinner.active = false;
	}

	validate(f: NgForm) {
		if (f.form.status === 'VALID') {
			return true;
		}

		this.errors = [];
		if (objectPath.get(f, 'form.controls.nombre.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.FULLNAME') }));
		}
		if (objectPath.get(f, 'form.controls.apellido.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.APELLIDO') }));
		}
		if (objectPath.get(f, 'form.controls.tipo_documento.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.TIPODOC') }));
		}
		if (objectPath.get(f, 'form.controls.numero_documento.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.DOC') }));
		}

		if (objectPath.get(f, 'form.controls.email.errors.email')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
		}
		if (objectPath.get(f, 'form.controls.email.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
		}

		if (objectPath.get(f, 'form.controls.password.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
		}
		if (objectPath.get(f, 'form.controls.password.errors.minlength')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD'), min: 4 }));
		}

		if (objectPath.get(f, 'form.controls.rpassword.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.CONFIRM_PASSWORD') }));
		}

		if (objectPath.get(f, 'form.controls.terminos.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.AGREEMENT_REQUIRED'));
		}

		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
		}

		return false;
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
			title: response
		})
	}
	listarPaises() {
		this.listPais = [];
		this.pais.listarPaises().subscribe(data => {
			data.forEach(element => {
				this.listPais.push(element);

			});
			
		})
	}

	listarDocumentos() {
		this.listDocumento = [];
			this.listDocumento.push(
			{
				value: 1,
				nombre: "Pasaporte"
			},
			{
				value: 2,
				nombre: "Cedula indentidad"
			},
			{
				value: 3,
				nombre: "Rut"

			},
			{
				value: 4,
				nombre: "Otro"

			})
	}
}
