import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
	animations: [
		trigger('openClose', [
			// ...
			state('open', style({
				height: '25rem',
				opacity: 1,
			})),
			state('closed', style({
				height: '20rem',
				opacity: 1,
			})),
			transition('open => closed', [
				animate('0.5s')
			]),
			transition('closed => open', [
				animate('0.5s')
			]),
			transition('* => closed', [
				animate('0.5s')
			]),
			transition('* => open', [
				animate('0.5s')
			]),
			transition('open <=> closed', [
				animate('0.5s')
			]),
			transition('* => open', [
				animate('0.5s',
					style({ opacity: '*' }),
				),
			]),
			transition('* => *', [
				animate('0.5s')
			]),
		]),
	],
	selector: 'app-dashboard-filters',
	templateUrl: './dashboard-filters.component.html',
	styleUrls: ['./dashboard-filters.component.css']
})
export class DashboardFiltersComponent {


	@Input() logging = false;
	isOpen = false;

	toggle() {
		this.isOpen = !this.isOpen;
	}

	onAnimationEvent(event: AnimationEvent) {
		if (!this.logging) {
			return;
		}
		// openClose is trigger name in this example
		console.warn(`Animation Trigger: ${event.triggerName}`);

		// phaseName is "start" or "done"
		console.warn(`Phase: ${event.phaseName}`);

		// in our example, totalTime is 1000 (number of milliseconds in a second)
		console.warn(`Total time: ${event.totalTime}`);

		// in our example, fromState is either "open" or "closed"
		console.warn(`From: ${event.fromState}`);

		// in our example, toState either "open" or "closed"
		console.warn(`To: ${event.toState}`);

		// the HTML element itself, the button in this case
		console.warn(`Element: ${event.element}`);
	}

}