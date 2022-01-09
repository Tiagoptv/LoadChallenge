import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
