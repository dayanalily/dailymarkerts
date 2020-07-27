import { AuthenticationService } from '../../../../../core/auth/authentication.service';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Usuario } from '../../../../../core/interfaces/usuario';

@Component({
	selector: 'm-user-profile',
	templateUrl: './user-profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
	usuario: Usuario;
	urlFoto: String;
	@HostBinding('class')
	// tslint:disable-next-line:max-line-length
	classes = 'm-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light';

	@HostBinding('attr.m-dropdown-toggle') attrDropdownToggle = 'click';

	@Input() avatar: string = './assets/app/media/img/users/user4.jpg';
	@Input() avatarBg: SafeStyle = '';

	@ViewChild('mProfileDropdown') mProfileDropdown: ElementRef;

	constructor(
		private router: Router,
		private authService: AuthenticationService,
		private sanitizer: DomSanitizer
	) { 
		if (sessionStorage.usuario === undefined) {
			this.router.navigate(['/login']);
		} else {
			this.obtenerDatosUser();

		}
	}

	ngOnInit(): void {
		if (!this.avatarBg) {
			this.avatarBg = this.sanitizer.bypassSecurityTrustStyle('url(./assets/app/media/img/misc/user_profile_bg.jpg)');
		}
		this.obtenerDatosUser();
	}

	public logout() {
		this.authService.logout(true);
		this.router.navigate(['/login']);
		
	}

	obtenerDatosUser() {
	
			if (this.authService._usuario === undefined || this.authService._usuario === null) {
				const datosUser = JSON.parse(sessionStorage.usuario)
				this.usuario = new Usuario();
				this.urlFoto = 'https://edaily-spring.herokuapp.com/api/uploads/img/' + this.usuario.foto;
				this.usuario.nombre = this.MaysPrimera(datosUser.nombre.toLowerCase());
				this.usuario.apellido = this.MaysPrimera(datosUser.apellido.toLowerCase());
				this.usuario.email = datosUser.email;
				
			} else {
				this.usuario = this.authService._usuario
			}
		

	}




	MaysPrimera(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}
