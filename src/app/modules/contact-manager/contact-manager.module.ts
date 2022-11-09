import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactManagerComponent } from './contact-manager.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { UserService } from 'src/app/services/user.service';
import { NotesComponent } from '../../components/notes/notes.component';
import { AddContactDialogComponent } from '../../components/add-contact-dialog/add-contact-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: ContactManagerComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    ContactManagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    AddContactDialogComponent,
  ],
  providers: [UserService],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ContactManagerModule {}
