import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'contact-manager',
    loadChildren: () =>
      import('./modules/contact-manager/contact-manager.module').then(
        (m) => m.ContactManagerModule
      ),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./modules/demo/demo.module').then((m) => m.DemoModule),
  },
  { path: '**', redirectTo: 'contact-manager' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
