const gridContainer = document.getElementById('gridContainer')
const testButton = document.getElementById('button')
const eraseAll = document.querySelectorAll('.sizeButton')

//Main grid creation
//TODO create eraseAll function

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
                row.style.backgroundColor = '#6BBABE'
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


function creatDivsRandom(number){
  // gridContainer.innerHTML = ''

  for(let i = 0; i < number; i++){
      const column = document.createElement('div')
      column.classList.add('column')
      gridContainer.appendChild(column)

      for(let j=0;j < number; j++){
          const row = document.createElement('div')
          row.classList.add('row')
          row.style.width = '16px'
          row.style.height = '16px'
          column.appendChild(row)
          let hex = helperFunc()
          row.addEventListener('mouseover', () => {
              row.style.backgroundColor = `${hex}`;
            });
      }
    
  }
}

const randoColor = document.getElementById('randoColor')
randoColor.addEventListener('click', () => {
   let gridNumber = gridValue.value
   creatDivsRandom(gridNumber)
})
//Slider implimentation
const gridValue = document.getElementById('gridShow')
const sizeValue = document.getElementById('pixelSize')
const gridValueOutput = document.getElementById('gridOutput')
const pixelOutput = document.getElementById('pixelOutput')

// gridValue.oninput = function() {
//   gridValueOutput.innerHTML = `${this.value} x ${this.value}`
// }

sizeValue.oninput = function() {
  pixelOutput.innerHTML = `${this.value}px`
}
const generate = document.getElementById('generate')

generate.addEventListener('click', () => {
    // let gridNumber = gridValue.value
    let pixelNumber = sizeValue.value
    creatDivs(pixelNumber)
})