import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcompComponent } from './vcomp/vcomp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VcompComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VcompComponent
  ]
})
export class ViewModuleModule { }
