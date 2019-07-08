import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstComponent } from './detailst.component';

describe('DetailstComponent', () => {
  let component: DetailstComponent;
  let fixture: ComponentFixture<DetailstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
