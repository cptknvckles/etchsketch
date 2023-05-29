const gridContainer = document.getElementById('gridContainer')
const testButton = document.getElementById('button')
const sizeButtons = document.querySelectorAll('.sizeButton')

// Main grid creation
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const size = button.dataset.size;
    creatDivs(size);
  });
})

function creatDivs(number){
    gridContainer.innerHTML = ''
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
            row.addEventListener('mouseover', () => {
              row.style.backgroundColor = '#6BBABE'
              
            });
        }
      
    }
}
// Rainbow style color, hacky way need to update 
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
  gridContainer.innerHTML = ''

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
              row.style.backgroundColor = `${hex}`; // Remove the background color on mouseout
            });
      }
    
  }
}

const randoColor = document.getElementById('randoColor')
randoColor.addEventListener('click', () => {
   let gridNumber = sliderValue.value
   creatDivsRandom(gridNumber)
})
//Slider implimentation
const sliderValue = document.getElementById('gridShow')
const sliderValueOutput = document.getElementById('gridOutput')

sliderValue.oninput = function() {
  sliderValueOutput.innerHTML = `${this.value} x ${this.value}`
}

const generate = document.getElementById('generate')

generate.addEventListener('click', () => {
    let gridNumber = sliderValue.value
    creatDivs(gridNumber)
})