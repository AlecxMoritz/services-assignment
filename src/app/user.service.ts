import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()

export class UserService {
    _activeUsers = ['Max', 'Anna']
    _inactiveUsers = ['Chris', 'Manu']

    constructor(private _counterService: CounterService ) { }

    setActive(id: number) {
        this._activeUsers.push(this._inactiveUsers[id]);
        this._inactiveUsers.splice(id, 1);
        this._counterService.onAddActive(this._activeUsers.length);
    }

    setInactive(id: number) {
        this._inactiveUsers.push(this._activeUsers[id]);
        this._activeUsers.splice(id, 1);
        this._counterService.onAddInactive(this._inactiveUsers.length);
    }
}