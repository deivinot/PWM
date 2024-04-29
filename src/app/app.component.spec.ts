/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ FormsModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  test('should add a new item to the list', () => {
    const itemName = 'Leche';
    const itemInput = fixture.nativeElement.querySelector('input');
    itemInput.value = itemName;
    itemInput.dispatchEvent(new Event('input'));

    const addButton =
      fixture.nativeElement.querySelector('button[type="submit"]');
    addButton.click();

    fixture.detectChanges();

    expect(component.items.length).toBe(1);
    expect(component.items[0].name).toBe(itemName);
  });

  test('should complete an item in the list', () => {
    const itemName = 'Leche';
    const newItem = { name: itemName, completed: false };
    component.items.push(newItem);

    fixture.detectChanges();


    const completeButton =
      fixture.nativeElement.querySelector('button[id="complete"]');
    completeButton.click();

    fixture.detectChanges();

    expect(component.items[0].completed).toBe(true);
  });

  test('should delete an item from the list', () => {
    const itemName = 'Leche';
    const newItem = { name: itemName, completed: false };
    component.items.push(newItem);

    fixture.detectChanges();

    const deleteButton =
      fixture.nativeElement.querySelector('button[id="delete"]');
    deleteButton.click();

    fixture.detectChanges();

    expect(component.items.length).toBe(0);
  });

});
*/
