const { google } = require("googleapis");
const catchAsync = require("../utils/catchAsync");

const getGoogleSheets = async (range) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: `${process.env.SCOPES}`,
  });
  // create client instance for auth
  const client = await auth.getClient();
  // create google sheets APIs
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const getData = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });
  return getData;
};

exports.getHome = catchAsync(async (req, res) => {
  const range = "Homepage!4:4";
  const getRows = await getGoogleSheets(range);
  res.send(getRows.data.values[0]);
});

exports.getAbout = catchAsync(async (req, res) => {
  const metaData = await getGoogleSheets("About Page");
  const getRows = await getGoogleSheets("About Page!4:4");

  res.send({
    values: getRows.data.values[0],
    rowsCount: metaData.data.values.length - 3,
  });
});

exports.postAbout = catchAsync(async (req, res) => {
  const { row } = req.body;
  const getRow = await getGoogleSheets(`About Page!${row + 3}:${row + 3}`);

  res.send(getRow.data.values[0]);
});

exports.getPortfolio = catchAsync(async (req, res) => {
  const metaData = await getGoogleSheets("Portfolio Page");
  const getRows = await getGoogleSheets("Portfolio Page!4:4");

  res.send({
    values: getRows.data.values[0],
    rowsCount: metaData.data.values.length - 3,
  });
});

exports.postPortfolio = catchAsync(async (req, res) => {
  const { row } = req.body;
  const getRow = await getGoogleSheets(`Portfolio Page!${row + 3}:${row + 3}`);

  res.send(getRow.data.values[0]);
});
