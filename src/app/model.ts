export class Model {
    user;
    items;

    constructor() {
        this.user = "Simon";
        this.items = [new TodoItem("Get Toll Pass", false),
                    new TodoItem("Give Mac for service", false),
                    new TodoItem("Call Home", false),
                    new TodoItem("Collect Tickets", false)];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}