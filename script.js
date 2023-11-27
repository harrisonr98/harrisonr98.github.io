document.addEventListener("DOMContentLoaded", function() {
    // Function to update particles based on current viewport size
    function updateParticles() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var particlesDensity = 100;
  
      // Reduce particle count if the viewport is large
      if (width * height > 1920 * 1080) {
        particlesDensity = 50; // Less particles on larger viewports
      }
  
      // Initialize or update particles.js
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": particlesDensity,
            "density": {
              "enable": true,
              "value_area": 800
        }
      },
      "color": {
        "value": "#ff0000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.35,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff0000",
        "opacity": 0.35,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
    }
    
        // Run the update function on load and on window resize
        updateParticles();
        window.addEventListener('resize', updateParticles);
        
  // Stats.js for particle count
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  
  // Align stats display to the top left corner
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  
  // Query the particle count element
  count_particles = document.querySelector('.js-count-particles');
  
  // Update function for the stats
  update = function() {
    stats.begin();  // Begin monitoring stats
    stats.end();    // End monitoring stats
  
    // Update particle count
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
  
    // Request next frame update
    requestAnimationFrame(update);
  };
  
  // Start the update function
  requestAnimationFrame(update);
});
