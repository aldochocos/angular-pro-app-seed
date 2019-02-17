import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Workout } from 'src/health/shared/services/workouts/workouts.service';



@Component({
    selector: 'workout-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['workout-form.component.scss'],
    template: `
        <div class="workout-form">
            <form [formGroup]="form">
                <div class="workout-form__name">
                    <label>
                        <h3>Workout name</h3>
                        <input type="next" placeholder="e.g. English breakfast" formControlName="name">
                        <div class="error" *ngIf="required">
                            Workout name is required
                        </div>
                    </label>
                </div>

             

                <div class="workout-form__submit">
                    <div>
                        <button type="button" class="button" (click)="createWorkout()" *ngIf="!exists">Create workout</button>
                        <button type="button" class="button" (click)="updateWorkout()" *ngIf="exists">Save</button>
                        <a class="button button--cancel" [routerLink]="['../']">Cancel</a>
                    </div>

                    <div class="workout-form__delete" *ngIf="exists">
                        <div *ngIf="toggled">
                            <p>Delete item?</p>
                            <button class="confirm" type="button" (click)="removeWorkout()">Yes</button>
                            <button class="cancel" type="button" (click)="toggle()">No</button>
                        </div>
                        <button class="button button--delete" type="button" (click)="toggle()">
                            Delete
                        </button>
                    </div>

                </div>
            </form>
        </div>
    `
})
export class WorkoutFormComponet implements OnChanges {
  
    toggled = false;
    exists = false;

    @Input()
    workout: Workout;

    @Output()
    create = new EventEmitter<Workout>();

    @Output()
    update = new EventEmitter<Workout>();

    @Output()
    remove = new EventEmitter<Workout>();

    form = this.fb.group({
        name: ['', Validators.required]        
    })

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.workout && this.workout.name) {
            this.exists = true;

            const value = this.workout;
            this.form.patchValue(value);

            
        }
    }

    get required() {
        return (
            this.form.get('name').hasError('required') &&
            this.form.get('name').touched);
    }


    createWorkout() {

        if (this.form.valid) {
            this.create.emit(this.form.value);
        }
    }

    updateWorkout()
    {
        if (this.form.valid) {
            this.update.emit(this.form.value);
        }
    }

    removeWorkout() {
        this.remove.emit(this.form.value);
    }

    toggle() {
        this.toggled = !this.toggled;
    }

}