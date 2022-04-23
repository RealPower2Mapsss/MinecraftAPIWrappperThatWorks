const axios = require('axios');

class McPlayer {

    /**
     * @param  {String} nameOrUUID can either be the minecraft player name or his UUID
     */
    constructor(nameOrUUID) {
        this.playername = null;
        this.uuid = null;
        if (nameOrUUID.length <= 16) {
            this.playername = nameOrUUID;
        } else {
            this.uuid = nameOrUUID;
        }
    }
    async getName() {
        if (this.playername != null)
            return this.playername
        const response = await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${this.uuid}`);
        this.uuid = response.data.id;
        this.playername = response.data.name;
        return this.playername;
    }
    async getUUID() {
        if (this.uuid != null)
            return this.uuid

        const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${this.playername}`);
        this.uuid = response.data.id;
        this.playername = response.data.name;
        return this.uuid;
    }
    async getSkin() {
        const response = await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${this.uuid}`);
        const values = JSON.parse(atob(response.data.properties[0].value));
        console.log(values.textures.SKIN);
    }
    getCape() {

    }
    getHead() {

    }
}

module.exports = McPlayer;