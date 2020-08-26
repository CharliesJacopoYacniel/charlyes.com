import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
// import { ComponentsModule } from 'src/app/components/components.module';

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
// import { ModalComponent } from '../../components/modal/modal.component';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ HomeComponent],
	imports: [
		CommonModule,
		// HomeRoutingModule
    // ReactiveFormsModule
  ],
})
export class HomeModule {}
