const filterFrequencies = (frequencyArray) => {
  if(frequencyArray < 40) {
    return [40]
  } else if (frequencyArray == 1500) {
    return [1000]
  }
  return frequencyArray
}

module.exports = filterFrequencies;