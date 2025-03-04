# Sample Components

This directory contains example components and implementations that demonstrate various Angular features and best practices in the TechShop application. These samples serve as references and learning resources for developers.

## Purpose

The sample components:
- Demonstrate Angular best practices
- Showcase common implementation patterns
- Provide working examples of feature implementations
- Serve as templates for new features
- Illustrate integration with backend services
- Show proper component organization

## Available Samples

### Navigation Menu (`nav-menu/`)
- Demonstrates responsive navigation
- Shows proper routing implementation
- Illustrates component state management
- Examples of Angular Material integration

### Todo Component (`todo/`)
- Shows CRUD operations
- Demonstrates form handling
- Illustrates state management
- Examples of component communication
- Shows proper error handling

### Home Component (`home/`)
- Basic component setup
- Routing configuration
- Layout implementation
- Static content handling

### Fetch Data (`fetch-data/`)
- HTTP client usage
- API integration patterns
- Data loading states
- Error handling
- Type safety implementation

### Counter (`counter/`)
- Basic state management
- Event handling
- Component interaction
- Unit testing examples

## Structure

```
sample/
├── nav-menu/          # Navigation component example
├── todo/             # Todo list implementation
├── home/             # Home page example
├── fetch-data/       # Data fetching patterns
├── counter/          # State management example
└── README.md         # This documentation
```

## Usage Examples

### Basic Component Template
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
    <div class="sample-component">
      <h1>{{ title }}</h1>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .sample-component {
      padding: 1rem;
    }
  `]
})
export class SampleComponent {
  title = 'Sample Component';
}
```

### HTTP Service Pattern
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('/api/data')
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return Promise.reject(error.message || error);
  }
}
```

## Learning Points

### Component Design
- Proper component organization
- Input/Output usage
- Lifecycle hooks
- Change detection
- Component communication

### State Management
- Local state handling
- Service integration
- Observable patterns
- State immutability
- Action handling

### Form Handling
- Reactive forms
- Form validation
- Custom validators
- Form submission
- Error states

### API Integration
- HTTP client usage
- Error handling
- Loading states
- Type safety
- Response mapping

## Best Practices Demonstrated

1. **Component Organization**
   - Clear file structure
   - Proper naming conventions
   - Module organization
   - Feature encapsulation

2. **Code Quality**
   - TypeScript usage
   - Strong typing
   - Error handling
   - Documentation
   - Unit testing

3. **Performance**
   - Lazy loading
   - Change detection
   - Proper subscription handling
   - Memory management

4. **Security**
   - XSS prevention
   - CSRF protection
   - Input sanitization
   - Secure HTTP calls

## Testing Examples

### Component Testing
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Contributing

When adding new samples:
1. Follow existing patterns
2. Include comprehensive documentation
3. Add unit tests
4. Demonstrate best practices
5. Include usage examples
6. Keep samples focused and simple

## Important Notes

- Samples are for learning purposes
- Keep examples simple and focused
- Document all important concepts
- Include proper error handling
- Follow Angular style guide
- Maintain test coverage
- Update examples as practices evolve
- Consider beginners when writing documentation
