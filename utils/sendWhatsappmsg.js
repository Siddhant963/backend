require('dotenv').config();
const axios = require('axios');

const WHATSAPP_API_URL = `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_ID}/messages`;


module.exports.sendMessage = async (order) => {

    try {
        const { _id, contact,email, products, totalPrice } = order;
        const productNames = products.map((p) => p.productname).join(", ");
        const response = await axios.post(WHATSAPP_API_URL, {
            messaging_product: "whatsapp",
            to: process.env.RECIPIENT_PHONE,
            type: "template",
            template: {
                name: "order_template", // Template name from WhatsApp Manager
                language: { code: "en_US" },
                components: [
                    {
                        type: "body",
                        parameters: [
                             { type: "text", text: email },
                            { type: "text", text: productNames },
                            { type: "text", text: `Rs.${totalPrice}` },
                            { type: "text", text: contact },
                        ],
                    },
                ],
            },
        }, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
        });

        console.log("Message sent:", response.data);
    } catch (error) {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
    }
};

