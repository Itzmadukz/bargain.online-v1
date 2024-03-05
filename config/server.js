const { MongoClient } = require("mongodb");

const main = async() => {

    const uri = 'mongodb+srv://lrae@admin:lrae@bargain.v0oyfrp.mongodb.net/?retryWrites=true&w=majority&appName=Bargain';

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDataBases(client);

    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }

};

main().catch(console.error);

const listDataBases = async(client) => {
    const databaseList = await client.db().admin().listDataBases();

    console.log("Databases");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}