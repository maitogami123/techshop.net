# Shared Module

The Shared module contains reusable components, directives, pipes, and other utilities that are used across multiple feature modules in the TechShop application. This module promotes code reuse and maintains consistency throughout the application.

## Purpose

The Shared module provides:
- Reusable UI components
- Common directives and pipes
- Shared utilities and helpers
- Common interfaces and types
- Shared form controls
- Common layouts and templates

## Structure

```
shared/
├── components/        # Reusable UI components
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   └── layouts/
├── directives/       # Custom directives
├── pipes/            # Custom pipes
├── models/           # Shared interfaces and types
├── utils/            # Utility functions
├── validators/       # Custom form validators
├── constants/        # Shared constants
└── shared.module.ts  # Shared module definition
```

## Components

### UI Components
- Buttons (Primary, Secondary, etc.)
- Cards and Panels
- Form Controls
- Modal Dialogs
- Loading Spinners
- Alert Messages
- Pagination
- Data Tables
- Search Bars

### Directives
- Click Outside
- Lazy Load
- Tooltip
- Infinite Scroll
- Permission Check
- Input Mask

### Pipes
- Date Format
- Currency Format
- File Size
- Phone Number
- Safe HTML
- Filter
- Sort

## Usage Guidelines

### Importing the Shared Module

```typescript
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    // Other feature-specific modules
  ]
})
export class FeatureModule { }
```

### Creating Shared Components

```typescript
@Component({
  selector: 'app-custom-button',
  template: `
    <button [class]="buttonClass" [disabled]="isDisabled">
      <ng-content></ng-content>
    </button>
  `
})
export class CustomButtonComponent {
  @Input() buttonClass: string;
  @Input() isDisabled: boolean;
}
```

## Best Practices

1. **Component Design**
   - Keep components small and focused
   - Make components highly reusable
   - Use proper input/output decorators
   - Document component APIs
   - Include usage examples

2. **Module Organization**
   - Export all shared components
   - Import only necessary modules
   - Avoid service declarations
   - Keep the module focused on UI

3. **Styling**
   - Use consistent naming conventions
   - Implement responsive design
   - Follow BEM methodology
   - Use CSS variables for theming
   - Maintain style guide compliance

4. **Performance**
   - Implement change detection strategy
   - Use trackBy for ngFor
   - Lazy load when possible
   - Optimize asset sizes
   - Cache appropriately

## Testing

Shared components should have:
- Unit tests for components
- Integration tests for complex interactions
- Visual regression tests
- Accessibility tests
- Cross-browser compatibility tests
- Mobile responsiveness tests

## Contributing

When adding to the Shared module:
1. Ensure component is truly reusable
2. Follow naming conventions
3. Add proper documentation
4. Include usage examples
5. Write comprehensive tests
6. Update module exports
7. Consider bundle size impact

## Documentation

### Component Documentation Template
```typescript
/**
 * @description Brief description of the component
 * @selector app-component-name
 * 
 * @input property - Description of the input
 * @output event - Description of the output event
 * 
 * @example
 * <app-component-name
 *   [property]="value"
 *   (event)="handler($event)">
 * </app-component-name>
 */
```

## Important Notes

- Keep the module focused on reusable UI elements
- Avoid business logic in shared components
- Maintain proper documentation
- Consider accessibility (WCAG compliance)
- Follow Angular style guide
- Keep bundle size in check
- Test cross-browser compatibility
- Ensure mobile responsiveness
