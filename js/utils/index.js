function generateMnemonic() {
  const dict = ['atom','blade','crystal','dawn','ember','flame','globe','harbor','ivory','jewel','knock','leaf','mango','navy','orbit','pearl','query','river','solar','tiger','ultra','vivid','whale','xenon']
  const words = []
  for(let i=0;i<12;i++){ words.push(dict[Math.floor(Math.random()*dict.length)]) }
  return words
}
