export class Formatter {
    protected isWithZero: boolean = true
    sum(field: string | number) {
        return this.isWithZero
            ? (+field).toLocaleString('RU-ru', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
              })
            : (+field).toLocaleString('RU-ru', { maximumFractionDigits: 0 })
    }
    percent(field: string | number) {
        return (+field).toLocaleString('RU-ru')
    }
    getSignOfSum(field: number): string {
        if (field > 0) return '+'
        return ''
    }
    getDeclensionOfDate(
        count: number,
        type: 'days' | 'hours' | 'minutes' | 'seconds'
    ) {
        if (
            !(
                type == 'days' ||
                type == 'hours' ||
                type == 'minutes' ||
                type == 'seconds'
            )
        )
            return
        let titles = ['', '', '']
        if (type == 'days') {
            titles = ['день', 'дня', 'дней']
        } else if (type == 'hours') {
            titles = ['час', 'часа', 'часов']
        } else if (type == 'minutes') {
            titles = ['минута', 'минуты', 'минут']
        } else if (type == 'seconds') {
            titles = ['секунда', 'секунды', 'секунд']
        }
        const mod10 = count % 10
        const mod100 = count % 100
        if (mod10 === 1 && mod100 !== 11) {
            return titles[0]
        } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
            return titles[1]
        } else {
            return titles[2]
        }
    }

    constructor(isWithZero = true) {
        this.isWithZero = isWithZero
    }
}
