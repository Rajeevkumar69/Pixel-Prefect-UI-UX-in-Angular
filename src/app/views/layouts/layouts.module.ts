import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HomeComponent } from '../main/home/home.component';

@NgModule({
     declarations: [LayoutsComponent, HomeComponent],
     imports: [CommonModule, LayoutsRoutingModule]
})
export class LayoutsModule {}
