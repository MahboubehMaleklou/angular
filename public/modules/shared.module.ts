import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
