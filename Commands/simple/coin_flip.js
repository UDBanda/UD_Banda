const commando = require('discord.js-commando');

class CoinFlipcommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flip a coin. landing on either Heads or Tails'
        });
    }

    async run(message, args){
        try{
            var chance = Math.floor(Math.random() * 2);
                    if(chance == 0)
                    {
                        message.reply("Your coin landed on Heads!");
                    }
                    else
                    {
                    message.reply("Your coin landed on Tails!");
                    }
        }catch(e){
            console.log(e.stack);
        }
    }

}

module.exports = CoinFlipcommand;