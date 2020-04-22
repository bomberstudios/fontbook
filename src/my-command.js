import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  let currentPage = sketch.getSelectedDocument().selectedPage
  // get font families
  let fontFamilies = NSFontManager.sharedFontManager().availableFontFamilies()//.description()
  let position = 0
  let e = fontFamilies.objectEnumerator()
  let family
  while (family = e.nextObject()) {
    // console.log(family)
    let text = new sketch.Text({
      parent: currentPage,
      text: family,
      style: {
        fontFamily: family,
        alignment: sketch.Text.Alignment.left,
      }
    })
    text.frame.y = position
    position += 30
  }
}
