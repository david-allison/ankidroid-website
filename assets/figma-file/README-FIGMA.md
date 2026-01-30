## Basic Figma File Guide
### How to Export
1. Select the entire canvas by right clicker on the respective container name on the left bar(for example, Final Image(30-01-26)), or by clicking the respective name on the top
2. Scroll to the bottom on the right bar, and open the 'Export' Section, then export as SVG

### Possible Issues and Fixes
1. Due to multiple iterations of resizing the cards, they have been flattened and turned into vectors, and hence cannot be edited on a minute scale, in such a scenario, it is recommended to copy assets from the file 'Final Posted Image(22-01-26)' and put it over the respective area you wish to edit after masking
2. Borders: Since the cards have been turned into vectors, they do not possess a traditional 'border' property(or stroke outline as figma calls it), hence Black rectangles 2 pixels wider and longer have been placed beneath each card vector to create the illusion of a border, it is recommended to move forward with this approach until figma adds a native border support
3. The Spacing Utilised in the cards is primarily based upon the Development Standards defined here: https://m3.material.io/
### Extensions Used for Design
1. Clay Mockups 3D
2. SVG Parser
3. SkewDat

### SVGs are sourced from the AnkiDroid Website

#### TODO: the SVG exported by the Figma file displays the text as part of the svg, causing issues in localization in the future
Possible Fix: Relative Positioning of Text overlayed on the image

#### Previous Iterations and media have been included in the Figma File