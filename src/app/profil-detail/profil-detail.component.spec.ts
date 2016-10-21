import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ProfileDetailComponent } from './profil-detail.component';

describe('Component: ProfilDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileDetailComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ],
    });
  });

  it('should create an instance', () => {
    let component = new ProfileDetailComponent();
    expect(component).toBeTruthy();
  });


  it('should contain Name', async(() => {
    let fixture = TestBed.createComponent(ProfileDetailComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Petr Novak');
  }));

});
