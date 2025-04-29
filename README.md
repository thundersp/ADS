# ADS

## Generate new project in angular
```
ng new my-project
```

## Generate new component
```
ng generate component my-component
```
OR
```
ng g c my-component
```

## Angular Data binding

To render the values of ts into html, use {{ <variable name> }}. Fetch the value in ts file and assign it to the variable name. 

## Taking Input
in html
```
<input type="text" (keyup)="keyHandler($event)" />
```
For ts
```
keyHandler(event: KeyboardEvent) {
    console.log(event.key);
}
```
this way, we can handle the key events and perform actions accordingly.

### Routing

Angular is a single page application framework, yet it allows for some routing, which allows the browser to only load the stuff that is needed for the current route. This improves the performance and user experience of the application.
Router-outlet is used for routing. The syntax in app.routes.ts is 
```
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/greetings/greetings.component').then(m => m.GreetingsComponent)
    },
    {
        path: 'counter',
        loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)
    }
];
```

and to render the component, use the router-outlet tag in the html file, <router-outlet></router-outlet>, the import which was declared for that route will be loaded in place of the router-outlet tag.

### Angular Services

Used for encapsulating HTTP calls and managing data not related to directly rendering it. 
Unlike the @Component decorator, which is used for creating components, services use @Injectable decorator.
Sample service
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
}
```
providedIn: 'root', due to this line, the service will be available throughout the application. Without that line, the service needs to be provided in a module or component where it is used, with providers: [TodosService]
To fetch the value of service, use variable = inject(serviceName), to access its value. 

### Oninit
```
ngOnInit(): void {
    // code to be executed when the component is initialized aka when the route of the component is loaded.
}
```
When other route is accessed, the component will be destroyed and the new component will be loaded.

```
ngOnDestroy(): void {
    // code to be executed when the component is destroyed aka when the route of the component is unloaded.
}
```

### Iterating
To iterate and print data, 
```
@for (todo of TodosService;track $index) {
<div>{{todo.title}}</div>
}
```

### HTTP call
To make an HTTP call, included provideHTTPClient in app.config.ts 
```
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient() ,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
```
Then in the service, we can inject that client,
```
http = inject(HttpClient)
```
As everything is implemented as class, You need to use this.name etc etc to access the property

### Angular directives

1. components
2. Attribute directives
3. Structural directives

```
imports: [ NgIf]
```
This is a Structural directive that allows you to conditionally render a block of HTML based on a condition. It is used to show or hide elements based on a condition.
```HTML
<p *ngIf="!todos.length()">Loading...</p>
```
OR 
```
@if (!todos.length()) {
<p>Loading...</p>
}
```
If the todos are empty, show a message.

### Reactive Forms
