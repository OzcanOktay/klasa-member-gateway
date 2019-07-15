const { GuildMemberStore } = require('discord.js');
const KlasaMember = require('./KlasaMember');

/**
 * Adds our extensions to d.js's MemberStore
 * @extends external:GuildMemberStore
 */
class KlasaGuildMemberStore extends GuildMemberStore {

    /**
     * Fetches member and syncs settings
     * @param  {...any} args d.js args for MemberStore#fetch
     */
    async fetch(...args) {
        let members = [];
        const member = await Promise.all(args.map((mbr) => super.fetch(mbr.id)));
        member.map((mb) => members.push(new KlasaMember(mb)));
        m.map(async(mbs) => await mbs.settings.sync())
        return members;
    }
}
module.exports = KlasaGuildMemberStore;
