import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "report/:id", //:type is dynamic here
    component: AppComponent,
  },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}