const Items = require('../models/Items');
const { connectDB, disconnectDB } = require('../config/dbConn');

connectDB()


const seedData = async () => {
    try {
        // Test
        const itemsData = [
            {
                itemName: 'Product A',
                retailerPrices: [
                    { retailer: 'Retailer1', price: 1200 },
                    { retailer: 'Retailer2', price: 1000 },
                ],
                image_URL: 'https://example.com/image1.jpg',
            },
            {
                itemName: 'Product B',
                retailerPrices: [
                    { retailer: 'Retailer3', price: 500 },
                    { retailer: 'Retailer4', price: 400 },
                ],
                image_URL: 'https://example.com/image2.jpg',
            },
            // Add more items as needed
        ];

        // Insert the sample data into the database
        const insertedItems = await Items.create(itemsData);

        console.log('Seed data inserted successfully:', insertedItems);
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        disconnectDB()
    }
};

seedData();