import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'users',
        component: UsersComponent,
      },
    ]),
  ],
  exports: [UsersComponent],
})
export class UserListModule {}
