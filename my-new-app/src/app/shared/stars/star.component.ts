import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html'
})

export class StarComponent {
   @Input() rating: number ;
    starWidth: number;

    arrayForRating(n: number): any[] {
        return Array(n);
    }
}
