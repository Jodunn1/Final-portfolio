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




