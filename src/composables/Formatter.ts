export class Formatter {
    protected isWithZero:boolean = true
    sum(field:string | number){
        
        return this.isWithZero ? (+field).toLocaleString('RU-ru', {minimumFractionDigits:2, maximumFractionDigits:2}):(+field).toLocaleString('RU-ru', {maximumFractionDigits:0})
    }
    percent(field:string | number){
            return (+field).toLocaleString('RU-ru')
    }
    constructor(isWithZero=true){
        this.isWithZero = isWithZero
    }
}