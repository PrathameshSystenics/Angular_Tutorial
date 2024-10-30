import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyinjectionComponent } from './dependencyinjection.component';

describe('DependencyinjectionComponent', () => {
  let component: DependencyinjectionComponent;
  let fixture: ComponentFixture<DependencyinjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependencyinjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
