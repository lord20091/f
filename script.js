function KattaSon(a, b) {
    if (a > b) {
        alert(a + ` soni ` + b + ` sonidan katta`)
    } else if (b > a) {
        alert(b + ` soni ` + a + ` sonidan katta`)
    } else {
        alert(`ikkala son ham teng`)
    }
}

let son1 = prompt(`Son kiriting`)
let son2 = prompt(`Son kiriting`)

KattaSon(son1, son2)