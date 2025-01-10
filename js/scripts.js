// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const homeblue = document.querySelector('.home-blue');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          homeblue.classList.add('blue');  
          return;
		}   
            homeblue.classList.remove('blue');
            entry.target.classList.remove('in-view');
        
    });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.home');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const aboutblue = document.querySelector('.about-blue');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          aboutblue.classList.add('blue');  
		  return;
		}
		entry.target.classList.remove('in-view');
        aboutblue.classList.remove('blue');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.aboutme2');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const aboutblue = document.querySelector('.about-blue');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          aboutblue.classList.add('blue');  
		  return;
		}
		entry.target.classList.remove('in-view');
        aboutblue.classList.remove('blue');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.aboutme3');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const projectblue = document.querySelector('.projects-blue');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          projectblue.classList.add('blue');  
		  return;
		}
		entry.target.classList.remove('in-view');
        projectblue.classList.remove('blue');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.projects2');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const projectblue = document.querySelector('.projects-blue2');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          projectblue.classList.add('blue');  
		  return;
		}
		entry.target.classList.remove('in-view');
        projectblue.classList.remove('blue');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.projects3');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const contactblue = document.querySelector('.contact-blue');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          contactblue.classList.add('blue');  
		  return;
		}
		entry.target.classList.remove('in-view');
        contactblue.classList.remove('blue');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.contact');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop2');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop3');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop4');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop5');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop6');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const skillappear = document.querySelector('.pop7');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          skillappear.classList.add('pop1');  
		  return;
		}
		entry.target.classList.remove('in-view');
        skillappear.classList.remove('pop1');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.skill-appear');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred1');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate1');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredleft = document.querySelector('.blurred2');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredleft.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredleft.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate1');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred3');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate2');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred4');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate2');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred5');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate3');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred6');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate3');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred7');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate4');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred8');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate4');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred9');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate5');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred10');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate5');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred10');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('hover');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('hover');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate5');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred11');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate6');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const blurredright = document.querySelector('.blurred12');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          blurredright.classList.add('blurred-in-bottom');  
		  return;
		}
		entry.target.classList.remove('in-view');
        blurredright.classList.remove('blurred-in-bottom');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.blurredanimate6');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const slidein = document.querySelector('.slided1');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          slidein.classList.add('slide-in-fwd-center');  
		  return;
		}
		entry.target.classList.remove('in-view');
        slidein.classList.remove('slide-in-fwd-center');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.slide-in1');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 


document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
        const slidein = document.querySelector('.slided2');
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
          slidein.classList.add('slide-in-fwd-center');  
		  return;
		}
		entry.target.classList.remove('in-view');
        slidein.classList.remove('slide-in-fwd-center');
	  }
    );
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.slide-in2');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});



