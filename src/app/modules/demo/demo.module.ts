import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FlexboxComponent } from '../../components/flexbox/flexbox.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent, DemoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DemoModule {}
