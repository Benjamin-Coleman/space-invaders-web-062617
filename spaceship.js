class Spaceship {
	constructor(name, crewMembers, phasers, shields){
		this.name = name
		this.crewMembers = crewMembers
		this.phasers = phasers
		this.shields = shields
		this.warpDrive = 'disengaged'
		this.cloaked = false
		this.phasersCharge = 'uncharged'
		if (this.crewMembers.length < 1){
			this.docked = true}
		else {
				this.docked = false
				this.crewMembers.forEach(member => member.currentShip = this)
		}
		
	}


}