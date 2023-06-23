import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { ContainerComponent } from '../components/UI/container/container.component';
import { LandingComponent } from '../components/home/landing/landing.component';
import { RoutingModule } from './routing.module';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SectionVideoComponent } from '../components/home/section-video/section-video.component';

export const COMPONENTS = [
  AppComponent,
  NavigationComponent,
  ContainerComponent,
  HomeComponent,
  FooterComponent,
  LandingComponent,
  SectionVideoComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RoutingModule],
  exports: COMPONENTS,
})
export class ComponentsModule {}
