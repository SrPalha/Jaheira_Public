const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu  } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "DIRECT_MESSAGES"] });
const { token } = require('./config.json');

client.once('ready', async () => {
    console.log('Bot tá online!');

    for (const guild of client.guilds.cache.values()) {
        // Criando sala Baixar
        let baixarChannel = guild.channels.cache.find(ch => ch.name === "📥 download baldurs g3" && ch.type === "GUILD_TEXT");
        if (!baixarChannel) {
            baixarChannel = await guild.channels.create('📥 download baldurs g3', { type: 'GUILD_TEXT' });
            
            const versionEmbed = new MessageEmbed()
                .setColor('#FF0000')
                .setDescription('Aqui você pode encontrar links para baixar Baldur`s Gate 3.')
                .setFooter({ text: 'Certifique-se de baixar a versão correta!' });
            
            const versionRow = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('yes_version')
                        .setLabel('BAIXAR')
                        .setEmoji("<:update:1143604253227749568>")
                        .setStyle('SECONDARY'),
                );
            await baixarChannel.send({ embeds: [versionEmbed], components: [versionRow] });
        }

        // Criando sala Atualizar
        let atualizarChannel = guild.channels.cache.find(ch => ch.name === "📥 atualizar baldurs g3" && ch.type === "GUILD_TEXT");
        if (!atualizarChannel) {
            atualizarChannel = await guild.channels.create('📥 atualizar baldurs g3', { type: 'GUILD_TEXT' });
            
            const updateEmbed = new MessageEmbed()
                .setColor('#FF0000')
                .setDescription('Verifique as últimas atualizações disponíveis para Baldur`s Gate 3.')
                .setFooter({ text: 'Mantenha seu jogo sempre atualizado!' });
            
            const updateRow = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('yes_update')
                        .setLabel('ATUALIZAR')
                        .setEmoji("<:update:1143604253227749568>") 
                        .setStyle('SECONDARY'),
                );
            await atualizarChannel.send({ embeds: [updateEmbed], components: [updateRow] });
        }
    }
});


client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        switch(interaction.customId) {
            case 'yes_update':
                const updateMenuEmbed = new MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription('Selecione a atualização que deseja ver:');
                
                const menu = new MessageSelectMenu()
                    .setCustomId('update_select') 
                    .setPlaceholder('Selecione uma atualização')
                    .addOptions([
                        {
                            label: 'Atualização 1',
                            description: 'Atualização',
                            value: 'update_1'
                        },
                        {
                            label: 'Atualização 2',
                            description: 'Atualização',
                            value: 'update_2'
                        },
                        {
                            label: 'Atualização 3',
                            description: 'Atualização',
                            value: 'update_3'
                        },
                        {
                            label: 'Atualização 4',
                            description: 'Atualização',
                            value: 'update_4'
                        },
                        {
                            label: 'Atualização 5',
                            description: 'Atualização',
                            value: 'update_5'
                        },
                        {
                            label: 'Atualização 6',
                            description: 'Atualização',
                            value: 'update_6'
                        },
                        {
                            label: 'Atualização 7',
                            description: 'Atualização',
                            value: 'update_7'
                        },
                        {
                            label: 'Atualização 8',
                            description: 'Atualização',
                            value: 'update_8'
                        }
                    ]);
                
                await interaction.reply({ 
                    content: 'Por favor, selecione uma atualização.', 
                    embeds: [updateMenuEmbed], 
                    components: [new MessageActionRow().addComponents(menu)], 
                    ephemeral: true 
                });
                break;            

            case 'yes_version':
                const versionMenuEmbed = new MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription('Selecione a versão que deseja baixar:');
                
                const versionMenu = new MessageSelectMenu()
                    .setCustomId('version_select')
                    .setPlaceholder('Selecione uma versão')
                    .addOptions([
                        {
                            label: 'Versão',
                            description: 'A versão',
                            value: 'version_1'
                        },
                        {
                            label: 'Versão ',
                            description: 'A versão',
                            value: 'version_2'
                        }
                    ]);

                    await interaction.reply({ 
                        content: 'Por favor, selecione uma versão.', 
                        embeds: [versionMenuEmbed], 
                        components: [new MessageActionRow().addComponents(versionMenu)], 
                        ephemeral: true 
                    });
                    break;
        }
    } else if (interaction.isSelectMenu()) {
            switch (interaction.customId) {
                case 'update_select':
                    switch (interaction.values[0]) {
                        case 'update_1':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'update_2':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'update_3':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'update_4':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'update_5':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'update_6':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'update_7':
                            await interaction.reply({ content: 'Texto', ephemeral: true })
                            break;
                        case 'update_8':
                            await interaction.reply({ content: 'Texto', ephemeral: true })
                    }
                    break;
                
                case 'version_select':
                    switch (interaction.values[0]) {
                        case 'version_1':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                        case 'version_2':
                            await interaction.reply({ content: 'Texto', ephemeral: true });
                            break;
                    }
                    break;
            }
        }
        
});

client.login(token);
