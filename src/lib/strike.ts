export type Calender = CalenderDay[];

export interface CalenderDay {
    date: Date,
    data: StrikeData
}

export type StrikeData = Org[];

export interface Org {
    id: string,
    title: string,
    action: Action[],
    parent?: string
}

export interface Action {
    id: string,
    title: string,
    about: string,
    aboutAuthor: string,
    aboutSource: string,
    aboutImage?: string,
    location: string,
    link: string,
    linkArchive: string,
    times: ActionTime[],
    maybe?: string
    updated: Date,
    sev: number
}

export interface ActionTime {
    start: Date,
    end: Date,
    sev?: number
}


export function sevLesser(): number {
    return 9
}

export function sevLow(): number {
    return 7
}

export function sevNormal(): number {
    return 5
}

export function sevHigh(): number {
    return 3
}

export function sevMassive(): number {
    return 1
}

export function strikeAction(start: string, days: number, sev?: number): ActionTime {
    const startDate = new Date(start)
    let end = new Date(start)
    end.setDate(end.getDate() + days)
    return { start: startDate, end, sev }
}

export function filterMonth(data: StrikeData): Calender {
    let calender: Calender = []
    for (let index = 0; index < 30; index++) {
        // Get current date
        let current = new Date();
        current.setDate(current.getDate() + index)

        // Push orgs into data with filtered dates
        let finalData: StrikeData = []
        for (let index = 0; index < data.length; index++) {
            // Get org and make action bucket
            const org = data[index];
            let actionBucket: Action[] = []

            // Go through each action to get times
            for (let index = 0; index < org.action.length; index++) {
                // Get action and make time bucket
                const action = org.action[index];
                let timeBucket: ActionTime[] = [];

                // Go through each time to see if its in range
                for (let index = 0; index < action.times.length; index++) {
                    const time = action.times[index];
                    if (current > time.start && current < time.end) {
                        timeBucket.push(time)
                    }
                }

                // Push to action bucket if we've got some times
                if (timeBucket.length != 0) {
                    // Quick n' dirty action clone which we set our times to
                    let actionClone: Action = JSON.parse(JSON.stringify(action));
                    actionClone.times = timeBucket

                    // Add to the action bucket
                    actionBucket.push(actionClone)
                }
            }

            // Push to final data if we've got some actions
            if (actionBucket.length != 0) {
                // Quick n' dirty org clone which we set our actions to
                let orgClone: Org = JSON.parse(JSON.stringify(org));
                orgClone.action = actionBucket

                // Add to the final data
                finalData.push(orgClone)
            }
        }

        // Push to calender
        calender.push({
            date: current,
            data: finalData
        })
    }
    return calender
}

export function getAction(all: StrikeData[], id: string): [string, Org, Action] | null {
    function whatCategory(index: number): string {
        if (index == 0) {
            return "Trains"
        } else if (index == 1) {
            return "Postal"
        } else if (index == 2) {
            return "Medical"
        } else if (index == 3) {
            return "Education"
        } else {
            throw new Error("Unknown category index")
        }
    }

    for (let categoryIndex = 0; categoryIndex < all.length; categoryIndex++) {
        const category = all[categoryIndex];
        for (let index = 0; index < category.length; index++) {
            const org = category[index];
            for (let index = 0; index < org.action.length; index++) {
                const action = org.action[index];
                if (action.id == id) {
                    return [whatCategory(categoryIndex), org, action]
                }
            }
        }
    }
    return null
}
