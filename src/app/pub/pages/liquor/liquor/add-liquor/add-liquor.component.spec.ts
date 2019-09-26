import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLiquorComponent } from './add-liquor.component';

describe('AddLiquorComponent', () => {
  let component: AddLiquorComponent;
  let fixture: ComponentFixture<AddLiquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLiquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLiquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
