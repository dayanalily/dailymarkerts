import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickSidebarComponent } from './layout/quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './layout/scroll-top/scroll-top.component';
import { TooltipsComponent } from './layout/tooltips/tooltips.component';
import { ListSettingsComponent } from './layout/quick-sidebar/list-settings/list-settings.component';
import { MessengerModule } from './layout/quick-sidebar/messenger/messenger.module';
import { CoreModule } from '../../core/core.module';
import { ListTimelineModule } from './layout/quick-sidebar/list-timeline/list-timeline.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NoticeComponent } from './content/general/notice/notice.component';
import { PortletModule } from './content/general/portlet/portlet.module';
import { SpinnerButtonModule } from './content/general/spinner-button/spinner-button.module';

import {  MatSortModule} from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [
		QuickSidebarComponent,
		ScrollTopComponent,
		TooltipsComponent,
		ListSettingsComponent,
		NoticeComponent
	],
	exports: [
		QuickSidebarComponent,
		ScrollTopComponent,
		TooltipsComponent,
		ListSettingsComponent,
		NoticeComponent,
		MatInputModule,
		PortletModule,
		SpinnerButtonModule
	],
	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		PerfectScrollbarModule,
		MessengerModule,
		ListTimelineModule,
		CoreModule,
		PortletModule,
		SpinnerButtonModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatPaginatorModule,
		MatSelectModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatIconModule,
		MatToolbarModule,
		
	]
})
export class PartialsModule {}
