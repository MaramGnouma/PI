import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdmin2Component } from './login-admin2.component';

describe('LoginAdmin2Component', () => {
  let component: LoginAdmin2Component;
  let fixture: ComponentFixture<LoginAdmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAdmin2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
