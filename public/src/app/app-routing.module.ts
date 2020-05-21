import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    component: NewAuthorComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateAuthorComponent,
  },
  {
    path: '',
    component: AllAuthorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
