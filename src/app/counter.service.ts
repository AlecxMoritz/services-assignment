export class CounterService {
    onAddActive(userCount: number) {
        console.log("User moved to Active. New count: " + userCount)
    }

    onAddInactive(userCount: number) {
        console.log("User moved to Inactive. New count: " + userCount)
    }
}

