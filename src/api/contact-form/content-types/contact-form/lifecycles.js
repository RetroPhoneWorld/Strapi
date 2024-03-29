module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: "attila2000.03.05@gmail.com",
          from: "noreply@dixiflor.ro",
        },
        {
          templateReferenceId: 1,
          subject: `Thank you for your order`,
        }
      );
      await strapi.plugins["email"].services.email.send(
        {
          to: "attila2000.03.05@gmail.com",
          from: "noreply@dixiflor.ro",
          subject: "Contact Form",
          html: `${result.name}<br>${result.message}`,
        },
        {
          templateReferenceId: 1,
          subject: `Thank you for your order`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
