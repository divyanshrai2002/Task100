// templates/contactEmailTemplate.js

const contactEmailTemplate = (name, phone, message) => {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
      <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px;">
        
        <h2 style="color: white; background: #007bff; padding: 10px; border-radius: 5px; text-align:center;">
          New Contact Request
        </h2>

        <hr style="border: none; border-top: 1px solid #ddd;" />

        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>📞 Phone:</strong> ${phone}</p>

        <p><strong>📝 More About The Project:</strong></p>
        <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
          ${message || "No message provided"}
        </div>

        <br/>

        <p style="font-size: 12px; color: #888; text-align: center;">
          This message was sent from your Contact Form of ZecureAi
        </p>

      </div>
    </div>
  `;
};

module.exports = contactEmailTemplate;