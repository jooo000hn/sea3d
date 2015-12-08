/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.NodeVelocity = function( target, params ) {
	
	THREE.NodeVector3.call( this );
	
	this.allow.requestUpdate = true;
	
	this.target = target;
	
	this.position = this.target.position.clone();
	this.velocity = new THREE.Vector3();
	this.moment = new THREE.Vector3();
	
	this.params = params || {};
	
};

THREE.NodeVelocity.prototype = Object.create( THREE.NodeVector3.prototype );
THREE.NodeVelocity.prototype.constructor = THREE.NodeVelocity;

THREE.NodeVelocity.prototype.updateAnimation = function( delta ) {
	
	this.velocity.subVectors( this.target.position, this.position );
	this.position.copy( this.target.position );
	
	switch(this.params.type) {
			
		case "elastic":
			
			var spring = this.params.spring;
			var friction = this.params.friction;
			
			// spring
			this.moment.x += this.velocity.x * spring;
			this.moment.y += this.velocity.y * spring;
			this.moment.z += this.velocity.z * spring;

			// friction
			this.moment.x *= friction;
			this.moment.y *= friction;
			this.moment.z *= friction;

			this.value.copy( this.moment );
		
			break;
	
		default:
			
			this.value.copy( this.velocity );
		
			break;
	}
	
};