//  IT (income tax) is calculated as follows:
//  if base-salary > 2000, IT = (150) + (base-salary - 2000) * 20%
//  if 1000 < base-salary <= 2000, IT = (base-salary - 1000) * 15%
//  if base-salary <= 1000, IT = 0

const calculate = (salary) => {
    let ret = 0.0

    if (salary <= 1000.0) return ret
    if (salary > 1000.0 && salary <= 2000.0) ret += (salary - 1000.0) * (0.15)
    if (salary > 2000.0) ret += 150 + (salary - 2000.0) * (0.20)
    if (salary > 3000.0) ret += (salary - 3000.0) * (0.05)

    return ret
}

module.exports = { calculate }
