const gridContainer = document.getElementById('gridContainer')
const testButton = document.getElementById('button')
const eraseAll = document.getElementById('eraseAll')
const eraser = document.getElementById('eraser')
const colorChoice = document.getElementById('colorPicker')

//Main grid creation
let isDrawing = true
let colorPicked = true
let color = 'black'

function eraseToggle(){
    isDrawing = !isDrawing
    eraser.textContent = isDrawing ? 'Eraser Off' : 'Eraser On'
  }
eraser.addEventListener('click', eraseToggle)

eraseAll.addEventListener('click', () =>{
  gridContainer.innerHTML = ''
  alert('Created 8px by default')
  creatDivs(8)
})

function colorToggle(){
  color = this.value
}

colorChoice.addEventListener('input', colorToggle)

function creatDivs(pixelSize){
    gridContainer.innerHTML = ''
    gridContainer.style.cursor = 'crosshair'
    const containerSize = '600px'
    gridContainer.style.width = containerSize
    gridContainer.style.height = containerSize
    const numPixels = Math.floor(parseInt(containerSize) / pixelSize)
    for(let i = 0; i < numPixels; i++){
        const column = document.createElement('div')
        column.classList.add('column')
        gridContainer.appendChild(column)

        for(let j=0;j < numPixels; j++){
            const row = document.createElement('div')
            row.classList.add('row')
            row.style.width = pixelSize + 'px'
            row.style.height = pixelSize + 'px'
            column.appendChild(row)

            row.addEventListener('mousemove', (e) => {
              if(e.buttons === 1){
                if(isDrawing){
                  if(colorPicked){
                    row.style.backgroundColor = color
                  }
                }else{
                  row.style.backgroundColor = 'white'
                }
                
              }
            })
        }
    }
  }         

// Rainbow style color, hacky way unfortunately
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
function getRandomNumber(){
    return Math.floor(Math.random() * num.length)
}

function helperFunc(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
       hex += num[getRandomNumber()]
    }
    return hex 
}

function creatDivsRandom(pixelSize){
  gridContainer.innerHTML = ''
  gridContainer.style.cursor = 'crosshair'
  const containerSize = '600px'
  gridContainer.style.width = containerSize
  gridContainer.style.height = containerSize
  const numPixels = Math.floor(parseInt(containerSize) / pixelSize)
  for(let i = 0; i < numPixels; i++){
      const column = document.createElement('div')
      column.classList.add('column')
      gridContainer.appendChild(column)

      for(let j=0;j < numPixels; j++){
          const row = document.createElement('div')
          row.classList.add('row')
          row.style.width = pixelSize + 'px'
          row.style.height = pixelSize + 'px'
          column.appendChild(row)
          let hex = helperFunc()
          row.addEventListener('mousemove', (e) => {
            if(e.buttons === 1){
              if(isDrawing){
                row.style.backgroundColor = `${hex}`
              }else{
                row.style.backgroundColor = 'white'
              }
            }
          })
        }
    }
}


//Slider implimentation
const gridValue = document.getElementById('gridShow')
const sizeValue = document.getElementById('pixelSize')
const gridValueOutput = document.getElementById('gridOutput')
const pixelOutput = document.getElementById('pixelOutput')

sizeValue.oninput = function() {
  pixelOutput.innerHTML = `Size: ${this.value}px`
}
const generate = document.getElementById('generate')

generate.addEventListener('click', () => {
    generate.style.backgroundColor = '#7D7D7D'
    let pixelNumber = sizeValue.value
    creatDivs(pixelNumber)
})
const randoColor = document.getElementById('randoColor')

randoColor.addEventListener('click', () => {
  randoColor.style.backgroundColor = '#7D7D7D'
  let pixelNumber = sizeValue.value
  creatDivsRandom(pixelNumber)
})
// box-shadow: inset -4px -2px 2px white;
