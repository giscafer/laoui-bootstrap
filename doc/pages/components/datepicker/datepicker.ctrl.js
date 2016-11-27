
export default class DatepickerDemoCtrl {
    constructor($scope) {
        this._$scope = $scope;
        this.dt = new Date();
        this.events = [
            {
                date: this.tomorrow,
                status: 'full'
            },
            {
                date: this.afterTomorrow,
                status: 'partially'
            }
        ];
        this.today();
        this.options = {
            customClass: this.getDayClass.bind(this),
            minDate: new Date(),
            showWeeks: true
        };
        this.toggleMin();

        this.tomorrow = new Date();
        this.tomorrow.setDate(this.tomorrow.getDate() + 1);
        this.afterTomorrow = new Date(this.tomorrow);
        this.afterTomorrow.setDate(this.tomorrow.getDate() + 1);

    }
    today() {
        this.dt = new Date();
    }
    clear() {
        this.dt = null;
    }
    // Disable weekend selection
    disabled(data) {
        let date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    toggleMin() {
        this.options.minDate = this.options.minDate ? null : new Date();
    }
    setDate(year, month, day) {
        this.dt = new Date(year, month, day);
    }
    getDayClass(data) {
        let date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (let i = 0; i < this.events.length; i++) {
                let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return this.events[i].status;
                }
            }
        }

        return '';
    }
}

