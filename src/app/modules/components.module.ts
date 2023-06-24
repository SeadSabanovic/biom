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
import { SectionIntroComponent } from '../components/home/section-intro/section-intro.component';
import { SectionAdditionalInfoComponent } from '../components/home/section-additional-info/section-additional-info.component';
import { SectionDispensersComponent } from '../components/home/section-dispensers/section-dispensers.component';
import { SectionTestimonialsComponent } from '../components/home/section-testimonials/section-testimonials.component';
import { SectionSocialComponent } from '../components/home/section-social/section-social.component';

export const COMPONENTS = [
  AppComponent,
  NavigationComponent,
  ContainerComponent,
  HomeComponent,
  FooterComponent,
  LandingComponent,
  SectionVideoComponent,
  SectionIntroComponent,
  SectionAdditionalInfoComponent,
  SectionDispensersComponent,
  SectionTestimonialsComponent,
  SectionSocialComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RoutingModule],
  exports: COMPONENTS,
})
export class ComponentsModule {}
