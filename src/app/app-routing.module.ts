import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeGridComponent } from "./home-grid/home-grid.component";

const routes: Routes = [
  { path: '', component: HomeGridComponent },
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
