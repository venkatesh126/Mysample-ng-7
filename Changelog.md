# MyProjectNg7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Routing events

- NavigationStart
- RoutesRecognized
- GuardsCheckStart 
- ChildActivationStart
- ActivationStart
- GuardsCheckEnd
- ResolveStart
- ResolveEnd
- ActivationEnd
- ChildActivationEnd 
- NavigationEnd
- Scroll 

## Routing Strategy

- Path Location startegy By Default its enabled..
- Hash Location strategy    // imports: [RouterModule.forRoot(routes,{useHash:true})],

-- router active 
routerLinkActive

-- if u want to navigate url using ts file

- this.router.navigate(['home']);

- get Router params using ActivatedRoute
-- this.activatedRoute.snapshot.params['id'];   // getting params synchronusly
-- this.activatedRoute.params.subscribe((params)=>{
    this.id=params['id'];
})

Srting objects are immutable
arrays and objects are mutables.


--ng FOr

<app-test *ngFor="let hero of heroes;let i=index;trackBy:trackByfn " [hero]="hero"></app-test>// its working../
<ng-template ngFor let-items [ngForof]="items" let-i="index"> // in ng-template

additional options in for loop

Additional Options: NgFor provides several exported values that can be aliased to local variables:

index will be set to the current loop iteration for each template context.
first will be set to a boolean value indicating whether the item is the first one in the iteration.
last will be set to a boolean value indicating whether the item is the last one in the iteration.
even will be set to a boolean value indicating whether this item has an even index.
odd will be set to a boolean value indicating whether this item has an odd index.


this.users.push(new Users('venkat',false))


