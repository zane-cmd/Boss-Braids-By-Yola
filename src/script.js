document.addEventListener('DOMContentLoaded', (event) => {
    const num1 = document.querySelector('.num1');
    const num2 = document.querySelector('.num2');

    num2.addEventListener('click', () => {
      num2.classList.add('p-active');
      num1.classList.remove('p-active');
    });

    num1.addEventListener('click', () => {
      num1.classList.add('p-active');
      num2.classList.remove('p-active');
    });
  });


  //gstyle page

  var mainImage = document.getElementById('MainImg');
  var smallimg = document.getElementsByClassName('small-img');
  
  function updateMainImage(index) {
    var imgSrc = smallimg[index].src;
    mainImage.style.backgroundImage = `url(${imgSrc})`;
    mainImage.style.backgroundSize = 'cover'; // Adjust as needed
    mainImage.style.backgroundPosition = 'center'; // Adjust as needed
  }
  
  for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
      updateMainImage(i);
    }
  }