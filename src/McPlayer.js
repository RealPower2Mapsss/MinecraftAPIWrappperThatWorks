class McPlayer {

    /**
     * @param  {String} nameOrUUID can either be the minecraft player name or his UUID
     */
    constructor(nameOrUUID) {
        console.log(nameOrUUID.length);
        this.playername = null;
        this.uuid = null;
        if (nameOrUUID.length <= 16) {
            this.playername = nameOrUUID;
        } else {
            this.uuid = nameOrUUID;
        }
    }
    getName() {
        if (this.playername != null)
            return this.playername
    }
    getUUID() {
        if (this.uuid != null)
            return this.uuid
    }
    getSking() {

    }
    getCape() {

    }
    getHead() {

    }
}

module.exports = McPlayer;