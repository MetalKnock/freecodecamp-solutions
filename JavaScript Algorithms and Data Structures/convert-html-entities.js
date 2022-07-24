/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let result = str;
  result = result.replaceAll("&", "&amp;");
  result = result.replaceAll("<", "&lt;");
  result = result.replaceAll(">", "&gt;");
  result = result.replaceAll('"', "&quot;");
  result = result.replaceAll("'", "&apos;");
  return result;
}

convertHTML("Dolce & Gabbana&");
