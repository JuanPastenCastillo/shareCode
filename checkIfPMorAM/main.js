// @ts-check
// This Javascript program convert a integer into a suffixed string adding am or pm (12 hours base) bases on the corresponding value
const checkIfPMOrAM = (var1, ...rest) => {
 let result = formattedTime(Math.abs(var1))
 console.log('result:', result)
 return result
}

const formattedTime = (value) => {
 let pmOrAm = Math.trunc(value / 12) % 2 === 0 ? "AM" : "PM"
 if (value % 12 === 0) return `Time is: 12 ${pmOrAm}`
 if (value % 12 !== 0) return `Time is: ${value % 12} ${pmOrAm}`
}

checkIfPMOrAM(-50) // Time is: 2
checkIfPMOrAM(-48) // Time is: 12
checkIfPMOrAM(-47) // Time is: 11
checkIfPMOrAM(-38) // Time is: 2
checkIfPMOrAM(-37) // Time is: 1
checkIfPMOrAM(-36) // Time is: 12
checkIfPMOrAM(-35) // Time is: 11
checkIfPMOrAM(-26) // Time is: 2
checkIfPMOrAM(-25) // Time is: 1
checkIfPMOrAM(-24) // Time is: 12
checkIfPMOrAM(-23) // Time is: 11
checkIfPMOrAM(-14) // Time is: 2
checkIfPMOrAM(-13) // Time is: 1
checkIfPMOrAM(-12) // Time is: 12
checkIfPMOrAM(-11) // Time is: 11
checkIfPMOrAM(-2) // Time is: 2
checkIfPMOrAM(-1) // Time is: 1
checkIfPMOrAM(0) // Time is: 12
checkIfPMOrAM(1) // Time is: 1
checkIfPMOrAM(2) // Time is: 2
checkIfPMOrAM(11) // Time is: 11
checkIfPMOrAM(12) // Time is: 12
checkIfPMOrAM(13) // Time is: 1
checkIfPMOrAM(14) // Time is: 2
checkIfPMOrAM(23) // Time is: 11
checkIfPMOrAM(24) // Time is: 12
checkIfPMOrAM(25) // Time is: 1
checkIfPMOrAM(26) // Time is: 2
checkIfPMOrAM(35) // Time is: 11
checkIfPMOrAM(36) // Time is: 12
checkIfPMOrAM(37) // Time is: 1
checkIfPMOrAM(38) // Time is: 2
checkIfPMOrAM(47) // Time is: 11
checkIfPMOrAM(48) // Time is: 12
checkIfPMOrAM(49) // Time is: 1
checkIfPMOrAM(50) // Time is: 2
