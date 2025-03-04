# Core Module

The Core module contains singleton services and components that are essential to the application and should be loaded once during the application startup. This module follows the Angular best practice of keeping the root module as lean as possible.

## Purpose

The Core module serves as the backbone of the application by:
- Providing application-wide singleton services
- Managing authentication and authorization
- Handling HTTP interceptors
- Implementing global error handling
- Managing application-level state
- Providing guards and resolvers
- Defining core interfaces and types

## Structure

```
core/
├── authentication/     # Authentication-related services and guards
├── interceptors/      # HTTP interceptors
├── guards/            # Application-level route guards
├── services/          # Core singleton services
├── models/            # Core interfaces and types
├── utils/            # Utility functions and helpers
├── constants/        # Application constants
└── core.module.ts    # Core module definition
```

## Key Components

### Services
- Authentication Service
- Error Handling Service
- Logging Service
- Configuration Service
- Storage Service
- API Service

### Interceptors
- Auth Interceptor
- Error Interceptor
- Loading Interceptor
- Caching Interceptor

### Guards
- Authentication Guard
- Role Guard
- Permission Guard

## Best Practices

1. **Singleton Services**
   - Services should be provided in 'root'
   - Implement `providedIn: 'root'` decorator
   - Ensure services are instantiated only once

2. **Module Import Guard**
   ```typescript
   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
     if (parentModule) {
       throw new Error('CoreModule is already loaded. Import it only in AppModule.');
     }
   }
   ```

3. **Error Handling**
   - Implement global error handling
   - Use proper error logging
   - Provide user-friendly error messages

4. **Security**
   - Implement secure authentication flows
   - Use proper token management
   - Follow security best practices

## Usage Example

```typescript
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    // Other core providers
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it only in AppModule.');
    }
  }
}
```

## Configuration

The Core module should be configured in the `app.module.ts`:

```typescript
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CoreModule,
    // Other modules
  ]
})
export class AppModule { }
```

## Testing

Core components should have:
- Comprehensive unit tests
- Integration tests for critical flows
- Mock services for testing
- Test coverage for error scenarios

## Contributing

When modifying the Core module:
1. Ensure changes don't break singleton pattern
2. Document any new services or interceptors
3. Update tests accordingly
4. Consider backward compatibility
5. Review security implications
6. Follow Angular style guide

## Important Notes

- Core module should be imported only once in AppModule
- Services should be singleton and provided in 'root'
- Avoid business logic in interceptors
- Keep core module focused on app-wide concerns
- Document all public APIs and interfaces
- Maintain proper error handling
- Consider performance implications
