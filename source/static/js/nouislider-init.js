const slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 1000
  }
});

slider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});

// Смена значения при вводе

const setRangeSlider = (i, value) => {
  const arr = [null, null];
  arr[i] = value;

  slider.noUiSlider.set(arr);
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});
