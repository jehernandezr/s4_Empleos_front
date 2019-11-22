import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in-component/sign-in-component.component';
import { SignInService } from './sing-in.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SignInComponent],
  providers: [SignInService]
})
export class SignInModule { }