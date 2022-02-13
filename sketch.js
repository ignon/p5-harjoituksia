let sketch = function(p) {
	var x_alku = 0;
	
	var ctx;
	p.setup = function() {
	  ctx = p.createCanvas(800, 400);
	  ctx.parent = "vuoristo"
	  p.noiseSeed(123)
	  ctx.mouseOver(() => {p.loop(); console.log("mo")})
	  ctx.mouseOut(() => { p.noLoop() })
	  p.noLoop();
	}
	
	p.draw = function() {
	  p.background('lightgreen')
	  p.strokeWeight(2)
	  
	  x_alku += 0.01
	  for(var x = 0; x < p.width; x += 1) {
		var y = p.noise(x_alku + x/200)*p.height // <---
		p.stroke(100, 80, 30)
		
		p.line(x,y,  x, p.height)
		
		if (y > 200) {
		  p.stroke('cyan')
		  p.line(x,y, x, 200)
		}
		
		if (y < 100) {
		  p.stroke('lightgray')
		  p.line(x,y, x, 100)
		}
	  }
	}
};
new p5(sketch, 'vuoristo');



