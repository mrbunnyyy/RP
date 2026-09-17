export default {
    name: "ld",

    async prefixExecute(interaction) {
        await interaction.reply({
            content: "LD Command Working ✅",
        });
    },
};
