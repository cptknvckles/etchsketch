const gridContainer = document.getElementById('gridContainer')
const testButton = document.getElementById('button')
const sizeButtons = document.querySelectorAll('.sizeButton')


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
            row.style.border = '1px solid white'
            column.appendChild(row)

            // row.addEventListener('mouseover', () => {
            //     row.style.backgroundColor = 'blue'; // Change the background color on hover
            //   });
        
              row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'purple'; // Remove the background color on mouseout
              });
        }
      
    }
}

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const size = button.dataset.size;
      creatDivs(size);
    });
})
