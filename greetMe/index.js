const moment = require("moment");

const greeting = {
  en: "Hello",
  fr: "Bonjour",
  hi: "Namaste",
  ar: "Hala",
};

exports.handler = async (event) => {
  let { name } = event.pathParameters;
  let { lang, ...info } = event.queryStringParameters;

  let message = `${greeting[lang] ?? greeting["en"]} ${name}`;

  let response = {
    message,
    info,
    timestamp: moment().unix(),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
