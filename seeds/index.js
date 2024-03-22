const Items = require('../models/Items');
const { connectDB, disconnectDB } = require('../config/dbConn');

connectDB()


const seedData = async () => {
    try {
        // Test
        const itemsData = [
            {
                itemName: 'Beats Studio Pro',
                retailerPrices: [
                    { retailer: 'Target', price: 199.99, url: 'https://www.target.com/p/beats-studio-pro-bluetooth-wireless-headphones/-/A-89459966?preselect=89401490#lnk=sametab' },
                    { retailer: 'Walmart', price: 199.99, url: 'https://www.walmart.com/ip/Beats-Studio-Pro-Wireless-Headphones-Black/1575006069?athbdg=L1103&from=/search' },
                    { retailer: 'Best Buy', price: 199.99, url: 'https://www.bestbuy.com/site/beats-studio-pro-wireless-noise-cancelling-over-the-ear-headphones-black/6501017.p?skuId=6501017' },
                    { retailer: 'Amazon', price: 158.00, url: 'https://www.amazon.com/Beats-Studio-Pro-Cancelling-Headphones/dp/B0CGKG9NSY/ref=sr_1_1?crid=23GAEAB2R3805&dib=eyJ2IjoiMSJ9.FVxW8vMGWl87-REVDPfMszms_MN3apf2FBRQO-JWfns9YFD-IXGrxvUPdXu7zS_fVbfOMpngDZHPaFYpjsHxTdHtxlyht9Q4nFJdVL3LR-S6cpFHzl5bGVSyKfVdG3QXlYmAclzcyKpvZ200ur6vB7VY9uKK32byvMfVWXDHeIzsSNU0X0qK1n0uOzFhwcBrSvOIY6_M2eNr8d-5GWL5bCRzSzSFavvnqJM-jEvb3FI.bYXe0rl0fWbEm-_RPvS28uDnqWJP1VU3KYupnoEFD0s&dib_tag=se&keywords=beats+studio+pro&qid=1711062079&sprefix=beats+studo%2Caps%2C147&sr=8-1' }
                ],
                image_URL: 'https://i5.walmartimages.ca/images/Enlarge/854/637/6000206854637.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            },
            {
                itemName: 'Sony 65inch 4k',
                retailerPrices: [
                    { retailer: 'Walmart', price: 748.00, url: 'https://www.walmart.com/ip/Sony-65-Class-X80K-4K-Ultra-HD-LED-with-Smart-Google-TV-KD65X80K-2022-Model/662726901?from=/search' },
                    { retailer: 'Best Buy', price: 688.00, url: 'https://www.bestbuy.com/site/sony-65-class-x77l-led-4k-uhd-smart-google-tv/6544131.p?skuId=6544131' },
                    { retailer: 'Amazon', price: 688.00, url: 'https://www.amazon.com/Sony-Inch-Ultra-X77L-KD65X77L/dp/B0BZFD9VQ8/ref=sr_1_1?crid=38W85RZ7QJVT8&dib=eyJ2IjoiMSJ9.wgp_U4Q6s_JcC_j2-e0lDiiMdbyl8b8b3dxJ6RNO8FDH0C73pcqo-aI5Ajzm5o7nwExjw9o635f86dLOZJtt3k4jepZf0sAaJQjigYxFUUPMst3BaYp3bMQZCJ5I-hIzBFdJA4YXX91dd-MTE1YDT-KQ8ajg4tYzICEk1y4y0ELqEgPYiQricuvGKfpVPUn6LP2A1FGlSt4M60goCOq9B0N8R5NFgP6te73pEkT_9Xw.8Me9E2KUKO4t2OP4OKJJBLMYm_f3PXVzOWkNvy2CIW4&dib_tag=se&keywords=Sony+65inch+4k&qid=1711062276&sprefix=sony+65inch+4k%2Caps%2C143&sr=8-1' }
                ],
                image_URL: 'https://m.media-amazon.com/images/I/71Am8lvWpoL._AC_UY436_FMwebp_QL65_.jpg',
            },
            {
                itemName: 'iphone 15 pro ',
                retailerPrices: [
                    { retailer: 'Apple', price: 999.00, url: 'https://www.apple.com/shop/buy-iphone/iphone-15-pro' },
                    { retailer: 'Walmart', price: 1049.00, url: 'https://www.walmart.com/ip/Verizon-Apple-iPhone-15-Pro-128GB-Natural-Titanium/5053960333?from=/search' }
                ],
                image_URL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525404_sd.jpg;maxHeight=640;maxWidth=550',
            },
            {
                itemName: 'Playstation 5 Digital Edition',
                retailerPrices: [
                    { retailer: 'Target', price: 399.99, url: 'https://www.target.com/p/playstation-5-digital-edition-console/-/A-87716465#lnk=sametab' },
                    { retailer: 'Walmart', price: 399.00, url: 'https://www.walmart.com/ip/Playstation-5-Digital-Console-Slim-Marvel-s-Spider-Man-2-Bundle/5395472295?athbdg=L1102&from=/search' },
                    { retailer: 'Best Buy', price: 499.99, url: 'https://www.bestbuy.com/site/sony-interactive-entertainment-playstation-5-slim-console-white/6566039.p?skuId=6566039' },
                    { retailer: 'Amazon', price: 395.01, url: 'https://www.amazon.com/PlayStation-5-Digital/dp/B0BCNTW8GH/ref=sr_1_2?crid=IZQQ76UHSAJ4&dib=eyJ2IjoiMSJ9.n5CetFBf8iWRtdNCA982KUXJOulRu4t9uAkJIb3ub0nc2OUrOwhn6FtoK2D5KBNVjkKplH5_buFBjoTg6GPlfc9wufolVwJ33GSxQj0mZLvw7qaMWet6k-LCa9QJAhDyrPOkAKFqO2ycoeozuy8RbUI708Gr9pufM2pGSDGTwvuwn7jqsInPuOFLy54o7_uBVtPvwZiVkadl_2lFPP2RC64m_V9KYRKh-NHduygCGbA.7riQWpntrTHqWMIbUDoFrfvUjtGE3Sfq0oQxBwslDfA&dib_tag=se&keywords=playstation+5+digital+slim&qid=1711062669&sprefix=playstation+5+digital+slim%2Caps%2C106&sr=8-2' }
                ],
                image_URL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566040_sd.jpg;maxHeight=400;maxWidth=600',
            },
            {
                itemName: 'Macbook pro 14inch',
                retailerPrices: [
                    { retailer: 'Apple', price: 1599.00, url: 'https://www.apple.com/shop/buy-mac/macbook-pro' },
                    { retailer: 'Best Buy', price: 1599.00, url: 'https://www.bestbuy.com/site/apple-macbook-pro-14-laptop-m3-chip-8gb-memory-10-core-gpu-512gb-ssd-latest-model-space-gray/6534641.p?skuId=6534641' },
                    { retailer: 'Amazon', price: 1378.13, url: 'https://www.amazon.com/Apple-MacBook-Laptop-8%E2%80%91core-10%E2%80%91core/dp/B0CM5JLWJK?ref_=ast_sto_dp' }
                ],
                image_URL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534640_sd.jpg;maxHeight=400;maxWidth=600',
            },
            {
                itemName: 'Hp deskjet 2755e wireless printer',
                retailerPrices: [
                    { retailer: 'Target', price: 49.99, url: 'https://www.target.com/p/hp-deskjet-2755e-wireless-all-in-one-color-printer-scanner-copier-with-instant-ink-and-hp-26k67/-/A-82254388#lnk=sametab' },
                    { retailer: 'Walmart', price: 49.99, url: 'https://www.walmart.com/ip/HP-DeskJet-2755e-All-in-One-Inkjet-Printer-Color-Mobile-Print-Copy-Scan-Up-to/767389608?athbdg=L1700&from=/search' },
                    { retailer: 'Best Buy', price: 49.99, url: 'https://www.bestbuy.com/site/hp-deskjet-2755e-wireless-inkjet-printer-with-3-months-of-instant-ink-included-with-hp-white/6454282.p?skuId=6454282' },
                    { retailer: 'Amazon', price: 47.89, url: 'https://www.amazon.com/HP-DeskJet-2755e-Wireless-Printer/dp/B08XYP6BJV/ref=sr_1_3?crid=7EEVGIO4EHI6&dib=eyJ2IjoiMSJ9.wkDmv6qjZIi2BKFWC8aF4DxZYCOaWWNW1tczaIaaBkh8NSSuPU3FTlABTvg-adew3-pXZvAQ4Z1gsD99Xq_NLtywDy5dNoStrJobcE60eIDquS4mFe5yS4GGeBKUC-xYTIrY4atcClIEUNC9ns2V08lelPLQhzVWhwkGeztxlUXfLznlAZxugLIXHERYoOfi1HsjffxbNw8vgsYw2VwW-_fe1Xs_RVj9AwhhSGnSvYU.Cqeuv0r9RrVR0Jss4-Ay-BzEpEmLYezvXm6nUV66f4Y&dib_tag=se&keywords=Hp+deskjet+2755e+wireless+printer&qid=1711063145&sprefix=hp+deskjet+2755e+wireless+printer%2Caps%2C118&sr=8-3' }
                ],
                image_URL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454282_sd.jpg;maxHeight=400;maxWidth=600',
            },
            {
                itemName: 'Canon EOS rebel T7',
                retailerPrices: [
                    { retailer: 'Target', price: 479.99,url:'https://www.target.com/p/canon-eos-rebel-t7-ef-s-18-55mm-is-ii-kit/-/A-54360840#lnk=sametab' },
                    { retailer: 'Walmart', price: 479.00, url:'https://www.walmart.com/ip/Canon-EOS-Rebel-T7-EF-S-18-55mm-IS-II-Kit/801683680?athbdg=L1600&from=/search' },
                    { retailer: 'Best Buy', price: 479.00, url:'https://www.bestbuy.com/site/canon-eos-rebel-t7-dslr-video-camera-with-18-55mm-lens-black/6323758.p?skuId=6323758' },
                    { retailer: 'Amazon', price: 479.99, url:'https://www.amazon.com/Canon-Rebel-T7-18-55mm-II/dp/B07C2Z21X5/ref=sr_1_2?crid=3SGQEJRD5R92L&dib=eyJ2IjoiMSJ9.HHVczMaz0xYLgTghpU7CKQrV1lBSN6BjL4IfPwMXZV4U3WQNxzppb4YLhSNFKQe_Nb2J3Gvpo1EW5fqWGUBfnYmOOFczTiVC5dhVsjgAVvrtU2Z2c6dbfjqUbiQY1wGnugolhzc1wMswfKxKaJShOo2Wt1zeKpgpsa6ItIVVvF0Nk-xF0i56gX8GjZISVLH6S7UMI9RSyNVKvXjDQGDapruyvQuk384mtYYZtszwuBc.qkiHwrd5ZEohFzro1oSEMb4-YzD2_hmggSCm7GamiXc&dib_tag=se&keywords=Canon+EOS+rebel+T7&qid=1711063229&sprefix=canon+eos+rebel+t7%2Caps%2C134&sr=8-2' }
                ],
                image_URL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323758_sd.jpg;maxHeight=400;maxWidth=600',
            },
            {
                itemName: 'JBL Flip 5',
                retailerPrices: [
                    { retailer: 'Walmart', price: 79.92, url:'https://www.walmart.com/ip/JBL-Flip-5-Portable-Waterproof-Wireless-Bluetooth-Speaker-Black/870189368?from=/search' },
                    { retailer: 'Best Buy', price: 479.00, url:'https://www.bestbuy.com/site/jbl-flip-5-portable-bluetooth-speaker-black/6356535.p?skuId=6356535' },
                    { retailer: 'Amazon', price: 479.99, url:'https://www.amazon.com/JBL-Waterproof-Portable-Bluetooth-Speaker/dp/B07QDPXCSH/ref=sr_1_3?crid=SFSEOHBRR85G&dib=eyJ2IjoiMSJ9.7rz-3wObt-cltVMx0bO9RDiHGNUI-mEKTU3hQWKwpStrxWZytu-N0lLp09O6O6wmQfOMZM1VjfzpV7CZpj2Muj4zITe_SKTqZiC3Fx0DbgCjkF8tsKVpWRl9mnUGJYxn64QMZY7nElHQtsTTMD6ZqzDmIjF15_snH7ukKKMGnmVVasb69AgGz6yEOK7hk6oyY3lOc0ig5Z3uVF9AlAQVBSPHFOfs05kwcazw7YYxBgI._XL79dXy632Pbbikx9M1QAkFAlamh5E1B-A7_K32i2k&dib_tag=se&keywords=jbl+speaker&qid=1711063337&sprefix=jbl+s%2Caps%2C114&sr=8-3' }
                ],
                image_URL:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg;maxHeight=400;maxWidth=600'
            }
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