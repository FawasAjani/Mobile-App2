import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
// Import the component that we are testing
import { RemindersListPage } from './reminders-list.page';

describe('RemindersListPage', () => {
  let component: RemindersListPage;
  let fixture: ComponentFixture<RemindersListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemindersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  // Test to check if the component is successfully created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
