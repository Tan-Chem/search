document.addEventListener('DOMContentLoaded', function () { 
    var filterButtons = document.querySelectorAll('.filter-button'); 
    var arrows = document.querySelectorAll('.arrow'); 
    var filterOptions = document.querySelectorAll('.filter-options'); 
 
    for (var i = 0; i < filterButtons.length; i++) { 
        filterButtons[i].addEventListener('click', toggleFilterOptions); 
    } 
 
    function toggleFilterOptions() { 
        var options = this.nextElementSibling; 
        options.classList.toggle('hidden'); 
        var arrow = this.querySelector('.arrow'); 
        arrow.innerHTML = arrow.innerHTML === '&#9660;' ? '&#9650;' : '&#9660;'; 
    } 
 
    var priceFromInput = document.getElementById('price-from'); 
    var priceToInput = document.getElementById('price-to'); 
    var priceSlider = document.getElementById('price-slider'); 
 
    noUiSlider.create(priceSlider, { 
        start: [0, 1000], 
        connect: true, 
        range: { 
            'min': 0, 
            'max': 10000 
        }, 
        format: { 
            from: function (value) { 
                return parseInt(value); 
            }, 
            to: function (value) { 
                return parseInt(value); 
            } 
        } 
    }); 
 
    priceSlider.noUiSlider.on('update', function (values, handle) { 
        priceFromInput.value = values[0]; 
        priceToInput.value = values[1]; 
    }); 
 
    priceFromInput.addEventListener('change', function () { 
        priceSlider.noUiSlider.setHandle(0, this.value); 
    }); 
 
    priceToInput.addEventListener('change', function () { 
        priceSlider.noUiSlider.setHandle(1, this.value); 
    }); 

    const locationFilterBtn = document.querySelector('.filter-button.location');  
    const locationFilterOptions = document.querySelector('.filter-options.location');  
    const distanceRange = document.querySelector('.distance-range .slider');  
    const distanceNumberInput = document.querySelector('.distance-range .number-input');  
    const distanceValue = document.querySelector('.distance-range .distance-value');  
 

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
    // Открытие/закрытие фильтра  
    locationFilterBtn.addEventListener('click', () => {  
      locationFilterOptions.classList.toggle('hidden');  
    });  
  
    // Обработка изменений бегунка  
    distanceRange.addEventListener('input', () => {  
      distanceNumberInput.value = distanceRange.value;  
      distanceValue.textContent = '${distanceRange.value} км';  
    });  
  
    // Обработка изменений числового поля ввода  
    distanceNumberInput.addEventListener('input', () => {  
      distanceRange.value = distanceNumberInput.value;  
      distanceValue.textContent = '${distanceNumberInput.value} км';  
    });  
  
    // Обработка отправки формы  
    const searchForm = document.querySelector('.search-form');  
    searchForm.addEventListener('submit', (event) => {
  event.preventDefault();  
      const formData = new FormData(searchForm);  
      const locationData = {  
        distance: distanceNumberInput.value,  
        city: formData.get('city'),  
        street: formData.get('street'),  
        building: formData.get('building'),  
      };  
      console.log(locationData);  
   
    });  
  });
 

  
