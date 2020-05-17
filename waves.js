import SineWaves  from 'sine-waves';

const makeWaves = (elementId, amplitudes) => {

    var waves = new SineWaves({
  el: document.getElementById(elementId),
  
  speed: 4,
  
  width: function() {
    return 1745;
  },
  
  height: function() {
    return 800;
  },
  
  ease: 'SineInOut',
  
  wavesWidth: '70%',
  
        waves: [
            /*
    {
      timeModifier: 4,
      lineWidth: 1,
      amplitude: -amplitudes[0],
      wavelength: amplitudes[0]
    },
    {
      timeModifier: 2,
      lineWidth: 2,
      amplitude: -amplitudes[1],
      wavelength: amplitudes[1]
    },
    {
      timeModifier: 1,
      lineWidth: 1,
      amplitude: -amplitudes[2],
      wavelength: amplitudes[2]
    },

*/

// rob edit to 150 rather than 200 as the next increment
      {
      timeModifier: 0.5, // speed
      lineWidth: 1,
      amplitude: -amplitudes[3],
      wavelength: amplitudes[3]
    },
/*
    {
      timeModifier: 0.5,
      lineWidth: 1,
      amplitude: -200,
      wavelength: 200
    },
    {
      timeModifier: 0.25,
      lineWidth: 2,
      amplitude: -400,
      wavelength: 400
    }
*/
  ],
 
  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
    
    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
    });

}

export default makeWaves
